import {
  GET_SOURCES_DATA_SUCCESS,
  GET_SOURCES_DATA_FAIL
} from './action-types';

import getSourceRssData from '../../components/service/get-source-rss-data';

const rssParserUrlGetSourseData = process.env.REACT_APP_RSS_PARSER_URL_DATA;

export function getSourcesDataSuccess(rssSources) {
  return {
    type: GET_SOURCES_DATA_SUCCESS,
    rssSourcesData: rssSources,
    error: null
  }
}

export function getSourcesDataFail(error) {
  return {
    type: GET_SOURCES_DATA_FAIL,
    error
  }
}

export function getRssSourcesData(rssSources) {
  return (dispatch) => {
    getSourceRssData(rssSources, rssParserUrlGetSourseData)
      .then(rssData => {
        if (!rssData.error) {
          rssData = JSON.parse(rssData);
          return rssData;
        } else {
          dispatch(getSourcesDataFail(rssData.error));
          return null;
        }
      })
      .then(rssData => dispatch(getSourcesDataSuccess(rssData)))
      .catch(error => {
        dispatch(getSourcesDataFail(error))
      })
  }
}
