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

const weekdays = ["S", "M", "T", "W", "T", "F", "S"];

const CalendarWidget: React.FC = () => {
	const [month, setMonth] = useState<Date>(new Date());

	const days = eachDayOfInterval({
		start: startOfMonth(month),
		end: endOfMonth(month),
	});

	const padStart = getDay(startOfMonth(month)); // 0‑6

	return (
		<div className="rounded-lg bg-white shadow-sm border border-gray-200 p-4 flex flex-col gap-2">
			{/* Header */}
			<div className="flex items-center justify-between">
				<button onClick={() => setMonth(addMonths(month, -1))}>
					<ChevronLeft size={18} />
				</button>
				<div className="text-center">
					<p className="font-semibold">{format(month, "LLLL")}</p>
					<p className="text-xs">{format(month, "yyyy")}</p>
				</div>
				<button onClick={() => setMonth(addMonths(month, 1))}>
					<ChevronRight size={18} />
				</button>
			</div>

			{/* Weekdays */}
			<div className="grid grid-cols-7 text-center text-xs font-medium mt-2">
				{weekdays.map((d) => (
					<span key={d}>{d}</span>
				))}
			</div>

			{/* Dates */}
			<div className="grid grid-cols-7 gap-1 text-center text-sm">
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
                aspect-square rounded-md
                ${isToday ? "bg-button-100 text-white" : "hover:bg-black/10"}
              `}
						>
							{format(day, "d")}
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default CalendarWidget;
