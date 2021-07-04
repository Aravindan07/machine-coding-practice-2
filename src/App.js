import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Switch>
				<Route path="/cart" component={CartPage} />
				<Route path="/" component={ProductsPage} />
			</Switch>
		</div>
	);
}

export default App;
