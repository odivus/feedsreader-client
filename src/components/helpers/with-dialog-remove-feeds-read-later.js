import React from 'react';

import Modal from '../ui/modal';
import ConfirmDialog from '../ui/confirm-dialog';

export const dialogHeaderFeed = 'Delete feed from read later?';
export const dialogTextFeed = 'It will be permanently deleted';

export const dialogHeaderAllFeeds = 'Delete all feeds from read later?';
export const dialogTextAllFeeds = 'They will be permanently deleted';

export const DialogRemoveFeedsReadLater = (props) => {
  const {
    dialogHeader,
    dialogText,
    action,
    feedKey,
    firebase,
    hideConfirmDialog
  } = props;

  return (
    <Modal>
      <ConfirmDialog
        dialogHeader={dialogHeader}
        dialogText={dialogText}
        action={() => action(firebase, feedKey)}
        hideConfirmDialog={hideConfirmDialog} />
    </Modal>
  );
}