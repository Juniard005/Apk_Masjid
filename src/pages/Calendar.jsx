import { useState } from "react";

const Calendar = () => {
	const [currentDate, setCurrentDate] = useState(new Date());
	const [events, _] = useState({
		// Sample events - you can replace this with your actual events data
		"2025-04-05": [{ title: "Community Meeting", time: "10:00 AM", color: "bg-blue-500" }],
		"2025-04-12": [{ title: "Fundraising Event", time: "6:00 PM", color: "bg-green-500" }],
		"2025-04-15": [
			{ title: "Youth Workshop", time: "2:00 PM", color: "bg-yellow-500" },
			{ title: "Board Meeting", time: "7:00 PM", color: "bg-purple-500" },
		],
		"2025-04-20": [{ title: "Volunteer Day", time: "9:00 AM", color: "bg-red-500" }],
		"2025-04-25": [{ title: "Quran Study", time: "8:00 PM", color: "bg-indigo-500" }],
	});

	// Month names for dropdown
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	// Generate year options (current year ± 10 years)
	const currentYear = new Date().getFullYear();
	const years = Array.from({ length: 7 }, (_, i) => currentYear - 3 + i);

	// Get days in month
	const getDaysInMonth = (date) => {
		return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
	};

	// Get first day of month (0 = Sunday, 1 = Monday, etc.)
	const getFirstDayOfMonth = (date) => {
		return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
	};

	// Format date as YYYY-MM-DD for event lookup
	const formatDateKey = (year, month, day) => {
		return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
	};

	// Navigate to previous month
	const prevMonth = () => {
		setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
	};

	// Navigate to next month
	const nextMonth = () => {
		setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
	};

	// Go to today
	const goToToday = () => {
		setCurrentDate(new Date());
	};

	// Get month name
	const getMonthName = (date) => {
		return date.toLocaleString("default", { month: "long" });
	};

	// Handle month change from dropdown
	const handleMonthChange = (e) => {
		const newMonth = parseInt(e.target.value);
		setCurrentDate(new Date(currentDate.getFullYear(), newMonth, 1));
	};

	// Handle year change from dropdown
	const handleYearChange = (e) => {
		const newYear = parseInt(e.target.value);
		setCurrentDate(new Date(newYear, currentDate.getMonth(), 1));
	};

	// Generate calendar data
	const daysInMonth = getDaysInMonth(currentDate);
	const firstDayOffset = getFirstDayOfMonth(currentDate);
	const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
	const emptyDays = Array.from({ length: firstDayOffset }, () => null);

	return (
		<div>
			<div className='flex justify-between items-center mb-6'>
				<h1 className='text-2xl font-semibold text-foreground'>Calendar</h1>
				<div className='flex space-x-2'>
					<button
						className='px-3 py-1 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50'
						onClick={goToToday}
					>
						Today
					</button>
					<div className='flex border border-gray-300 rounded-md'>
						<button className='px-3 py-1 text-gray-700 hover:bg-gray-50' onClick={prevMonth}>
							<svg className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M15 19l-7-7 7-7'
								/>
							</svg>
						</button>
						<button
							className='px-3 py-1 text-gray-700 hover:bg-gray-50 border-l border-gray-300'
							onClick={nextMonth}
						>
							<svg className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7' />
							</svg>
						</button>
					</div>

					{/* Month and Year Filter */}
					<div className='flex space-x-2 ml-4'>
						<select
							className='px-3 py-1 bg-white border border-gray-300 rounded-md text-gray-700'
							value={currentDate.getMonth()}
							onChange={handleMonthChange}
						>
							{months.map((month, index) => (
								<option key={month} value={index}>
									{month}
								</option>
							))}
						</select>

						<select
							className='px-3 py-1 bg-white border border-gray-300 rounded-md text-gray-700'
							value={currentDate.getFullYear()}
							onChange={handleYearChange}
						>
							{years.map((year) => (
								<option key={year} value={year}>
									{year}
								</option>
							))}
						</select>
					</div>
				</div>
			</div>

			<div className='bg-white rounded-lg shadow-sm overflow-hidden'>
				<div className='p-4 border-b border-gray-200'>
					<h2 className='text-xl font-semibold text-foreground'>
						{getMonthName(currentDate)} {currentDate.getFullYear()}
					</h2>
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
					{days.map((day) => {
						const dateKey = formatDateKey(currentDate.getFullYear(), currentDate.getMonth() + 1, day);
						const isToday =
							new Date().getDate() === day &&
							new Date().getMonth() === currentDate.getMonth() &&
							new Date().getFullYear() === currentDate.getFullYear();

						return (
							<div
								key={day}
								className={`bg-white h-32 p-2 border-t border-l ${isToday ? "bg-blue-200" : ""}`}
							>
								<div className={`font-semibold text-sm mb-1 ${isToday ? "text-blue-600" : ""}`}>
									{day}
								</div>
								{events[dateKey]?.map((event, index) => (
									<div
										key={index}
										className={`${event.color} text-white text-xs p-1 mb-1 rounded truncate`}
									>
										{event.time} - {event.title}
									</div>
								))}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Calendar;
