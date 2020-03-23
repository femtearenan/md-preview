import { UPDATE, INITIAL_CLICK, SPLIT_HEIGHT, FULLSCREEN, SPLIT_VERTICAL } from "./actionTypes";

export const updateMd = event => ({
    type: UPDATE,
    payload: {
        event
    }
});

export const initialAction = () => ({
    type: INITIAL_CLICK
});

export const splitHeight = () => ({
    type: SPLIT_HEIGHT
})

export const splitVertical = () => ({
    type: SPLIT_VERTICAL
})

export const fullscreen = () => ({
    type: FULLSCREEN
})