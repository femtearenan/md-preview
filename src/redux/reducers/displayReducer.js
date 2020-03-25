import { SPLIT_HEIGHT, FULLSCREEN, SPLIT_VERTICAL, DISMISS, COPY, DOWNLOAD, THEME_SWITCH, ABOUT_SWITCH } from '../actionTypes';
import { dismiss } from '../actions';

const VERSION = "Version 1";

const initialState = {
    applyTheme: "Modernize",
    theme: "old-school",
    display: "normal-height",
    wrapper: "normal-wrapper",
    message: VERSION,
    dialog: "show",
    dismissable: false,
    about: "no-show"
};

function updateDisplay(state = initialState, action) {
    switch (action.type) {
        case FULLSCREEN:
          return Object.assign({}, state, {
            display: "normal-height",
            wrapper: ""
          })
        case SPLIT_HEIGHT:
          return Object.assign({}, state, {
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
        case DOWNLOAD:
          return Object.assign({}, state, {
            message: "Downloading md",
            dismissable: true
          })
        case DISMISS:
          let dismissable = false;
          return Object.assign({}, state, {
            message: VERSION,
            dismissable: dismissable
          })
        case THEME_SWITCH:
          if (state.applyTheme === "Modernize"){
            return Object.assign({}, state, {
              applyTheme: "Old school",
              theme: "modernize",
              message: "Applied modern theme",
              dismissable: true
            });
          } else {
            return Object.assign({}, state, {
              applyTheme: "Modernize",
              theme: "old-school",
              message: "Applied old-school theme",
              dismissable: true
            });
          }
        case ABOUT_SWITCH:
          if (state.about === "no-show"){
            return Object.assign({}, state, {
              about: "show",
              dismissable: true
            });
          } else {
            return Object.assign({}, state, {
              about: "no-show",
              dismissable: true
            });
          }
        default:
          return state;
    }
}

export default updateDisplay;