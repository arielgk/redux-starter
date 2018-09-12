import * as actiontypes from './actionTypes';
import {beginAjaxCall, ajaxCallError} from "./ajaxStatusActions";

export const getItems =()=>{


    const items = [
        {
            text: 'item 1',

        },
        {
            text: 'item 2',

        }
    ];


    return (dispatch )=>{

        dispatch(beginAjaxCall());



        dispatch({type:actiontypes.GET_ITEMS_SUCCESS, items});

    }
}