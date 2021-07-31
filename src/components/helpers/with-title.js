import React, { Component } from 'react';
import PropTypes from 'prop-types';

function withTitle(Wrapped, title) {
  Wrapped.propTypes = {
    optionalElementType: PropTypes.elementType,
  }
  
  if (typeof title !== 'string') 
    throw new TypeError('title argument must be a string');

  return class extends Component {

    componentDidMount() {
      document.title = title;
    }

    componentDidUpdate() {
      document.title = title;
    }

    render() {
      return <Wrapped {...this.props}/>;
    }
  }
}

export default withTitle;