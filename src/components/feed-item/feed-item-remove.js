import React from 'react';
import { connect } from 'react-redux';

import { showConfirmDialog } from '../../store/actions/toggle-confirm-dialog';

import { classNamesReadLater } from './class-names';
import '../buttons-icons/buttons-icons.css';

function FeedItemRemove(props) {
  const { showConfirmDialog, feedReadLaterDbKey, theme, viewMode } = props;

  return (
    <div 
      className={classNamesReadLater(theme, '', viewMode)}
      onClick={() => showConfirmDialog(feedReadLaterDbKey)}>
        <div className='icons-wrapper'>
          <div className='icons-wrap'>
            <div className='icons delete'></div>
          </div>
        </div>
    </div>
  );
}

const mapDispatchToProps = {
  showConfirmDialog,
}

export default connect(null, mapDispatchToProps)(FeedItemRemove);
