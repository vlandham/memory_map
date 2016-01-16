
import React from 'react';

import '../../../assets/refill-style.yaml';
import '../../../images/poi_icons_18@2x.png';

import './location.scss';

// import { Map, BaseTileLayer } from 'react-leaflet';

// class TangramLayer extends BaseTileLayer {
//
//   constructor() {
//     super();
//     // this.layer = Tangram.leafletLayer({
//     //     scene: 'https://raw.githubusercontent.com/tangrams/refill-style/gh-pages/refill-style.yaml',
//     //     attribution: '<a href="https://mapzen.com/tangram" target="_blank">Tangram</a> | <a href="http://www.openstreetmap.org/about" target="_blank">&copy; OSM contributors | <a href="https://mapzen.com/" target="_blank">Mapzen</a>',
//     //   });
//   }
//
//   componentWillMount() {
//     super.componentWillMount();
//     const { map, url } = this.props;
//     this.leafletElement = Tangram.leafletLayer({
//         // scene: 'https://raw.githubusercontent.com/tangrams/refill-style/gh-pages/refill-style.yaml',
//         scene: 'http://localhost:8080/refill-style.yaml',
//         attribution: '<a href="https://mapzen.com/tangram" target="_blank">Tangram</a> | <a href="http://www.openstreetmap.org/about" target="_blank">&copy; OSM contributors | <a href="https://mapzen.com/" target="_blank">Mapzen</a>',
//       });
//   }
// }

// export default class Location extends React.Component {
//
//   constructor() {
//     super();
//   }
//
//   render() {
//
//     const position = [this.props.lat, this.props.lon];
//
//     return (
//       <div className='location'>
//         <Map center={position} zoom={this.props.zoom}>
//           <TangramLayer />
//         </Map>
//       </div>
//     );
//   }
// }

export default class Location extends React.Component {
  constructor() {
    super();
    this.uid = this.uid()();
  }

  uid() {
    var uid = 0;
    return function(){
      return uid++;
    };
  }

  componentDidMount() {

    var layer = Tangram.leafletLayer({
      // scene: 'https://raw.githubusercontent.com/tangrams/refill-style/gh-pages/refill-style.yaml',
        scene: 'http://localhost:8080/refill-style.yaml',
       attribution: ''
    });

    // var layer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'});

    this.map = L.map('map-' + this.props.id);
    layer.addTo(this.map);

    this.map.setView([this.props.lat, this.props.lon], this.props.zoom);

  }

  render() {
    return (
      <div className='location'>
        <div className='map' id={'map-' + this.props.id}></div>
        <h3 className='name'>{this.props.name}</h3>
      </div>
    );
  }
};
