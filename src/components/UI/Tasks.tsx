import { FormEvent } from "react";
import { Input } from "./Input/Inputs";
// import { columns } from "../../pages/dashboard/Tasks";

interface Props {}

// type Task = {
// 	title: string;
// 	description: string;
// 	dateRange: string;
// 	dateColor: string;
// 	assignees: number; // number of avatars to show
// };

// type Column = {
// 	tasks: Task[];
// };

const Tasks: React.FC<Props> = () => {
	// const [task, setTask] = useState<Column[]>(columns)
	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const data = Object.fromEntries(form.entries());
		console.log(data);

		// setTask(prev => {
		//     const date = new Date()
		//     // const dat: Task = {
		//     //     title: data?.title as string,
		//     //     description: data?.description as string,
		//     //     dateRange: ((date.getDate() + date.getMonth() - data?.dueDate) ).toString() as string,
		//     //     dateColor: "bg-red-500",
		//     //     assignees: 4,
		//     // }

		//     const result = [...prev]
		//     return result
		// })
	}
	return (
		<div>
			<h2 className="text-[18px] md:text-[36px] font-header text-border md:mb-6">
				Add Task
			</h2>
			<hr className="border-b border-black/[60%] mb-9" />

			<form
				onSubmit={handleSubmit}
				className="flex flex-col gap-4 md:gap-20 space-y-4"
			>
				<div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between ">
					<Input label={"Title"} name={"title"} />

					<Input label={"Assign to"} name={"assignTo"} />
				</div>

				<div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between">
					<Input label={"Description"} name={"description"} />
					<Input label={"Due date"} name={"dueDate"} />
				</div>

				<div className="flex justify-end">
					<button
						type="submit"
						className="mt-4 rounded-full border border-brown-800 text-brown-800 font-header shadow-add-task border-border/[40%] bg-background-100 px-8  text-border  md:w-[178px] md:h-[52px] hover:bg-brown-100 transition text-[16px] md:text-[32px] "
					>
						Add
					</button>
				</div>
			</form>
		</div>
	);
};

export default Tasks;
