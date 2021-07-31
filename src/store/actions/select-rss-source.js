import {SELECT_RSS_SOURCE} from './action-types';

export function selectRssSource(rssSource, rssSourceUrl) {
  return {
    type: SELECT_RSS_SOURCE,
    rssSource,
    rssSourceUrl
  }
}