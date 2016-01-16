import React from 'react';

import makeStore from '../model/store';
import { INITIAL_STATE } from '../model/reducer';

import { addLocation, addText, removeText, createTokens, updateTokenizationOptions, updateVisOptions } from '../model/actions';


import Location from './Location/Location';

import '../../assets/places.csv';

import d3 from 'd3';

const dataURL = "places.csv";


/**
* Main App for tool
*/
export default class App extends React.Component {

  constructor() {
    super();

    this.state = INITIAL_STATE.toJS();

    this.store = makeStore();

    this.store.subscribe(() => {
      this.setState(this.store.getState().toJS());
    });


  }

  componentWillMount() {
    d3.csv(dataURL, this.addLocations.bind(this));
  }

  addLocations(error, data) {
    console.log(data);
    data.forEach((d,i) => {
      d.lat = +d.lat;
      d.lon = +d.lon;
      d.zoom = +d.zoom;
      // this.store.dispatch(addLocation('loc' + i, d));
    });
      this.store.dispatch(addLocation('loc' + 0, data[0]));
  }


  addTextToStore(textId, text) {
    this.store.dispatch(addText(textId, text));
    this.store.dispatch(createTokens());
  }

  removeTextFromStore(textId) {
    this.store.dispatch(removeText(textId));
    this.store.dispatch(createTokens());
  }

  updateTokenizationOptionsInStore(key, enabled) {
    this.store.dispatch(updateTokenizationOptions(key, enabled));
    this.store.dispatch(createTokens());
  }

  updateVisOptionsInStore(option, value) {
    this.store.dispatch(updateVisOptions(option, value));
  }

  renderLocation(key, location) {
    return (
      <Location key={key} id={key} lat={location.lat} lon={location.lon} zoom={location.zoom} name={location.display_name}/>
    );
  }


  render() {
    return (
      <div className="main">
        <div className='title'>
          <h1>Vallandingham Memory Map</h1>
          <p>Places of interest.</p>
        </div>
        {Object.keys(this.state.locations).map(key => this.renderLocation(key, this.state.locations[key]))}
      </div>
    );
  }
}
