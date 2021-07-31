import React from 'react';

import FeedsAddDefaultSources from './feeds-add-default-sources';
import AddSource from '../settings/add-source';

import './feed-add-source.css';
import {
  classNameAddSource,
} from './class-names';

const FeedAddSource = ({ theme }) => (
  <div className='fg-sm-12 feed-add-source-wrap'>
    <div className={classNameAddSource(theme)}>
      <AddSource />
      <FeedsAddDefaultSources theme={theme} />
    </div>
  </div>
);

export default FeedAddSource;