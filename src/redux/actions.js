import { UPDATE, INITIAL_CLICK } from "./actionTypes";

export const updateMd = content => ({
    type: UPDATE,
    payload: {
        content
    }
});

export const initialAction = () => ({
    type: INITIAL_CLICK,
});