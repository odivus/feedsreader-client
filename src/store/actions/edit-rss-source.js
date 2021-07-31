import { 
  EDIT_SOURCE_FAIL
} from './action-types';

import {getRssSources} from './get-rss-sources';

export function editUserRssSourceFail(rssSourceId, error) {
  return {
    type: EDIT_SOURCE_FAIL,
    rssSourceId,
    error,
  }
}

export function editRssSource(rssSourceId, value, firebase) {
  return (dispatch) => {
    firebase.editUserRssSource(rssSourceId, 'rssUrl', value)
      .then(() => dispatch(getRssSources(firebase)))
      .catch((error) => editUserRssSourceFail(rssSourceId, error.message));
  }
}