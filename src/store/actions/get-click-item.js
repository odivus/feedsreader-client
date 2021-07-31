import {GET_CLICK_ITEM} from './action-types';

export function getClickItem(clickItem) {
  return {
    type: GET_CLICK_ITEM,
    clickItem,
  }
}