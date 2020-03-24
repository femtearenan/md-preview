import { UPDATE, INITIAL_CLICK, SPLIT_HEIGHT, FULLSCREEN, SPLIT_VERTICAL } from "./actionTypes";

export const updateMd = event => {
    let content = event.target.value;
    return {
        type: UPDATE,
        payload: {
            content
        }
    };
}

export const initialAction = () => ({
    type: INITIAL_CLICK
});

export const splitHeight = event => ({
    type: SPLIT_HEIGHT,
    payload: {
        event
    }
})

export const splitVertical = () => ({
    type: SPLIT_VERTICAL
})

export const fullscreen = () => ({
    type: FULLSCREEN
})