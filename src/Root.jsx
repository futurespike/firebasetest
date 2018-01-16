import React, { Component } from 'react';
import { render } from 'react-dom';
import './Root.scss';

import FirebaseTestRoot from './components/FirebaseTestRoot';

class Root extends Component {
  render() {
    return <FirebaseTestRoot />;
  }
}

render(<Root />, document.getElementById('root'));
