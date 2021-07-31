import React, { Component } from 'react';
import { Route } from 'react-router-dom';

export default class WithRoute extends Component {

  componentDidMount() {
    document.title = this.props.title;
  }
  
  componentDidUpdate() {
    document.title = this.props.title;
  }

  render() {
    const { ...rest } = this.props;
    return <Route {...rest} />;
  }
}