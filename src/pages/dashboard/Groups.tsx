import ChatGroupCard from "./widgets/ChatGroupCard";
import GroupMeeting from "./widgets/GroupMeeting";
import GroupNotesCard from "./widgets/GroupNotesCard";
import GroupOverviewCard from "./widgets/GroupOverviewCard";
import GroupSessions from "./widgets/GroupSession";
import GroupTasks from "./widgets/GroupTasksCard";

const GroupsPage = () => (
	<div className="flex flex-col gap-[50px] lg:w-[98%]">
		<header className="mt-[30px] sm:mt-[20px]">
			<h1 className="text-[24px] sm:text-[36px] font-header text-text-100">
				Project Pioneers Workspace
			</h1>
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
export default GroupsPage;
