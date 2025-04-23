import {
	addMonths,
	format,
	startOfMonth,
	endOfMonth,
	eachDayOfInterval,
	getDay,
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { Card2 } from "../../../components/UI/Input/Card1";

interface CalendarWidgetProps {
	className?: string;
}

const weekdays = ["S", "M", "T", "W", "T", "F", "S"];

const CalendarWidget: React.FC<CalendarWidgetProps> = ({ className }) => {
	const [month, setMonth] = useState<Date>(new Date());

	const days = eachDayOfInterval({
		start: startOfMonth(month),
		end: endOfMonth(month),
	});

	const padStart = getDay(startOfMonth(month)); // 0‑6
	console.log(padStart);

	return (
		<Card2
			className={`rounded-[20px] pt-[1.5vw] max-mw:p-[2vw] h-[auto] pl-[0.5vw] pr-[0.4vw] max-mw:h-[33vw] bg-background-primary pb-[2vw] ${className}`}
		>
			{/* Header */}
			<div className="flex items-center justify-between">
				<button onClick={() => setMonth(addMonths(month, -1))}>
					<ChevronLeft
						size={22}
						className="shadow-chevrolet-shadow w-[2.4vw] max-mw:w-[2.6vw] h-[2.2vw] max-mw:h-[2.3vw] rounded-[500px]"
					/>
				</button>
				<div className="text-center">
					<p className="font-header1 text-[1vw] max-mw:text-[1.4vw] text-text-100">
						{format(month, "LLLL")}
					</p>
					<p className="text-[0.6vw] max-mw:text-[1vw] font-[600] text-primary-400">
						{format(month, "yyyy")}
					</p>
				</div>
				<button onClick={() => setMonth(addMonths(month, 1))}>
					<ChevronRight
						size={22}
						className="shadow-chevrolet-shadow w-[2.3vw] h-[2vw] max-mw:w-[2.7vw] max-mw:h-[2.3vw] rounded-[500px]"
					/>
				</button>
			</div>

			{/* Weekdays */}
			<div className="grid grid-cols-7 text-center text-[0.8vw] max-mw:text-[1vw] font-header1 text-text-100 mt-[0.1vw] max-mw:mt-[1vw]">
				{weekdays.map((d) => (
					<span className="p-4 max-mm:p-[1vw]" key={d}>
						{d}
					</span>
				))}
			</div>

			{/* Dates */}
			<div className="grid grid-cols-7 gap-[0.8vw] text-center text-sm mt-[0.8vw]">
				{Array.from({ length: padStart }).map((_, i) => (
					<span key={`pad-${i}`} />
				))}
				{days.map((day) => {
					const isToday =
						format(day, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd");
					return (
						<button
							key={day.toString()}
							className={`
                aspect-square rounded-md shadow-calendar-date w-[1.9vw]  max-mw:w-[2.9vw] text-[0.8vw] font-header1 text-text-100 h-[2.1vw] max-mw:h-[2.9vw]
                ${isToday ? "bg-active-calendar text-white" : "hover:bg-black/10"}
              `}
						>
							{format(day, "d")}
						</button>
					);
				})}
			</div>
		</Card2>
	);
};

export default CalendarWidget;
