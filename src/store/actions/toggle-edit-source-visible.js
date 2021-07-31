import {
  TOGGLE_EDIT_SOURCE_VISIBLE,
  CLOSE_EDIT_SOURCE,
  OPEN_EDIT_SOURCE,
} from './action-types';

export function toggleEditSourceVisible(sourceId) {
  return {
    type: TOGGLE_EDIT_SOURCE_VISIBLE,
    sourceId
  }
}

export function closeEditSource(sourceId) {
  return {
    type: CLOSE_EDIT_SOURCE,
    sourceId
  }
}

export function openEditSource(sourceId, sourceItemAction) {
  return {
    type: OPEN_EDIT_SOURCE,
    sourceId,
    sourceItemAction
  }
}
