import {
	ADD_TO_CART,
	ADD_TO_SAVE_FOR_LATER,
	DECREASE_QUANTITY,
	INCREASE_QUANTITY,
	REMOVE_FROM_CART,
	REMOVE_FROM_SAVE_FOR_LATER,
} from "../constants";

export function cartReducer(state, action) {
	switch (action.type) {
		case ADD_TO_CART: {
			return {
				...state,
				cartItems: [...state.cartItems, action.payload],
			};
		}
		case REMOVE_FROM_CART: {
			return {
				...state,
				cartItems: state.cartItems.filter((el) => el.id !== action.payload),
			};
		}
		case INCREASE_QUANTITY: {
			console.log("inside increase");
			console.log(action);
			return {
				...state,
				cartItems: state.cartItems.map((el) =>
					el.id === action.payload ? { ...el, quantity: el.quantity + 1 } : el
				),
			};
		}
		case DECREASE_QUANTITY: {
			return {
				...state,
				cartItems: state.cartItems.map((el) =>
					el.id === action.payload ? { ...el, quantity: el.quantity - 1 } : el
				),
			};
		}
		case ADD_TO_SAVE_FOR_LATER: {
			return {
				...state,
				cartItems: state.cartItems.filter((el) => el.id !== action.payload.id),
				savedItems: [...state.savedItems, action.payload],
			};
		}
		case REMOVE_FROM_SAVE_FOR_LATER: {
			return {
				...state,
				cartItems: [...state.cartItems, action.payload],
				savedItems: state.savedItems.filter((el) => el.id !== action.payload.id),
			};
		}
		default:
			return state;
	}
}
