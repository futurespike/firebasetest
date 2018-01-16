import React, { Component } from 'react';
import firebase from '../firebase.js';
import { forEach } from 'lodash';

import '../Root.scss';

class FirebaseTestRoot extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: '',
      username: '',
      items: [],
    };
  }

  render() {
    return (
      <div className="container">
        <section className="add-item">

          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="What's your name?"
              onChange={this.handleChange}
              value={this.state.username}
            />
            <input
              type="text"
              name="currentItem"
              placeholder="What are you bringing?"
              onChange={this.handleChange}
              value={this.state.currentItem}
            />
            <button>Add Item</button>
          </form>
        </section>
        <section className="display-item">
          <div className="wrapper">

            <ul>
              {this.state.items.map(item => {
                console.log(item);
                return (
                  <li key={item.id}>
                    <h3>{item.title}</h3>
                    <p>brought by: {item.user}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    );
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', snapshot => {
      const items = snapshot.val();
      const newState = [];
      forEach(items, item => {
        newState.push({
          id: item.title + item.user,
          title: item.title,
          user: item.user,
        });
      });
      this.setState({
        items: newState,
      });
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      title: this.state.currentItem,
      user: this.state.username,
    };
    itemsRef.push(item);
    this.setState({ currentItem: '', username: '' });
  };
}

export default FirebaseTestRoot;
