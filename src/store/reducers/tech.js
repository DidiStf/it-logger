import { ADD_TECH, DELETE_TECH, GET_TECHS, SET_LOADING, TECHS_ERROR } from '../actions/types';
import { STATE_KEY } from '../selectors/tech';

export const key = STATE_KEY;

const initialState = {
    techs: null,
    loading: false,
    error: null,
};

export const techReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_TECHS:
            const techs = action.payload;
            return {
                ...state,
                techs,
                loading: false,
            }
        case ADD_TECH:
            const tech = action.payload;
            return {
                ...state,
                techs: [ ...state.techs, tech],
                loading: false,
            }
        case DELETE_TECH:
            const techId = action.payload;
            return {
                ...state,
                techs: state.techs.filter(({id}) => id !== techId ),
                loading: false,
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            }
        case TECHS_ERROR:
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