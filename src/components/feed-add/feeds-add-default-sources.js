import React from 'react';
import { connect } from 'react-redux';
import { addRssSource } from '../../store/actions/add-source';
import { withFirebase } from '../firebase';
import Button from '../ui/button';

import {
  classNameButton,
} from '../ui/class-names';

import './feed-add-source.css';

const FeedsAddDefaultSources = ({ firebase, theme, addRssSource }) => {
  const onClick = () => {
    const sources = [
      'https://xakep.ru/feed/', 
      'https://www.cnews.ru/inc/rss/news.xml',
    ];

    sources.forEach(source => {
      addRssSource(source, firebase);
    });
  }

  return (
    <div className='recomended'>
      <h3>Recomended rss-sources</h3>
      <p>xakep.ru, cnews.ru</p>
      <Button
        className={classNameButton(theme)}
        type='submit'
        disabled={false}
        onClick={onClick}>
        Add sources
      </Button>
    </div>
  );
}

const mapDispatchToProps = {
  addRssSource,
}

export default connect(null, mapDispatchToProps)(withFirebase(FeedsAddDefaultSources));