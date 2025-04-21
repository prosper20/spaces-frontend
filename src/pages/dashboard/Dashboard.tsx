import React from "react";

/* ← import the widgets you already coded */
import CreateJoinCard from "./widgets/CreateJoinCard";
import TasksProgressCard from "./widgets/TasksProgressCard";
import CalendarWidget from "./widgets/CalendarWidget";
import ActiveGroupsCard from "./widgets/ActiveGroupsCard";
import UpcomingSessionsCard from "./widgets/UpcomingSessionsCard";
import AgendaCard from "./widgets/AgendaCard";
import ContributionsCard from "./widgets/ContributionsCard";
import DashboardDetailsBar from "../../components/layout/DashboardDetailsBar";

const DashboardHome: React.FC = () => {
	/** You can fetch data for the cards with React‑Query hooks here */

	return (
		<section>
			<DashboardDetailsBar>
				<CalendarWidget className="mb-[48px]" />
				<AgendaCard />
			</DashboardDetailsBar>
			{/* ───────────── Greeting header ───────────── */}
			<div className="space-y-8 mr-[392px]">
				<header>
					<h1 className="text-[36px] font-header text-text-100">
						Welcome Back,
					</h1>
					<p className="font-header1 text-[24px] text-text-100/[71%] mb-[58px]">
						Darlene Robertson
					</p>
				</header>

				{/* ───────────── Cards grid ───────────── */}

				<div
					className="
          grid gap-[24px] gap-y-[43px]
          lg:grid-cols-[repeat(2,minmax(0,1fr))]
          md:grid-cols-2
          grid-cols-1
		
        "
				>
					{/* Row 1 */}
					<CreateJoinCard />
					<TasksProgressCard />

					{/* Row 2 */}
					<ActiveGroupsCard />
					<UpcomingSessionsCard />

					{/* Row 3 */}
					<ContributionsCard />
				</div>
			</div>
		</section>
	);
};

export default DashboardHome;
