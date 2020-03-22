import { UPDATE, INITIAL_CLICK } from "./actionTypes";

export const updateMd = event => ({
    type: UPDATE,
    payload: {
        event
    }
});

export const initialAction = () => ({
    type: INITIAL_CLICK,
});