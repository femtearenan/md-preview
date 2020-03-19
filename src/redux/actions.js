import { UPDATE } from "./actionTypes";

export const updateMd = content => ({
    type: UPDATE,
    payload: {
        content
    }
});