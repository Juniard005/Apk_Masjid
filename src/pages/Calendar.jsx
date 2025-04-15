const Calendar = () => {
	// Generate days for the current month
	const daysInMonth = 30; // Assuming 30 days for simplicity
	const firstDayOffset = 3; // Assuming the month starts on Wednesday (0 = Sunday, 1 = Monday, etc.)

	const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
	// const emptyDays = Array.from({ length: firstDayOffset }, (_, i) => null);
	const emptyDays = Array.from({ length: firstDayOffset }, () => null);

	// Sample events
	const events = {
		5: [{ title: "Community Meeting", time: "10:00 AM", color: "bg-blue-500" }],
		12: [{ title: "Fundraising Event", time: "6:00 PM", color: "bg-green-500" }],
		15: [
			{ title: "Youth Workshop", time: "2:00 PM", color: "bg-yellow-500" },
			{ title: "Board Meeting", time: "7:00 PM", color: "bg-purple-500" },
		],
		20: [{ title: "Volunteer Day", time: "9:00 AM", color: "bg-red-500" }],
		25: [{ title: "Quran Study", time: "8:00 PM", color: "bg-indigo-500" }],
	};

	return (
		<div>
			<div className='flex justify-between items-center mb-6'>
				<h1 className='text-2xl font-semibold text-foreground'>Calendar</h1>
				<div className='flex space-x-2'>
					<button className='px-3 py-1 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50'>
						Today
					</button>
					<div className='flex border border-gray-300 rounded-md'>
						<button className='px-3 py-1 text-gray-700 hover:bg-gray-50'>
							<svg className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M15 19l-7-7 7-7'
								/>
							</svg>
						</button>
						<button className='px-3 py-1 text-gray-700 hover:bg-gray-50 border-l border-gray-300'>
							<svg className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7' />
							</svg>
						</button>
					</div>
				</div>
			</div>

			<div className='bg-white rounded-lg shadow-sm overflow-hidden'>
				<div className='p-4 border-b border-gray-200'>
					<h2 className='text-xl font-semibold text-foreground'>November 2023</h2>
				</div>

				<div className='grid grid-cols-7 gap-px bg-gray-200'>
					{/* Day headers */}
					{["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
						<div key={day} className='bg-gray-50 py-2 text-center text-sm font-medium text-gray-500'>
							{day}
						</div>
					))}

					{/* Empty days from previous month */}
					{emptyDays.map((_, index) => (
						<div key={`empty-${index}`} className='bg-white h-32 p-2 text-gray-300'></div>
					))}

					{/* Days of the current month */}
					{days.map((day) => (
						<div key={day} className='bg-white h-32 p-2 border-t border-l'>
							<div className='font-semibold text-sm mb-1'>{day}</div>
							{events[day]?.map((event, index) => (
								<div
									key={index}
									className={`${event.color} text-white text-xs p-1 mb-1 rounded truncate`}
								>
									{event.time} - {event.title}
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Calendar;
