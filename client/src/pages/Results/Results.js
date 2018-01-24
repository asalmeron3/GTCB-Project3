import React, { Component } from "react";
import { Row, Container, Col } from "../../components/Results";
import Card from "../../components/Results";
import HeaderExampleBlock from "../../components/Results";
import addyAPI from "../../utils/API";
import { Grid } from 'semantic-ui-react';

const query = "540%20Old%20Highway%203%20Hampton%20GA";

class Results extends Component {
  constructor(props){
    super(props);
    this.state = {
      govReps: []
  }
  }

  componentDidMount() {
    addyAPI.search(query)
    .then((res) => {
      this.setState({govReps: res.data.officials});
    }).catch((error) => {
      console.log(error);
    })
  }

  

  render() {
    return (
        <Container fluid>
          <HeaderExampleBlock />
          <Grid divided="vertically">
            <Grid.Row columns={3}>
              <Grid.Column>
                {this.state.govReps.map(govRep =>(
                  <Card
                  name={govRep.name}
                  party={govRep.party}
                  urls={govRep.urls}
                  photoUrl = {govRep.photoUrl}
                  facebook = {govRep.channels[0].id}
                  twitter = {govRep.channels[1].id}
                  />
                ))}
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </Container>
    );
  }
}

export default Results;