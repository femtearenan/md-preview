import { UPDATE, INITIAL_CLICK, SPLIT_HEIGHT, FULLSCREEN, SPLIT_VERTICAL, COPY, DISMISS, DOWNLOAD, THEME_SWITCH, ABOUT_SWITCH } from "./actionTypes";

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

export const dismiss = () => ({
    type: DISMISS
})

export const copy = () => ({
    type: COPY
})

export const download = () => ({
    type: DOWNLOAD
})

export const themeSwitch = () => ({
    type: THEME_SWITCH
})

export const aboutSwitch = () => ({
    type: ABOUT_SWITCH
})