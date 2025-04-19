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
				<ActiveGroupsCard className="lg:row-span-2" />
				<UpcomingSessionsCard />
				<AgendaCard />

				{/* Row 3 */}
				<ContributionsCard className="md:col-span-2" />
			</div>
		</section>
	);
};

export default DashboardHome;

// const Dashboard = () => {
// 	return (
// 		<div className="flex h-screen bg-background-100">
// 			<DashboardSidebar />
// 			<div className="flex-1 flex flex-col">
// 				<DashboardTopbar />
// 				<main className="flex-1 overflow-y-auto lg:p-8 p-4">
// 					{/* grid for the widgets */}
// 					<section
// 						className="
//           grid gap-6
//           lg:grid-cols-[repeat(3,minmax(0,1fr))]
//           md:grid-cols-2
//           grid-cols-1
//         "
// 					>
// 						{/* Row 1 */}
// 						<CreateJoinCard />
// 						<TasksProgressCard />
// 						<CalendarWidget />
// 						{/* Row 2 */}
// 						<ActiveGroupsCard className="lg:row-span-2" />
// 						<UpcomingSessionsCard />
// 						<AgendaCard />
// 						{/* Row 3 */}
// 						<ContributionsCard className="md:col-span-2" />
// 					</section>
// 				</main>
// 			</div>
// 		</div>
// 	);
// };

// export default Dashboard;
