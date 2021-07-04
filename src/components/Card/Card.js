import React from "react";
import { useHistory } from "react-router-dom";
import { ADD_TO_CART } from "../../constants";
import { useCartContext } from "../../context/cartContext";
import "./styles.css";

function Card({ product }) {
	const { state, dispatch } = useCartContext();
	const history = useHistory();

	const checkPresent = state.cartItems.find((el) => el.id === product.id);

	const addToCartHandler = () => {
		if (checkPresent) {
			return history.push("/cart");
		}
		dispatch({ type: ADD_TO_CART, payload: product });
	};

	return (
		<div className="card-wrap">
			<div className="image-container">
				<img src={product.image} alt="product" />
			</div>
			<div className="product-description">
				<p className="product-name">{product.brand}</p>
				<p className="product-describer">{product.description}</p>
				<p className="product-price">Rs. {product.price}</p>
				<small className="offer">{product.offer}% offer</small>
				<div className="product-ratings">
					<span>{product.ratings}</span>
					<img src="https://polish-ui.netlify.app/icons/star.svg" alt="ratings" />
				</div>
			</div>
			<button className="cart-button" onClick={addToCartHandler}>
				{!checkPresent ? "Add To Cart" : "Go to Cart"}
			</button>
		</div>
	);
}

export default Card;
