import { Routes, Route } from "react-router-dom";
import Home from "/pages/Home";
import Deeptalk from "/pages/Deeptalk";

export default function App() {
	return (
		<Routes>
			<Route path="/" Component={Home} />
			<Route path="/deeptalk" Component={Deeptalk} />
		</Routes>
	);
}
