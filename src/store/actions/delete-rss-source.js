import {editUserRssSourceFail} from './edit-rss-source';
import {getRssSources} from './get-rss-sources';

export function deleteRssSource(rssSourceId, firebase) {
  return (dispatch) => {
    firebase.deleteUserRssSource(rssSourceId)
      .then(() => dispatch(getRssSources(firebase)))
      .catch((error) => editUserRssSourceFail(rssSourceId, error.message));
  }
}