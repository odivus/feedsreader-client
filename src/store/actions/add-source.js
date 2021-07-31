import {
  ADD_SOURCE_SUCCESS,
  ADD_SOURCE_FAIL,
  SOURCE_DUPLICATE_NOT_ADDED,
} from './action-types';

import getSourceRssData from '../../components/service/get-source-rss-data';
import {getRssSources} from './get-rss-sources';

const rssParserUrlGetSourseInfo = process.env.REACT_APP_RSS_PARSER_URL_INFO;

export function addSourceSuccess(rssSources) {
  return {
    type: ADD_SOURCE_SUCCESS,
    rssSources,
    error: null
  }
}

export function addSourceFail(error) {
  return {
    type: ADD_SOURCE_FAIL,
    error
  }
}

export function notAddedDuplicate(addStatus) {
  return {
    type: SOURCE_DUPLICATE_NOT_ADDED,
    addStatus
  }
}

export function addRssSource(rssSource, firebase) {
  return (dispatch) => {
    getSourceRssData(rssSource, rssParserUrlGetSourseInfo)
      .then(rssData => {
        if (!rssData.error) {
          rssData = JSON.parse(rssData);
          return rssData;
        } else {
          dispatch(addSourceFail(rssData.error));
          return null;
        }
      })
      .catch(error => {
        dispatch(addSourceFail(error))
      })
      .then(rssData => {
        if (rssData) {
          firebase.getUserRssSources(localStorage.userId)
            .then(data => {
              let rssDataForDb;

              if (!data) {
                rssDataForDb = rssData;
              } else {
                for (var key in data) {
                  if (data[key].url === rssData.link) {
                    rssDataForDb = null;
                    dispatch(notAddedDuplicate(Date.now()));
                    break;
                  } else {
                    rssDataForDb = rssData;
                  }
                }
              }
              return rssDataForDb;
            })
            .catch(error => dispatch(addSourceFail(error)))
            .then(rssDataForDb => {
              if (rssDataForDb) {
                let sourceName = rssDataForDb.link.replace(/^https?:\/\//, '');
                sourceName = sourceName.replace(/\/$/, '');

                firebase.addUserRssSource(
                  localStorage.userId,
                  rssDataForDb.title,
                  rssDataForDb.link,
                  rssSource,
                  sourceName,
                );
                return rssDataForDb;
              }
            })
            .then((rssDataForDb) => {
              if (rssDataForDb) {
                dispatch(addSourceSuccess({
                  title: rssDataForDb.title,
                  url: rssDataForDb.link,
                }))
              }
            })
            .then(() => dispatch(getRssSources(firebase)))
            .catch(error => dispatch(addSourceFail(error)));
        }
      })
  }
}

