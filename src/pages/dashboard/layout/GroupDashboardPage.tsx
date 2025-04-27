import { useNavigate } from "react-router-dom";
import { Info } from "lucide-react";

import ChatGroupCard from "../widgets/ChatGroupCard";
import GroupMeeting from "../widgets/GroupMeeting";
import GroupNotesCard from "../widgets/GroupNotesCard";
import GroupOverviewCard from "../widgets/GroupOverviewCard";
import GroupSessions from "../widgets/GroupSession";
import GroupTasks from "../widgets/GroupTasksCard";

const GroupDashboardPage: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className="flex flex-col gap-[50px] lg:w-[98%]">
			<header className="mt-[30px] sm:mt-[20px] flex items-center justify-between">
				<h1 className="text-[24px] sm:text-[36px] font-header text-text-100">
					Project Pioneers Workspace
				</h1>

				<button
					onClick={() => navigate("info")}
					className="text-primary-500 hover:text-primary-700 transition"
					title="Group Info"
				>
					<Info className="w-10 h-10" />
				</button>
			</header>

			{/* first Grid */}
			<section className="flex flex-col gap-[50px] lg:grid lg:grid-cols-2 lg:gap-[15px]">
				<GroupOverviewCard />
				<GroupTasks />
			</section>

			<ChatGroupCard />

			{/* second Grid */}
			<section className="flex flex-col gap-[50px] lg:grid lg:grid-cols-2 lg:gap-[15px] xl:grid-cols-3">
				<GroupNotesCard className="xl:flex-1" />
				<GroupSessions className="xl:flex-2" />
				<GroupMeeting className="xl:flex-1" />
			</section>
		</div>
	);
};
export default GroupDashboardPage;
