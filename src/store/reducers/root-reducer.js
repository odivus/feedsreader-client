import {combineReducers} from 'redux';
import signInReducer from './sign-in';
import signUpReducer from './sign-up';
import signOutReducer from './sign-out';

import getRssSourcesReducer from './get-rss-sources';
import getRssSourcesDataReducer from './get-rss-sources-data';
import addRssSourceReducer from './add-rss-source';
import editRssSourceReducer from './edit-rss-source';
import notAddedDuplicateReducer from'./not-added-duplicate-source';

import getViewModeReducer from './get-view-mode';
import setViewModeReducer from './set-view-mode';

import getThemeReducer from './get-theme';
import setThemeReducer from './set-theme';

import setReloadReducer from './set-reload';

import toggleSettingsVisibleReducer from './toggle-settings-visible';
import toggleContextMenuVisibleReducer from './toggle-context-menu-visible';
import getClickItemReducer from './get-click-item';

import toggleMenuVisibleReducer from './toggle-menu-visible';

import toggleEditSourceVisibleReducer from './toggle-edit-source-visible';

import toggleFeedsToReadLaterReducer from './toggle-feeds-to-read-later';

import toggleConfirmDialogReducer from './toggle-confirm-dialog';

import selectRssSourceReducer from './select-rss-source';

import getFeedsReadLaterReducer from './get-feeds-readlater';
import getFeedsReadLaterDataReducer from './get-feeds-readlater-data';

import getFeedTextReducer from './get-feed-text';

import removeFeedDataFromReadLaterReducer from './remove-feed-data-from-read-later';

import removeAllReadLaterFeedsReducer from './remove-all-read-later-feeds';

import checkIsReadLaterTextReducer from './check-is-read-later-text';

export default combineReducers({
  signIn: signInReducer,
  signUp: signUpReducer,
  signOut: signOutReducer,
  toggleSettingsVisible: toggleSettingsVisibleReducer,
  toggleContextMenuVisible: toggleContextMenuVisibleReducer,
  getClickItem: getClickItemReducer,
  getRssSources: getRssSourcesReducer,
  getRssSourcesData: getRssSourcesDataReducer,
  addRssSource: addRssSourceReducer,
  editRssSource: editRssSourceReducer,
  notAddedDuplicate: notAddedDuplicateReducer,
  getViewMode: getViewModeReducer,
  setViewMode: setViewModeReducer,
  getTheme: getThemeReducer,
  setTheme: setThemeReducer,
  setReload: setReloadReducer,
  toggleEditSourceVisible: toggleEditSourceVisibleReducer,
  toggleMenuVisible: toggleMenuVisibleReducer,
  selectRssSource: selectRssSourceReducer,
  toggleFeedsToReadLater: toggleFeedsToReadLaterReducer,
  getFeedsReadLater: getFeedsReadLaterReducer,
  getFeedsReadLaterData: getFeedsReadLaterDataReducer,
  removeFeedDataFromReadLater: removeFeedDataFromReadLaterReducer,
  removeAllReadLaterFeeds: removeAllReadLaterFeedsReducer,
  toggleConfirmDialog: toggleConfirmDialogReducer,
  getFeedText: getFeedTextReducer,
  checkIsReadLaterText: checkIsReadLaterTextReducer,
});