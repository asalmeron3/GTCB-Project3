import React, { Component } from "react";
import MapGL from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoibGluYWNsYXJrIiwiYSI6ImNqY28wb3M2MTB5aDkzNG54NmkzaHRkZ24ifQ.Q-2Qyz2AfFUHY4J_-a0shA';
class Map extends Component {

    state = {
        viewport: {
          latitude: 40,
          longitude: -100,
          zoom: 3,
          bearing: 0,
          pitch: 0,
          width: 500,
          height: 500
        }
      };
    
      componentDidMount() {
        window.addEventListener('resize', this._resize);
        this._resize();
      }
    
      componentWillUnmount() {
        window.removeEventListener('resize', this._resize);
      }
    
      _resize = () => {
        this.setState({
          viewport: {
            ...this.state.viewport,
            width: this.props.width || window.innerWidth,
            height: this.props.height || window.innerHeight
          }
        });
      };
    
      _onViewportChange = viewport => this.setState({viewport});
    
      _onHover = event => {
        const {features, srcEvent: {offsetX, offsetY}} = event;
        const hoveredFeature = features && features.find(f => f.layer.id === 'data');
    
        this.setState({hoveredFeature, x: offsetX, y: offsetY});
      };
    
      _renderTooltip() {
        const {hoveredFeature, year, x, y} = this.state;
    
        return hoveredFeature && (
          <div className="tooltip" style={{left: x, top: y}}>
            <div>State: {hoveredFeature.properties.name}</div>
            <div>Median Household Income: {hoveredFeature.properties.value}</div>
            <div>Percentile: {hoveredFeature.properties.percentile / 8 * 100}</div>
          </div>
        );
      }
    
      render() {
    
        const {viewport, mapStyle} = this.state;
    
        return (
          <div className="ui centered two column grid">
            <div className="column">
                <MapGL
                {...viewport}
                mapStyle={mapStyle}
                onViewportChange={this._onViewportChange}
                mapboxApiAccessToken={MAPBOX_TOKEN}
                onHover={this._onHover} >
        
                {this._renderTooltip()}
        
                </MapGL>
            </div>
          </div>
        );
      }

    }


export default Map;
