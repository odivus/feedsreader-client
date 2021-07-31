import {editUserRssSourceFail} from './edit-rss-source';
import {getRssSources} from './get-rss-sources';

export function renameRssSource(rssSourceId, value, firebase) {
  return (dispatch) => {
    firebase.editUserRssSource(rssSourceId, 'sourceName', value)
      .then(() => dispatch(getRssSources(firebase)))
      .catch((error) => editUserRssSourceFail(rssSourceId, error.message));
  }
}