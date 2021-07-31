import React from 'react';
import { connect } from 'react-redux';

import RenameSource from '../edit-source/rename-source';
import EditSource from '../edit-source/edit-source';
import DeleteSource from '../edit-source/delete-source';

function ContextMenuItemAction(props) {
  const { sourceItemAction,
    sourceName,
    rssUrl,
    key,
    id
  } = props;

  switch (sourceItemAction) {
    case 'rename':
      return <RenameSource sourceName={sourceName} id={id} />
    case 'edit':
      return <EditSource key={key} rssUrl={rssUrl} id={id} />
    case 'delete':
      return <DeleteSource sourceName={sourceName} id={id} />
    default:
      break;
  }
}

function mapStateToProps(state) {
  const { toggleEditSourceVisible: { sourceItemAction } } = state ;
  return {
    sourceItemAction
  }
}

export default connect(mapStateToProps, null)(ContextMenuItemAction);
