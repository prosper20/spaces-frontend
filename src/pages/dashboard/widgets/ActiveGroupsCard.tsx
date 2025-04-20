import { Box } from "lucide-react";

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

const users = "Vector.svg";

const ActiveGroupsCard: React.FC<Props> = ({
	groups = mockGroups,
	className = "",
}) => (
	<div
		className={`rounded-[8px] bg-background-primary flex flex-col ${className}`}
	>
		<header className="flex items-center mt-[32px] justify-between px-8 border-b">
			<h3 className="text-[24px] text-text-100 font-header1">Active Groups</h3>
		</header>
		<button className="text-[14px] text-right px-[25px] mt-[24px] font-header1 underline underline-offset-[24.5%] text-lightpink hover:underline">
			View all
		</button>
		<ul className="px-8 flex flex-col gap-[22px] mt-[17px]">
			{groups.map((g) => (
				<li
					key={g.id}
					className="shadow-box-shadow2 h-[62px] pl-[13px] py-[10px] text-[#747373] flex items-center gap-[25px] rounded-[5px]"
				>
					<div className="w-[48px] h-[40px] bg-cubepink place-content-center place-items-center rounded-[5px]">
						<Box size={38} strokeWidth={0.7} className="text-purple-500" />
					</div>
					<div className="font-header1">
						<p className="text-[16px] mb-[4px]">{g.name}</p>
						<div className="flex items-center gap-[6px]">
							<img
								src={users}
								width={16}
								height={16}
								className="mt-[-3px]"
								alt="User Icon"
							/>
							<p className="text-[14px]">{g.members} members</p>
						</div>
					</div>
				</li>
			))}
		</ul>
	</div>
);

export default ActiveGroupsCard;
