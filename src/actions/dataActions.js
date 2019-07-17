import {GET_DATA_SUCCESS, GET_DATA_ERROR, GET_DATA_SAGA} from './types';


export const fetchDataInit = () => ({
    type:GET_DATA_SAGA
})

export const fetchDataSuccess = (data) => ({
    type: GET_DATA_SUCCESS,
    data
})

export const fetchDataError = (error) => ({
    type: GET_DATA_ERROR,
    error
})
