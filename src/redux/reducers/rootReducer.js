import { combineReducers } from 'redux';
import basicReducer from './basicReducer';
import displayReducer from './displayReducer';

export default combineReducers({
    basicReducer,
    displayReducer
});