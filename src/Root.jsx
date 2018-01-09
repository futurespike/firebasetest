import React, { Component } from 'react';
import { render } from 'react-dom';

import './Root.scss';

class Root extends Component {
  render() {
    return <div>Hello React!</div>;
  }
}

render(<Root />, document.getElementById('root'));
