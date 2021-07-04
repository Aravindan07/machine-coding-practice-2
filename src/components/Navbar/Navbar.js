import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";

function Navbar() {
	const history = useHistory();

	return (
		<div className="wrapper">
			<h2 style={{ cursor: "pointer" }} onClick={() => history.push("/")}>
				Flipcart
			</h2>
			<p
				style={{ cursor: "pointer", marginRight: "2rem" }}
				onClick={() => history.push("/cart")}
			>
				Cart
			</p>
		</div>
	);
}

export default Navbar;
