import {
  SHOW_CONFIRM_DIALOG,
  HIDE_CONFIRM_DIALOG,
} from './action-types';

export function showConfirmDialog(feedKey, allFeeds) {
  return {
    type: SHOW_CONFIRM_DIALOG,
    feedKey,
    allFeeds,
  }
}

export function hideConfirmDialog(feedKey, allFeeds) {
  return {
    type: HIDE_CONFIRM_DIALOG,
    feedKey,
    allFeeds,
  }
}