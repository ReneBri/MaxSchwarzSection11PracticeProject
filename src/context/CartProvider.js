import {useReducer} from "react";
import CartContext from "./cart-context";

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (action, state) => {
	switch (action.type) {
		case "ADD_ITEM":
			// concat returns a new array, not updateing the old array liek push would
			const updatedItems = state.items.concat(action.payload);
			const updatedTotalAmount =
				state.totalAmount + action.payload.price * action.payload.amount;
			return {...state, items: updatedItems, totalAmount: updatedTotalAmount};
		default:
			return state;
	}
};

const CartContextProvider = ({children}) => {
	const [cartState, dispatchCartState] = useReducer(cartReducer, defaultCartState);

	const addItemFromCartHandler = (item) => {
		dispatchCartState({type: "ADD_ITEM", payload: item});
	};

	const removeItemFromCartHandler = (id) => {
		dispatchCartState({type: "REMOVE_ITEM", payload: id});
	};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemFromCartHandler,
		removeItem: addItemFromCartHandler,
	};

	return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
