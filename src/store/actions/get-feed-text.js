import { 
  GET_FEED_TEXT_SUCCESS, 
  GET_FEED_TEXT_FAIL,
} from './action-types';

import getFeedTextData from '../../components/service/cheerio-get-feed-text';

const getFeedTextUrl = process.env.REACT_APP_GET_FEED_TEXT_URL;

export function getFeedTextSuccess(feedText, feedFullText, ...args) {
  const [
    feedLink, 
    title, 
    date, 
    header, 
    imgSrc,
    imgAvailable,
  ] = args;

  return {
    type: GET_FEED_TEXT_SUCCESS,
    feedText,
    feedFullText,
    feedLink,
    title,
    date,
    header,
    imgSrc,
    imgAvailable,
  }
}

export function getFeedTextFail(error) {
  return {
    type: GET_FEED_TEXT_FAIL,
    error
  }
}

export function getFeedText(...args) {
  const [
    feedLink, 
    feedFullText, 
    title, 
    date, 
    header, 
    imgSrc,
    imgAvailable,
  ] = args;

  return (dispatch) => {
    if (feedFullText) {
      dispatch(getFeedTextSuccess('', feedFullText, feedLink, title, date, header, imgSrc, imgAvailable));
    } else {
      getFeedTextData(feedLink, getFeedTextUrl)
        .then(data => { 
          if (data) {
            dispatch(getFeedTextSuccess(JSON.parse(data), '', feedLink, title, date, header, imgSrc, imgAvailable));
          }
        })
        .catch(error => {
          if (error) dispatch(getFeedTextFail(error));
        });
    }
  }
}