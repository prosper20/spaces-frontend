import React from "react";

interface Session {
	id: string;
	date: string; // ISO
	title: string;
	subtitle: string;
}

interface Props {
	sessions?: Session[];
}

const sampleSessions: Session[] = [
	{
		id: "1",
		date: "2025-04-16T11:00:00Z",
		title: "Kickoff & Icebreakers",
		subtitle: "sem 2B | 11:00 AM",
	},
	{
		id: "2",
		date: "2025-04-16T09:00:00Z",
		title: "Coding Jam Session",
		subtitle: "sem 1B | 09:00 AM",
	},
];

const UpcomingSessionsCard: React.FC<Props> = ({
	sessions = sampleSessions,
}) => (
	<div className="rounded-lg bg-white shadow-sm border border-gray-200 flex flex-col">
		<header className="flex items-center justify-between px-6 py-4 border-b">
			<h3 className="text-lg font-semibold">Upcoming Sessions</h3>
			<button className="text-xs text-button-100 hover:underline">
				View all
			</button>
		</header>

		<ul className="divide-y divide-gray-100">
			{sessions.map((s) => (
				<li
					key={s.id}
					className="flex justify-between items-center px-4 py-3 text-sm"
				>
					{/* Date pill */}
					<div className="flex flex-col items-center mr-2">
						<span className="bg-background-100 text-text-100 rounded-t-md px-2 text-[10px]">
							{new Date(s.date).toLocaleString("en", { month: "short" })}
						</span>
						<span className="bg-button-100 text-white rounded-b-md px-2 text-[11px] font-semibold">
							{new Date(s.date).getDate()}
						</span>
					</div>

					<div className="flex-1">
						<p className="font-medium">{s.title}</p>
						<p className="text-xs text-gray-500">{s.subtitle}</p>
					</div>

					<button className="text-xs bg-[#ddb6ad] px-3 py-1 rounded-md hover:opacity-90">
						Join
					</button>
				</li>
			))}
		</ul>
	</div>
);

export default UpcomingSessionsCard;
