import React from 'react';
import {Link} from 'react-router-dom';

function FeedItemTextLink(props) {
  const { header } = props;

  return (
    <Link to='/text'>
      {header}
    </Link>
  );
}

export default FeedItemTextLink;
