import {TOGGLE_SETTINGS_VISIBLE} from '../actions/action-types';

const initialState = {
  settingsVisible: false
}

function toggleSettingsVisibleReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SETTINGS_VISIBLE:
      return {
        ...state, 
        settingsVisible: !state.settingsVisible,
      }
    default:
      return state;
  }
}

export default toggleSettingsVisibleReducer;