const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => (
	<header className='bg-white shadow-sm z-10'>
		<div className='flex items-center justify-between p-4'>
			<div className='flex items-center'>
				<button
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}
					className='text-gray-500 focus:outline-none transition-colors rounded-lg border border-gray-200'
					aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
				>
					{isSidebarOpen ? (
						<svg width='24' height='24' viewBox='0 0 28 28' fill='none'>
							<rect
								x='3'
								y='3'
								width='22'
								height='22'
								rx='6'
								fill='white'
								stroke='#CBD5E1'
								strokeWidth='2'
							/>
							<rect x='15' y='7' width='6' height='14' rx='2' fill='#F1F5F9' />
							<path
								d='M13 14L9 14M9 14L11 12M9 14L11 16'
								stroke='#64748B'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					) : (
						<svg width='24' height='24' viewBox='0 0 28 28' fill='none'>
							<rect
								x='3'
								y='3'
								width='22'
								height='22'
								rx='6'
								fill='white'
								stroke='#CBD5E1'
								strokeWidth='2'
							/>
							<rect x='7' y='7' width='6' height='14' rx='2' fill='#F1F5F9' />
							<path
								d='M15 14L19 14M19 14L17 12M19 14L17 16'
								stroke='#64748B'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					)}
				</button>
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
);

export default Navbar;
