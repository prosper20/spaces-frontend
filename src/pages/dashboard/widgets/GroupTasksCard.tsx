import Card1, { Card2 } from "../../../components/UI/Input/Card1";

interface Tasks {
	id: number;
	task: string;
	progress: string;
}

interface Props {
	items?: Tasks[];
	className?: string;
}

const tasks: Tasks[] = [
	{
		id: 1,
		task: "Clean Data",
		progress: "20",
	},

	{
		id: 2,
		task: "Eval Model",
		progress: "90",
	},

	{
		id: 3,
		task: "Submit Notebook",
		progress: "0",
	},
];

const GroupTasksCard: React.FC<Props> = ({ className, items = tasks }) => {
	return (
		<div className={`${className}`}>
			<Card1 header={"Tasks"} className="px-[21px] py-[9px]">
				<Card2 className="px-[24px] py-[41px] rounded-[8px] md:mb-6 mb-[18px]">
					<ul className="flex flex-col gap-[31px]">
						{items.map((task) => {
							return (
								<li key={task.id}>
									<div className="flex justify-between items-center flex-wrap gap-[40px] text-[18px] text-text-100 font-header3">
										<p>{task.task}</p>
										<p>{task.progress + "%"}</p>
									</div>
									<div className="bg-background-card h-[10px] sm:h-[16px] rounded-[10px]">
										<div
											className={`bg-progress h-[10px] sm:h-[16px] rounded-[10px]`}
											style={{ width: `${task.progress}%` }}
										></div>
									</div>
								</li>
							);
						})}
					</ul>
				</Card2>
			</Card1>
		</div>
	);
};

export default GroupTasksCard;
