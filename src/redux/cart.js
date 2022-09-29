import {inventoryDB} from "../content"

const initialState = {list: []};

export function addToCart(newCartList) {
    return (dispatch) =>
            dispatch({
                type: "ADD_TO_CART",
                payload: newCartList,
            });
}

export function cart(state=initialState, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            const newCartList = {id: Math.random(), name: action.payload}
            return {list: [...state.list, newCartList]};

        default:
            return state;
    }
}