import { mainAPI } from '../api/api';

const POST_DATA = 'POST_DATA'
const SET_DATA = 'SET_DATA'

const initialState = {
    data: {},
    form: {},
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type){
        case POST_DATA:
            return {...state, data: action.data}
        case SET_DATA:
            return {...state, form: action.form}
        
        default: 
            return state
    }
}


const postData = (postObj) => ({ type: POST_DATA, postObj})
const setData = (setObj) => ({type: SET_DATA, setObj})

export const postDataFile = (fileObj) => async dispatch => {
    try{
        const response = await mainAPI.postVideo(fileObj)
        if (response.status === 200) {
            dispatch(postData(response.data.data))
            console.log(response.data.data)
        }
    } catch(e) {
        console.log(e)
    }
}

export const setDataFile = (fileObj) => dispatch => {
    dispatch(setData(fileObj))
}
