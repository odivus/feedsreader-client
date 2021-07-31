import { CHECK_IS_READ_LATER_TEXT } from './action-types';

export function checkIsReadLaterText(isFeedsTextFromReadLater = false) {
  return {
    type: CHECK_IS_READ_LATER_TEXT,
    isFeedsTextFromReadLater
  }
}