import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import Navbar from "../navbar";

const Layout = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	return (
		<div className='flex h-screen bg-background'>
			{/* Fixed Sidebar */}
			<div className='fixed inset-y-0 left-0 z-20'>
				<Sidebar isSidebarOpen={isSidebarOpen} />
			</div>

			{/* Main Content Area */}
			<div className={`flex-1 flex flex-col ${isSidebarOpen ? "ml-64" : "ml-16"} transition-all duration-300`}>
				<Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
				<main className='flex-1 overflow-auto p-6 bg-background'>
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default Layout;
