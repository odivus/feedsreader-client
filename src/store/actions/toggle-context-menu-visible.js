import {
  TOGGLE_CONTEXT_MENU_VISIBLE,
  CLOSE_CONTEXT_MENU,
  OPEN_CONTEXT_MENU,
} from './action-types';

export function toggleContextMenuVisible(clickItemId) {
  return {
    type: TOGGLE_CONTEXT_MENU_VISIBLE,
    clickItemId,
  }
}

export function closeContextMenu(clickItemId) {
  return {
    type: CLOSE_CONTEXT_MENU,
    // clickItemId,
  }
}

export function openContextMenu(clickItemId) {
  return {
    type: OPEN_CONTEXT_MENU,
    clickItemId,
  }
}