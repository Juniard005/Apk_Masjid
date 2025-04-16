import { StrictMode } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "./routes";
import "./index.css";

function AppRoutes() {
	return useRoutes(routes);
}

function App() {
	return (
		<StrictMode>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</StrictMode>
	);
}

export default App;
