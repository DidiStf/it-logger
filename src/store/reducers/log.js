import { ADD_LOG, CLEAR_CURRENT, DELETE_LOG, GET_LOGS, LOGS_ERROR, SEARCH_LOGS, SET_CURRENT, SET_LOADING, UPDATE_LOG } from '../actions/types';
import { STATE_KEY } from '../selectors/log';

export const key = STATE_KEY;

const initialState = {
    logs: null,
    current: null,
    loading: false,
    error: null,
};

export const logReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_LOGS:
            const logs = action.payload;
            return {
                ...state,
                logs,
                loading: false,
            }
        case ADD_LOG:
            const log = action.payload;
            return {
                ...state,
                logs: [ ...state.logs, log],
                loading: false,
        }
        case DELETE_LOG:
            const logId = action.payload;
            return {
                ...state,
                logs: state.logs.filter(({id}) => id !== logId),
                loading: false,
            }
        case UPDATE_LOG:
            const updatedLog = action.payload;
            return {
                ...state,
                logs: state.logs.map((log) => log.id === updatedLog.id ? updatedLog : log )
            }
        case SEARCH_LOGS:
            const filteredLogs = action.payload;
            return {
                ...state,
                logs: filteredLogs,
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            }
        case SET_CURRENT:
            const current = action.payload;
            return {
                ...state,
                current,
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null,
            }
        case LOGS_ERROR:
            const error = action.payload;
            console.error(error);
            return {
                ...state,
                error,
            }
        default:
            return state;
    }
};