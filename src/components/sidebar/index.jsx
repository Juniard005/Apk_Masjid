import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ isSidebarOpen }) => {
	const location = useLocation();
	const currentPath = location.pathname;

	return (
		<div className={`bg-white shadow-md h-screen transition-all duration-300 ${isSidebarOpen ? "w-64" : "w-16"}`}>
			<div className={`pt-5 px-4 pb-3 flex items-center ${isSidebarOpen ? "ml-2" : ""}`}>
				<svg className='w-8 h-8 text-primary flex-shrink-0' viewBox='0 0 24 24' fill='currentColor'>
					<path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
				</svg>
				<div className={`overflow-hidden transition-all duration-300 ${isSidebarOpen ? "ml-2" : "w-0 h-0"}`}>
					<span className='text-xl font-semibold text-primary whitespace-nowrap'>MPP-APP</span>
				</div>
			</div>
			<nav className={`${isSidebarOpen ? "p-4" : "p-3"}`}>
				<ul className='space-y-2'>
					<li>
						<Link
							to='/'
							className={`flex items-center rounded-lg ${
								currentPath === "/" ? "bg-primary text-white" : "hover:bg-muted text-foreground"
							} ${isSidebarOpen ? "p-2" : "p-[10px]"}`}
						>
							<svg
								className='w-5 h-5 flex-shrink-0'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
								></path>
							</svg>
							<div
								className={`overflow-hidden transition-all duration-300 ${
									isSidebarOpen ? "w-32 ml-3" : "w-0 h-0"
								}`}
							>
								<span className='whitespace-nowrap'>Dashboard</span>
							</div>
						</Link>
					</li>
					<li>
						<Link
							to='/events'
							className={`flex items-center p-2 rounded-lg ${
								currentPath === "/events" ? "bg-primary text-white" : "hover:bg-muted text-foreground"
							} ${isSidebarOpen ? "p-2" : "p-[10px]"}`}
						>
							<svg
								className='w-5 h-5 flex-shrink-0'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
								></path>
							</svg>
							<div
								className={`overflow-hidden transition-all duration-300 ${
									isSidebarOpen ? "w-32 ml-3" : "w-0 h-0"
								}`}
							>
								<span className='whitespace-nowrap'>Events</span>
							</div>
						</Link>
					</li>
					<li>
						<Link
							to='/calendar'
							className={`flex items-center p-2 rounded-lg ${
								currentPath === "/calendar" ? "bg-primary text-white" : "hover:bg-muted text-foreground"
							} ${isSidebarOpen ? "p-2" : "p-[10px]"}`}
						>
							<svg
								className='w-5 h-5 flex-shrink-0'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
								></path>
							</svg>
							<div
								className={`overflow-hidden transition-all duration-300 ${
									isSidebarOpen ? "w-32 ml-3" : "w-0 h-0"
								}`}
							>
								<span className='whitespace-nowrap'>Calendar</span>
							</div>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Sidebar;
