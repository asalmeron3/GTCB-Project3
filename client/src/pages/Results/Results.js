import React, { Component } from "react";
import { Row, Container, Col } from "../../components/Results";
import Card from "../../components/Results";
import HeaderExampleBlock from "../../components/Results";

const query = "https://www.googleapis.com/civicinfo/v2/representatives?address=30228&levels=country&roles=legislatorUpperBody&roles=legislatorLowerBody&key=AIzaSyA7DKuMXwSBV5QJqF2SLBYjf_8rZyNqCu4";

class Results extends Component {
 constructor(){
   super();
   this.state = {
     person: [],
   };
 }

  componentDidMount() {
    this.getResponse();
  }

  getResponse = () => {
    fetch(query)
    .then(results => this.setState({ person: results.data}))
    .catch(err => console.log(err));
  }

  

  render() {
    return (
        <Container fluid>
        <Row>
          <HeaderExampleBlock />
          {this.state.person.map(p => (
            <Card
            name={p.officials.name}
            party={p.officials.party}
            urls={p.officials.party}
            photoUrl = {p.officials.photoUrl}
            channels_type = {p.officials.channels.type}
            channels_id = {p.officials.channels.id}
            />
          ))}
         
        </Row>
      </Container>
    );
  }
}

export default Results;