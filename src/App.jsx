import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { HomePage } from "./pages/home-page";
import { GamePage } from "./pages/game-page";
import { OrderPage } from "./pages/order-page";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/order" element={<OrderPage />} />
				<Route exact path="/app/:title" element={<GamePage />} />
				<Route exact path="/" element={<HomePage />} />
			</Routes>
		</div>
	);
}

export default App;
