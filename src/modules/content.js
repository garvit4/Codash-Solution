import { Routes, Route } from "react-router-dom";
import Home from './home';
import About from './about';

export default function Content() {
	return (
		<div>
			<h1>Welcome to React Router!</h1>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
			</Routes>
		</div>
	);
}