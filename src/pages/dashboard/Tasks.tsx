// components/TaskBoard.tsx

import React from "react";

type Task = {
	title: string;
	description: string;
	dateRange: string;
	dateColor: string;
	assignees: number; // number of avatars to show
};

type Column = {
	title: string;
	tasks: Task[];
};

const columns: Column[] = [
	{
		title: "To do",
		tasks: [
			{
				title: "Evaluate Accuracy",
				description: "Test the model on validation data",
				dateRange: "16 Apr - 18 Apr",
				dateColor: "bg-task1",
				assignees: 4,
			},
			{
				title: "Tune Hyperparameters",
				description: "Adjust learning rate, depth, etc.",
				dateRange: "16 Apr - 18 Apr",
				dateColor: "bg-task1",
				assignees: 4,
			},
			{
				title: "Team Presentation Slides",
				description: "Design a short slide deck for project overview",
				dateRange: "16 Apr - 18 Apr",
				dateColor: "bg-task1",
				assignees: 0,
			},
		],
	},
	{
		title: "In progress",
		tasks: [
			{
				title: "Explore Data (EDA)",
				description: "Visualize trends and correlations",
				dateRange: "12 Apr - 18 Apr",
				dateColor: "bg-task2",
				assignees: 4,
			},
			{
				title: "Train First Model",
				description: "Implement a basic regression/classifier",
				dateRange: "12 Apr - 18 Apr",
				dateColor: "bg-task2",
				assignees: 3,
			},
		],
	},
	{
		title: "Completed",
		tasks: [
			{
				title: "Collect Training Data",
				description: "Gather raw datasets for the project",
				dateRange: "16 Apr - 18 Apr",
				dateColor: "bg-taskgreen",
				assignees: 4,
			},
			{
				title: "Clean & Preprocess Data",
				description: "Handle missing values, normalize inputs",
				dateRange: "16 Apr - 18 Apr",
				dateColor: "bg-taskgreen",
				assignees: 3,
			},
		],
	},
];

const TaskBoard: React.FC = () => {
	return (
		<div className="p-8 min-h-screen">
			<h1 className="text-[36px] font-header mb-8 text-text-100">Task Board</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{columns.map((column) => (
					<div key={column.title}>
						<div className="flex items-center justify-between mb-4">
							<h2 className="text-[30px] font-header1">{column.title}</h2>
							<button className="text-gray-400 text-[30px] hover:text-black">
								...+
							</button>
						</div>

						<div className="space-y-4">
							{column.tasks.map((task, idx) => (
								<div
									key={idx}
									className="bg-background-primary shadow-box-shadow1 rounded-lg p-4 flex flex-col gap-3"
								>
									<h3 className="font-header2 text-[24px] text-text-100">
										{task.title}
									</h3>
									<div
										className={`text-[20px] font-header3 px-2 py-1 my-4 rounded-[8px] w-fit ${task.dateColor}`}
									>
										{task.dateRange}
									</div>
									<p className="text-[20px] font-header2 text-gray-500">
										{task.description}
									</p>
									<div className="border-b-[1px] mt-[6px] border-b-text-100"></div>
									<div className="flex -space-x-2 mt-2  py-4 justify-end">
										{Array.from({ length: Math.min(task.assignees, 3) }).map(
											(_, i) => (
												<div
													key={i}
													className="w-11 h-11 rounded-full bg-gray-300 border-2"
												/>
											)
										)}
										{task.assignees > 3 && (
											<div className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-300 text-sm font-semibold text-gray-700 border-2 border-white">
												+{task.assignees - 3}
											</div>
										)}
									</div>
								</div>
							))}

							<button className="w-full mt-2 py-8 rounded-lg bg-gray-200 font-header3 hover:bg-gray-300 text-[20px]">
								+ Add task
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default TaskBoard;
