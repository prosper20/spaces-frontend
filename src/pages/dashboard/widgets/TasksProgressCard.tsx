import { Circle } from "lucide-react";
import React from "react";

interface Props {
	percent?: number; // 0‑100
}
const TasksProgressCard: React.FC<Props> = ({ percent = 60 }) => {
	const radius = 40;
	const stroke = 8;
	const normalizedRadius = radius - stroke / 2;
	const circumference = normalizedRadius * 2 * Math.PI;
	const strokeDashoffset = circumference - (percent / 100) * circumference;

	return (
		<div className="rounded-lg bg-white shadow-sm border border-gray-200 p-6 flex flex-col">
			<h3 className="text-lg font-semibold mb-4">Tasks</h3>

			{/* Donut chart */}
			<div className="relative w-24 h-24 mx-auto">
				<svg width="100%" height="100%" className="-rotate-90">
					<circle
						stroke="#E5E5E5"
						fill="transparent"
						strokeWidth={stroke}
						r={normalizedRadius}
						cx={radius}
						cy={radius}
					/>
					<circle
						stroke="#18320C"
						fill="transparent"
						strokeWidth={stroke}
						strokeLinecap="round"
						strokeDasharray={`${circumference} ${circumference}`}
						strokeDashoffset={strokeDashoffset}
						r={normalizedRadius}
						cx={radius}
						cy={radius}
					/>
				</svg>
				<span className="absolute inset-0 flex items-center justify-center font-bold text-xl">
					{percent}%
				</span>
			</div>

			{/* Legend */}
			<div className="mt-4 flex items-center gap-4 text-xs">
				<LegendDot color="#E5E5E5" label="Not started" />
				<LegendDot color="#CDBF2C" label="In progress" />
				<LegendDot color="#18320C" label="Completed" />
			</div>
		</div>
	);
};

const LegendDot = ({ color, label }: { color: string; label: string }) => (
	<span className="flex items-center gap-1">
		<Circle size={10} fill={color} stroke={color} />
		{label}
	</span>
);

export default TasksProgressCard;
