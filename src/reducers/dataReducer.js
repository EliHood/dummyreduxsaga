import {GET_DATA_SUCCESS, GET_DATA_ERROR} from '../actions/types';

const initialState = {
    data: [],
    error:[]
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_DATA_SUCCESS:
            console.log(action.data);
            return{
                ...state,
                data: action.data
            }

        case GET_DATA_ERROR:
            return{
                ...state,
                error: action.error
            }

        default:
            return state
    }
}