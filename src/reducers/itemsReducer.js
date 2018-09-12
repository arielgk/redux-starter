import * as types from '../actions/actionTypes';
import initialState from '../store/initialState';

const items = (state = initialState.items, action) => {

    switch (action.type) {
        case types.GET_ITEMS_SUCCESS:
            return action.items;
        default:
            return state
    }
}

export default items;