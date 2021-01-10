import { ADD_LOG, CLEAR_CURRENT, DELETE_LOG, GET_LOGS, LOGS_ERROR, SEARCH_LOGS, SET_CURRENT, SET_LOADING, UPDATE_LOG} from './types';

// Set loading to true
export const setLoadingAction = () => {
    return {
        type: SET_LOADING,
    }
};

// Get logs from server
export const getLogsAction = () => async (dispatch) => {
    try {
        setLoadingAction();
        const res = await fetch('/logs');
        const data = await res.json();
        
        dispatch({
            type: GET_LOGS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText,
        })
    }
};

// Add new log
export const addLogAction = (log) => async (dispatch) => {
    try {
        setLoadingAction();
        const res = await fetch('/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        
        dispatch({
            type: ADD_LOG,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data,
        })
    }
};

// Delete log from server
export const deleteLogAction = (id) => async (dispatch) => {
    try {
        setLoadingAction();
        await fetch(`/logs/${id}`, {
            method: 'DELETE'
        });
        
        dispatch({
            type: DELETE_LOG,
            payload: id,
        })
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data,
        })
    }
};

// Update log on server
export const updateLogAction = (log) => async (dispatch) => {
    try {
        setLoadingAction();
        const res = await fetch(`/logs/${log.id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await res.json();
        
        dispatch({
            type: UPDATE_LOG,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data,
        })
    }
};

// Search server logs
export const searchLogsAction = (text) => async (dispatch) => {
    try {
        setLoadingAction();
        const res = await fetch(`/logs?q=${text}`);
        const data = await res.json();
        
        dispatch({
            type: SEARCH_LOGS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data,
        })
    }
};

// Set current log
export const setCurrentLogAction = (log) => {
    return {
        type: SET_CURRENT,
        payload: log,
    }
};

// Clear current log
export const clearCurrentLogAction = () => {
    return {
        type: CLEAR_CURRENT,
    }
};