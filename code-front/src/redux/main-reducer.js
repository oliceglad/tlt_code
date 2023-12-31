import { mainAPI } from '../api/api';

const POST_DATA = 'POST_DATA'

const initialState = {
    data: 0
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type){
        case POST_DATA:
            return {...state, data: action.postObj}
        
        default: 
            return state
    }
}

const postData = (postObj) => ({ type: POST_DATA, postObj})

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