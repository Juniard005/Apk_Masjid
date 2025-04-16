import Layout from "/src/components/layout";
import Dashboard from "/src/pages/Dashboard";
import Events from "/src/pages/Events";
import Calendar from "/src/pages/Calendar";

const routes = [
	{
		path: "/",
		element: <Layout />,
		children: [
			{ index: true, element: <Dashboard /> },
			{ path: "events", element: <Events /> },
			{ path: "calendar", element: <Calendar /> },
			// Add more routes as needed
		],
	},
];

export default routes;
