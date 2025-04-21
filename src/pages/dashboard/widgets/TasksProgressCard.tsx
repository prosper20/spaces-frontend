import { Circle } from "lucide-react";
import React from "react";
import Card1 from "../../../components/UI/Input/Card1";
import DonutChart from "../../../components/UI/Input/DonutChart";

interface Props {
	completed?: number;
	inProgress?: number;
	notStarted?: number;
}

const TasksProgressCard: React.FC<Props> = ({
	completed = 60,
	inProgress = 20,
	notStarted = 20,
}) => {
	return (
		<Card1 header={"Task"} className="w-[328px] h-[232px] gap-4" isStroked>
			{/* Donut Chart */}

			<DonutChart
				completed={completed}
				inProgress={inProgress}
				notStarted={notStarted}
			/>

			{/* Legend */}
			<div className="mt-1 flex items-center gap-[8px] text-[14px] font-header2 justify-center item-center">
				<LegendDot color="#E5E5E5" label="Not started" />
				<LegendDot color="#CDBF2C" label="In progress" />
				<LegendDot color="#18320C" label="Completed" />
			</div>
		</Card1>
	);
};

const LegendDot = ({ color, label }: { color: string; label: string }) => (
	<span className="flex items-center gap-[8px]">
		<Circle size={10} fill={color} stroke={color} />
		{label}
	</span>
);

export default TasksProgressCard;
