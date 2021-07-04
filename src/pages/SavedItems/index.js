import React from "react";
import { REMOVE_FROM_SAVE_FOR_LATER } from "../../constants";
import { useCartContext } from "../../context/cartContext";
import "../CartPage/styles.css";

function SavedItemsPage() {
	const { state, dispatch } = useCartContext();

	const removeFromSavedItems = (item) => {
		dispatch({ type: REMOVE_FROM_SAVE_FOR_LATER, payload: item });
	};

	return (
		<div className="cart-page-wrap">
			{state.savedItems.length > 0 ? (
				<>
					<h3>Saved Items</h3>
					{state.savedItems.map((item) => (
						<div key={item.id} className="cart-card">
							<div className="cart-image">
								<img src={item.image} alt="product" />
							</div>
							<div className="cart-content">
								<p>{item.brand}</p>
								<p>Price: {item.price}</p>
								<div className="ratings">
									<span>{item.ratings}</span>
									<img
										className="img-ratings"
										src="https://polish-ui.netlify.app/icons/star.svg"
										alt="ratings"
									/>
								</div>
								<p>{item.description}</p>
								<button onClick={() => removeFromSavedItems(item)}>
									Move to Cart
								</button>
								<div>
									<p>quantity: {item.quantity}</p>
								</div>
							</div>
						</div>
					))}
				</>
			) : (
				<h2 style={{ marginTop: "4rem" }}>No saved Items</h2>
			)}
		</div>
	);
}

export default SavedItemsPage;
