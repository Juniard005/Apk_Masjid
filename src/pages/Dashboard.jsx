const Dashboard = () => {
	return (
		<div>
			<h1 className='text-2xl font-semibold text-foreground mb-6'>Dashboard</h1>

			<div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>
				<div className='bg-white p-6 rounded-lg shadow-sm'>
					<div className='flex items-center'>
						<div className='p-3 rounded-full bg-primary bg-opacity-10 text-primary'>
							<svg className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
								/>
							</svg>
						</div>
						<div className='ml-4'>
							<h2 className='text-gray-600 text-sm'>Total Users</h2>
							<p className='text-2xl font-semibold text-foreground'>1,257</p>
						</div>
					</div>
				</div>

				<div className='bg-white p-6 rounded-lg shadow-sm'>
					<div className='flex items-center'>
						<div className='p-3 rounded-full bg-green-100 text-green-500'>
							<svg className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
								/>
							</svg>
						</div>
						<div className='ml-4'>
							<h2 className='text-gray-600 text-sm'>Upcoming Events</h2>
							<p className='text-2xl font-semibold text-foreground'>12</p>
						</div>
					</div>
				</div>

				<div className='bg-white p-6 rounded-lg shadow-sm'>
					<div className='flex items-center'>
						<div className='p-3 rounded-full bg-blue-100 text-blue-500'>
							<svg className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z'
								/>
							</svg>
						</div>
						<div className='ml-4'>
							<h2 className='text-gray-600 text-sm'>Monthly Growth</h2>
							<p className='text-2xl font-semibold text-foreground'>24.8%</p>
						</div>
					</div>
				</div>
			</div>

			<div className='bg-white p-6 rounded-lg shadow-sm mb-6'>
				<h2 className='text-lg font-semibold text-foreground mb-4'>Recent Activity</h2>
				<div className='overflow-x-auto'>
					<table className='min-w-full divide-y divide-gray-200'>
						<thead className='bg-gray-50'>
							<tr>
								<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
									User
								</th>
								<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
									Activity
								</th>
								<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
									Date
								</th>
								<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
									Status
								</th>
							</tr>
						</thead>
						<tbody className='bg-white divide-y divide-gray-200'>
							{[1, 2, 3, 4, 5].map((item) => (
								<tr key={item}>
									<td className='px-6 py-4 whitespace-nowrap'>
										<div className='flex items-center'>
											<div className='h-10 w-10 rounded-full bg-gray-200'></div>
											<div className='ml-4'>
												<div className='text-sm font-medium text-foreground'>User {item}</div>
												<div className='text-sm text-gray-500'>user{item}@example.com</div>
											</div>
										</div>
									</td>
									<td className='px-6 py-4 whitespace-nowrap'>
										<div className='text-sm text-gray-900'>Completed task #{item}</div>
									</td>
									<td className='px-6 py-4 whitespace-nowrap'>
										<div className='text-sm text-gray-500'>2023-11-{10 + item}</div>
									</td>
									<td className='px-6 py-4 whitespace-nowrap'>
										<span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
											Completed
										</span>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
