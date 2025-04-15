const Events = () => {
	const events = [
		{
			id: 1,
			title: "Community Gathering",
			date: "2023-11-15",
			time: "10:00 AM - 12:00 PM",
			location: "Main Hall",
			description: "Monthly community gathering to discuss upcoming projects and initiatives.",
			attendees: 45,
		},
		{
			id: 2,
			title: "Fundraising Event",
			date: "2023-11-20",
			time: "6:00 PM - 9:00 PM",
			location: "Community Center",
			description: "Annual fundraising event to support local education programs.",
			attendees: 120,
		},
		{
			id: 3,
			title: "Youth Workshop",
			date: "2023-11-25",
			time: "2:00 PM - 4:00 PM",
			location: "Conference Room B",
			description: "Interactive workshop for youth to learn about leadership and community service.",
			attendees: 30,
		},
		{
			id: 4,
			title: "Eid Celebration Planning",
			date: "2023-12-01",
			time: "7:00 PM - 8:30 PM",
			location: "Meeting Room 1",
			description: "Planning meeting for the upcoming Eid celebration.",
			attendees: 15,
		},
		{
			id: 5,
			title: "Quran Study Circle",
			date: "2023-12-05",
			time: "8:00 PM - 9:30 PM",
			location: "Prayer Hall",
			description: "Weekly Quran study and discussion group.",
			attendees: 25,
		},
	];

	return (
		<div>
			<div className='flex justify-between items-center mb-6'>
				<h1 className='text-2xl font-semibold text-foreground'>Events</h1>
				<button className='px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition-colors'>
					Create New Event
				</button>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{events.map((event) => (
					<div key={event.id} className='bg-white rounded-lg shadow-sm overflow-hidden'>
						<div className='p-6'>
							<div className='flex justify-between items-start'>
								<h2 className='text-lg font-semibold text-foreground mb-2'>{event.title}</h2>
								<span className='px-2 py-1 text-xs rounded-full bg-primary text-white'>
									{event.attendees} attendees
								</span>
							</div>
							<div className='text-sm text-gray-500 mb-4'>
								<div className='flex items-center mb-1'>
									<svg className='h-4 w-4 mr-2' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
										/>
									</svg>
									<span>{event.date}</span>
								</div>
								<div className='flex items-center mb-1'>
									<svg className='h-4 w-4 mr-2' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
										/>
									</svg>
									<span>{event.time}</span>
								</div>
								<div className='flex items-center'>
									<svg className='h-4 w-4 mr-2' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
										/>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
										/>
									</svg>
									<span>{event.location}</span>
								</div>
							</div>
							<p className='text-sm text-gray-600 mb-4'>{event.description}</p>
							<div className='flex justify-end space-x-2'>
								<button className='px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded hover:bg-opacity-90 transition-colors'>
									Edit
								</button>
								<button className='px-3 py-1 text-sm bg-primary text-white rounded hover:bg-opacity-90 transition-colors'>
									View Details
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Events;
