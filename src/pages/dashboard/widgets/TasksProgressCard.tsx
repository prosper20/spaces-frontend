import { Circle } from "lucide-react";
import React from "react";
import Card1 from "../../../components/Card1";

interface Props {
	completed?: number;
	inProgress?: number;
	notStarted?: number;
}

const TasksProgressCard: React.FC<Props> = ({
	completed = 60,
	inProgress = 25,
	notStarted = 15,
}) => {
	const total = completed + inProgress + notStarted;
	const radius = 40;
	const strokeWidth = 8;
	const center = 50;
	const normalizedRadius = radius - strokeWidth / 2;
	const circumference = 2 * Math.PI * normalizedRadius;

	const segments = [
		{ label: "Completed", value: completed, color: "#18320C" },
		{ label: "In progress", value: inProgress, color: "#CDBF2C" },
		{ label: "Not started", value: notStarted, color: "#E5E5E5" },
	];

	let offset = 0;

	return (
		<Card1 header={"Task"} className="w-[328px] h-[232px]" isStroked>
			{/* Donut Chart */}
			<div className="relative w-24 h-24 mx-auto">
				<svg width="100" height="100">
					{segments.map((segment, index) => {
						const percentage = segment.value / total;
						const dashLength = percentage * circumference;

						const circle = (
							<circle
								key={index}
								cx={center}
								cy={center}
								r={normalizedRadius}
								fill="transparent"
								stroke={segment.color}
								strokeWidth={strokeWidth}
								strokeDasharray={`${dashLength} ${circumference}`}
								strokeDashoffset={offset}
								strokeLinecap="butt"
								transform={`rotate(-90 ${center} ${center})`}
							/>
						);

						offset -= dashLength;
						return circle;
					})}
				</svg>
				<span className="absolute top-[55%] left-[45%] flex items-center justify-center font-bold text-[24px] text-black">
					{completed}%
				</span>
			</div>

			{/* Legend */}
			<div className="mt-4 flex items-center gap-4 text-xs justify-center">
				<LegendDot color="#E5E5E5" label="Not started" />
				<LegendDot color="#CDBF2C" label="In progress" />
				<LegendDot color="#18320C" label="Completed" />
			</div>
		</Card1>
	);
};

const LegendDot = ({ color, label }: { color: string; label: string }) => (
	<span className="flex items-center gap-1">
		<Circle size={10} fill={color} stroke={color} />
		{label}
	</span>
);

export default TasksProgressCard;
