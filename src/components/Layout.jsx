import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	return (
		<div className='flex h-screen bg-background'>
			{/* Sidebar */}
			<div
				className={`bg-white shadow-md w-64 transition-all duration-300 ${
					isSidebarOpen ? "translate-x-0" : "-translate-x-full"
				} fixed h-full z-10 md:relative md:translate-x-0`}
			>
				<div className='p-4 border-b'>
					<div className='flex items-center'>
						<svg className='w-8 h-8 text-primary' viewBox='0 0 24 24' fill='currentColor'>
							<path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
						</svg>
						<span className='ml-2 text-xl font-semibold text-primary'>preline</span>
					</div>
				</div>
				<nav className='p-4'>
					<ul className='space-y-2'>
						<li>
							<Link to='/' className='flex items-center p-2 rounded-lg hover:bg-muted text-foreground'>
								<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
									></path>
								</svg>
								<span className='ml-3'>Dashboard</span>
							</Link>
						</li>
						<li>
							<Link
								to='/users'
								className='flex items-center p-2 rounded-lg hover:bg-muted text-foreground'
							>
								<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
									></path>
								</svg>
								<span className='ml-3'>Users</span>
							</Link>
						</li>
						<li>
							<Link
								to='/events'
								className='flex items-center p-2 rounded-lg hover:bg-muted text-foreground'
							>
								<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
									></path>
								</svg>
								<span className='ml-3'>Events</span>
							</Link>
						</li>
						<li>
							<Link
								to='/calendar'
								className='flex items-center p-2 rounded-lg hover:bg-muted text-foreground'
							>
								<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
									></path>
								</svg>
								<span className='ml-3'>Calendar</span>
							</Link>
						</li>
						<li>
							<Link
								to='/documentation'
								className='flex items-center p-2 rounded-lg hover:bg-muted text-foreground'
							>
								<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
									></path>
								</svg>
								<span className='ml-3'>Documentation</span>
							</Link>
						</li>
					</ul>
				</nav>
			</div>

			{/* Main Content */}
			<div className='flex-1 flex flex-col overflow-hidden'>
				{/* Navbar */}
				<header className='bg-white shadow-sm z-10'>
					<div className='flex items-center justify-between p-4'>
						<div className='flex items-center'>
							<button
								onClick={() => setIsSidebarOpen(!isSidebarOpen)}
								className='text-gray-500 focus:outline-none md:hidden'
							>
								<svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M4 6h16M4 12h16M4 18h16'
									/>
								</svg>
							</button>
							<div className='relative mx-4 lg:mx-0'>
								<span className='absolute inset-y-0 left-0 pl-3 flex items-center'>
									<svg className='h-5 w-5 text-gray-500' viewBox='0 0 24 24' fill='none'>
										<path
											d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								</span>
								<input
									className='form-input w-32 sm:w-64 rounded-md pl-10 pr-4 focus:border-primary'
									type='text'
									placeholder='Search'
								/>
							</div>
						</div>
						<div className='flex items-center'>
							<button className='flex mx-4 text-gray-600 focus:outline-none'>
								<svg className='h-6 w-6' viewBox='0 0 24 24' fill='none' stroke='currentColor'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
									/>
								</svg>
							</button>
							<div className='relative'>
								<button className='relative z-10 block h-8 w-8 rounded-full overflow-hidden focus:outline-none'>
									<img
										className='h-full w-full object-cover'
										src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
										alt='Your avatar'
									/>
								</button>
							</div>
						</div>
					</div>
				</header>

				{/* Page Content */}
				<main className='flex-1 overflow-x-hidden overflow-y-auto bg-background p-6'>
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default Layout;
