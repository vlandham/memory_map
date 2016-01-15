import React from 'react';

import makeStore from '../model/store';
import { INITIAL_STATE } from '../model/reducer';

import { addText, removeText, createTokens, updateTokenizationOptions, updateVisOptions } from '../model/actions';

import Location from './Location';


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


  render() {
    return (
      <div className="main">
        <Location />
      </div>
    );
  }
}
