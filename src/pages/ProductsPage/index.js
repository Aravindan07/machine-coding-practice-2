import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/Card/Card";
import "./styles.css";

function ProductsPage() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		(async () => {
			const { data } = await axios.get("products.json");
			setProducts(data);
		})();
	}, []);

	return (
		<div className="products-page-wrap">
			<div className="cards-wrapper">
				{products.length > 0 &&
					products.map((product) => <Card key={product.id} product={product} />)}
			</div>
		</div>
	);
}

export default ProductsPage;
