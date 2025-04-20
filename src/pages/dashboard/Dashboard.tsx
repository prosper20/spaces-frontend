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
				<h1 className="text-[clamp(1.5rem,2vw+1rem,2rem)] font-bold">
					Welcome Back,
				</h1>
				<p className="text-lg font-semibold text-text-100">Darlene Robertson</p>
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
				<ActiveGroupsCard className="lg:row-span-2 shadow-box-shadow1 w-[328px] h-[471px]" />
				<UpcomingSessionsCard />
				<AgendaCard />

				{/* Row 3 */}
				<ContributionsCard className="md:col-span-2" />
			</div>
		</section>
	);
};

export default DashboardHome;
