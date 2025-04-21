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

const weekdays = ["S", "M", "T", "W", "T", "F", "S"];

const CalendarWidget: React.FC = () => {
	const [month, setMonth] = useState<Date>(new Date());

	const days = eachDayOfInterval({
		start: startOfMonth(month),
		end: endOfMonth(month),
	});

	const padStart = getDay(startOfMonth(month)); // 0‑6
	console.log(padStart);

	return (
		<Card2 className="rounded-[20px] pt-[23px] w-[357px] h-[auto] pl-[15px] pr-[13px] bg-background-primary pb-[25px]">
			{/* Header */}
			<div className="flex items-center justify-between">
				<button onClick={() => setMonth(addMonths(month, -1))}>
					<ChevronLeft
						size={22}
						className="shadow-chevrolet-shadow w-[34px] h-[29px] rounded-[500px]"
					/>
				</button>
				<div className="text-center">
					<p className="font-header1 text-[16px] text-text-100">
						{format(month, "LLLL")}
					</p>
					<p className="text-[10px] font-[600] text-primary-400">
						{format(month, "yyyy")}
					</p>
				</div>
				<button onClick={() => setMonth(addMonths(month, 1))}>
					<ChevronRight
						size={22}
						className="shadow-chevrolet-shadow w-[34px] h-[29px] rounded-[500px]"
					/>
				</button>
			</div>

			{/* Weekdays */}
			<div className="grid grid-cols-7 text-center text-[14px] font-header1 text-text-100 mt-[10px]">
				{weekdays.map((d) => (
					<span className="p-4" key={d}>
						{d}
					</span>
				))}
			</div>

			{/* Dates */}
			<div className="grid grid-cols-7 gap-[13px] text-center text-sm mt-[13px]">
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
                aspect-square rounded-md shadow-calendar-date w-[36px] text-[14px] font-header1 text-text-100 h-[33px]
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
