import { SPLIT_HEIGHT, FULLSCREEN, SPLIT_VERTICAL, DISMISS, COPY, DOWNLOAD, THEME_SWITCH, ABOUT_SWITCH, SHOW_EDITOR, SHOW_PREVIEW } from '../actionTypes';
import { dismiss } from '../actions';

const VERSION = "Version 1.1";

const initialState = {
    applyTheme: "Modernize",
    theme: "old-school",
    display: "normal-height",
    wrapper: "normal-wrapper",
    message: VERSION,
    dialog: "show",
    dismissable: false,
    about: "no-show",
    editor: "show",
    preview: "no-show"
};

function updateDisplay(state = initialState, action) {
    switch (action.type) {
        case FULLSCREEN:
          return Object.assign({}, state, {
            display: "normal-height",
            wrapper: "",
            editor: "show",
            preview: "no-show"
          })
        case SPLIT_HEIGHT:
          return Object.assign({}, state, {
            display: "split-height",
            wrapper: "split-vertical-wrapper",
            editor: "show",
            preview: "show"
          })
        case SPLIT_VERTICAL:
          return Object.assign({}, state, {
            display: "normal-height",
            wrapper: "split-screen",
            editor: "show",
            preview: "show"
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
        case SHOW_EDITOR:
          if (state.display === "normal-height"){
            return Object.assign({}, state, {
              editor: "show",
              preview: "no-show"
            })
          } else {
            return Object.assign({}, state, {
              editor: "show",
              preview: "show"
            })
          }
        case SHOW_PREVIEW:
          if (state.display === "normal-height"){
            return Object.assign({}, state, {
              editor: "no-show",
              preview: "show"
            })
          } else {
            return Object.assign({}, state, {
              editor: "show",
              preview: "show"
            })
          }
        default:
          return state;
    }
}

export default updateDisplay;