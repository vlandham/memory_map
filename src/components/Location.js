
import React from 'react';

import { Map, BaseTileLayer } from 'react-leaflet';

class TangramLayer extends BaseTileLayer {

  constructor() {
    super();
    // this.layer = Tangram.leafletLayer({
    //     scene: 'https://raw.githubusercontent.com/tangrams/refill-style/gh-pages/refill-style.yaml',
    //     attribution: '<a href="https://mapzen.com/tangram" target="_blank">Tangram</a> | <a href="http://www.openstreetmap.org/about" target="_blank">&copy; OSM contributors | <a href="https://mapzen.com/" target="_blank">Mapzen</a>',
    //   });
  }

  componentWillMount() {
    super.componentWillMount();
    const { map, url } = this.props;
    this.leafletElement = Tangram.leafletLayer({
        scene: 'https://raw.githubusercontent.com/tangrams/refill-style/gh-pages/refill-style.yaml',
        attribution: '<a href="https://mapzen.com/tangram" target="_blank">Tangram</a> | <a href="http://www.openstreetmap.org/about" target="_blank">&copy; OSM contributors | <a href="https://mapzen.com/" target="_blank">Mapzen</a>',
      });
  }
}

export default class Location extends React.Component {

  constructor() {
    super();

  }

  render() {

    const position = [51.505, -0.09];

    return (
      <div className='location'>
        <Map center={position} zoom={13}>
          <TangramLayer />
        </Map>
      </div>
    );



  }

}
