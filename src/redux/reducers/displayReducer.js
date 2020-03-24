import { SPLIT_HEIGHT, FULLSCREEN, SPLIT_VERTICAL, DISMISS, COPY } from '../actionTypes';
import { dismiss } from '../actions';

const VERSION = "Version 0.1";

const initialState = {
    display: "normal-height",
    wrapper: "normal-wrapper",
    message: VERSION,
    dialog: "show",
    dismissable: false,
};

function updateDisplay(state = initialState, action) {
    switch (action.type) {
        case FULLSCREEN:
          return Object.assign({}, state, {
            display: "normal-height",
            wrapper: ""
          })
        case SPLIT_HEIGHT:
          let element = action.payload;
          console.log("Element:");
          console.log(element);
          return Object.assign({}, state, {
            // display: "split-height"
            display: "split-height",
            wrapper: "split-vertical-wrapper"
          })
        case SPLIT_VERTICAL:
          return Object.assign({}, state, {
            display: "normal-height",
            wrapper: "split-screen"
          })
        case COPY:
          return Object.assign({}, state, {
            message: "Copied md to clipboard",
            dismissable: true
          })
        case DISMISS:
          let dismissable = false;
          return Object.assign({}, state, {
            message: VERSION,
            dismissable: dismissable
          })
        default:
          return state;
    }
}

export default updateDisplay;