import React from 'react';
import { Component } from 'react';

import LibraryList from './../containers/library-list';
import LibraryDetail from './../containers/library-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <LibraryList/>
        <LibraryDetail/>
      </div>
    );
  }
}
