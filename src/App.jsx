import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Events from "./pages/Events.jsx";
import Calendar from "./pages/Calendar.jsx";

function App() {
	return (
		<StrictMode>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<Dashboard />} />
						<Route path='events' element={<Events />} />
						<Route path='calendar' element={<Calendar />} />
						{/* Add more routes as needed */}
					</Route>
				</Routes>
			</BrowserRouter>
		</StrictMode>
	);
}

export default App;
