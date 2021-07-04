import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

export const initialState = {
	cartItems: [],
	savedItems: [],
};

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
	const [state, dispatch] = useReducer(cartReducer, initialState);
	return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
}

export const useCartContext = () => {
	return useContext(CartContext);
};
