import { combineReducers } from 'redux';

import { logReducer, key as logKey } from './log';
import { techReducer, key as techKey } from './tech';

export default combineReducers({
    [logKey]: logReducer,
    [techKey]: techReducer,
});