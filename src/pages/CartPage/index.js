import React from "react";
import {
	ADD_TO_SAVE_FOR_LATER,
	DECREASE_QUANTITY,
	INCREASE_QUANTITY,
	REMOVE_FROM_CART,
} from "../../constants";
import { useCartContext } from "../../context/cartContext";
import "./styles.css";
import "../../components/Card/styles.css";
import SavedItemsPage from "../SavedItems";

function CartPage() {
	const { state, dispatch } = useCartContext();

	const removeFromCartHandler = (item) => {
		dispatch({ type: REMOVE_FROM_CART, payload: item.id });
	};

	const addQuantityHandler = (item) => {
		dispatch({ type: INCREASE_QUANTITY, payload: item.id });
	};

	const decreaseQuantityHandler = (item) => {
		if (item.quantity <= 1) {
			return null;
		}
		dispatch({ type: DECREASE_QUANTITY, payload: item.id });
	};

	const addToSaveLater = (item) => {
		dispatch({ type: ADD_TO_SAVE_FOR_LATER, payload: item });
	};

	const totalPrice = (accumulator, currentValue) => {
		return accumulator + currentValue.quantity * currentValue.price;
	};

	const totalQuantity = (accumulator, currentValue) =>
		accumulator + Number(currentValue.quantity);

	const discount = () => {
		let result = 0;
		state.cartItems.map((el) => (result += el.price - el.price * (el.offer / 100)));
		return result;
	};

	return (
		<div className="cart-page-wrap">
			{state.cartItems.length > 0 && (
				<div className="cart-details">
					<p>Total Items: {state.cartItems.length > 0 && state.cartItems.length}</p>
					<p>
						Total Quantity:{" "}
						{state.cartItems.length > 0 && state.cartItems.reduce(totalQuantity, 0)}
					</p>
					<p>
						Total Price:{" "}
						{state.cartItems.length > 0 && state.cartItems.reduce(totalPrice, 0)}
					</p>
					<p>Discounted Price: {state.cartItems.length > 0 && discount().toFixed(2)}</p>
				</div>
			)}
			{state.cartItems.length > 0 ? (
				<>
					{state.cartItems.map((item) => (
						<div key={item.id} className="cart-card">
							<div className="cart-image">
								<img src={item.image} alt="product" />
							</div>
							<div className="cart-content">
								<p>{item.brand}</p>
								<p>Price: {item.price}</p>
								<small className="offer">{item.offer}% offer</small>
								<div className="ratings">
									<span>{item.ratings}</span>
									<img
										className="img-ratings"
										src="https://polish-ui.netlify.app/icons/star.svg"
										alt="ratings"
									/>
								</div>
								<p>{item.description}</p>
								<div className="buttons">
									<p>{item.quantity}</p>
									<button
										className="m-half-rem"
										onClick={() => decreaseQuantityHandler(item)}
									>
										-
									</button>
									<button
										className="m-half-rem"
										onClick={() => addQuantityHandler(item)}
									>
										+
									</button>
								</div>
								<button
									className="buttons"
									onClick={() => removeFromCartHandler(item)}
								>
									Remove from Cart
								</button>
								<button
									className="m-half-rem buttons"
									onClick={() => addToSaveLater(item)}
								>
									Save for Later
								</button>
							</div>
						</div>
					))}
				</>
			) : (
				<h2 style={{ marginTop: "4rem" }}>No Items in Cart</h2>
			)}
			<SavedItemsPage />
		</div>
	);
}

export default CartPage;
