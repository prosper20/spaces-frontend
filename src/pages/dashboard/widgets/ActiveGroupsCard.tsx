// import { Cube } from "lucide-react";
import React from "react";

export interface Group {
	id: string;
	name: string;
	members: number;
}

interface Props {
	groups?: Group[];
	className?: string;
}

const mockGroups: Group[] = [
	{ id: "1", name: "ThinkTank 101", members: 5 },
	{ id: "2", name: "EduTech Hive", members: 2 },
	{ id: "3", name: "Brainstorm Troop", members: 6 },
	{ id: "4", name: "Project Pioneers", members: 4 },
];

const ActiveGroupsCard: React.FC<Props> = ({
	groups = mockGroups,
	className = "",
}) => (
	<div
		className={`rounded-lg bg-white shadow-sm border border-gray-200 flex flex-col ${className}`}
	>
		<header className="flex items-center justify-between px-6 py-4 border-b">
			<h3 className="text-lg font-semibold">Active Groups</h3>
			<button className="text-xs text-button-100 hover:underline">
				View all
			</button>
		</header>

		<ul className="divide-y divide-gray-100">
			{groups.map((g) => (
				<li key={g.id} className="px-6 py-3 flex items-center gap-3">
					{/* <Cube size={18} className="text-purple-500" /> */}
					<div>
						<p className="font-medium text-sm">{g.name}</p>
						<p className="text-xs text-gray-500">{g.members} members</p>
					</div>
				</li>
			))}
		</ul>
	</div>
);

export default ActiveGroupsCard;
