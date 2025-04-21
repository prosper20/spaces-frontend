import React from "react";

/* ← import the widgets you already coded */
import CreateJoinCard from "./widgets/CreateJoinCard";
import TasksProgressCard from "./widgets/TasksProgressCard";
import CalendarWidget from "./widgets/CalendarWidget";
import ActiveGroupsCard from "./widgets/ActiveGroupsCard";
import UpcomingSessionsCard from "./widgets/UpcomingSessionsCard";
import AgendaCard from "./widgets/AgendaCard";
import ContributionsCard from "./widgets/ContributionsCard";

const DashboardHome: React.FC = () => {
	/** You can fetch data for the cards with React‑Query hooks here */

	return (
		<section className="space-y-8">
			{/* ───────────── Greeting header ───────────── */}
			<header>
				<h1 className="text-[36px] font-header text-text-100">Welcome Back,</h1>
				<p className="font-header1 text-[24px] text-text-100/[71%]">
					Darlene Robertson
				</p>
			</header>

			{/* ───────────── Cards grid ───────────── */}
			<div
				className="
          grid gap-6
          lg:grid-cols-[repeat(3,minmax(0,1fr))]
          md:grid-cols-2
          grid-cols-1
        "
			>
				{/* Row 1 */}
				<CreateJoinCard />
				<TasksProgressCard />
				<CalendarWidget />

				{/* Row 2 */}
				<ActiveGroupsCard />
				<UpcomingSessionsCard />
				<AgendaCard />

				{/* Row 3 */}
				<ContributionsCard />
			</div>
		</section>
	);
};

export default DashboardHome;
