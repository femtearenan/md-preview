import { SPLIT_HEIGHT, FULLSCREEN, SPLIT_VERTICAL } from '../actionTypes';


const initialState = {
    display: "normal-height",
    wrapper: "normal-wrapper"
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
            display: "",
            wrapper: "split-vertical-wrapper"
          })
        case SPLIT_VERTICAL:
          return Object.assign({}, state, {
            display: "normal-height",
            wrapper: "split-screen"
          })
        default:
          return state;
    }
}

export default updateDisplay;