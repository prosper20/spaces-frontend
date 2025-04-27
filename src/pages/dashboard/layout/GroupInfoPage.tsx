import { Card2 } from "../../../components/UI/Input/Card1";
import brainImg from "../../../assets/images/Module Icon.svg";
import userAvatar from "../../../assets/user-images/avatar.png";

const GroupInfoPage = () => {
	const tags = ["AI", "Python", "Data Sci", "ML", "Neural Net", "Classify"];

	const roles = [
		{
			role: "Group lead",
			name: "Wade Warren",
			desc: "Oversees the team, assigns tasks, and ensures project timelines are met.",
		},
		{
			role: "Tech Strategist",
			name: "Darlene Robertson",
			desc: "Leads the technical direction—guides model-building, tools, and coding standards.",
		},
		{
			role: "Data Curator",
			name: "Annette Black",
			desc: "Finds, cleans, and manages datasets for the team's ML experiments.",
		},
		{
			role: "Note Keeper",
			name: "Ralph Edwards",
			desc: "Organizes and updates shared notes and meeting summaries.",
		},
		{
			role: "Task Co-ord.",
			name: "Courtney Henry",
			desc: "Tracks task progress and updates the workspace regularly.",
		},
	];

	return (
		<div className="px-4 py-6 flex flex-col gap-8">
			<h1 className="text-[24px] sm:text-[36px] font-header text-text-100">
				Project Pioneers Workspace
			</h1>

			{/* Module Card */}
			<Card2 className="flex items-center gap-6 p-6 rounded-[8px]">
				<img src={brainImg} alt="Module Icon" className="w-[80px] h-[80px]" />
				<div>
					<p className="text-[18px] text-text-100">Module:</p>
					<h2 className="text-[24px] font-header2 text-text-100">
						Machine Learning Fundamentals
					</h2>
				</div>
			</Card2>

			{/* Members and Supervisor */}
			<div className="flex justify-between items-center">
				<div className="flex -space-x-4">
					{/* Example Avatars */}
					{[1, 2, 3, 4, 5].map((_, i) => (
						<img
							key={i}
							src={userAvatar}
							alt="Member"
							className="w-10 h-10 rounded-full border-2 border-white"
						/>
					))}
				</div>
				<p className="text-text-100 font-header2">Supervisor: Dr Floyd Miles</p>
			</div>

			{/* Group Description */}
			<div>
				<h2 className="font-header2 text-[20px] mb-2 text-text-100">
					Group Description
				</h2>
				<p className="text-[16px] text-text-100/[68%]">
					Collaborating to uncover patterns, train models, and build intelligent
					systems.
				</p>
			</div>

			{/* Tags */}
			<div className="flex flex-wrap gap-2 mt-4">
				{tags.map((tag) => (
					<span
						key={tag}
						className="bg-[#D8C4AA] text-[#5C4033] rounded-lg px-4 py-2 text-sm font-semibold"
					>
						{tag}
					</span>
				))}
			</div>

			{/* Roles Section */}
			<div className="mt-8">
				<h2 className="font-header2 text-[24px] text-text-100 mb-4">Roles</h2>
				<div className="flex flex-col gap-4">
					{roles.map((role) => (
						<div key={role.role} className="flex flex-col gap-1">
							<p className="text-text-100 font-header2 text-[18px]">
								{role.role}
							</p>
							<div className="bg-[#D8C4AA] p-3 rounded-[8px]">
								<h3 className="text-[#5C4033] font-semibold">{role.name}</h3>
								<p className="text-[#5C4033] text-sm">{role.desc}</p>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Quick Stats */}
			<div className="mt-8">
				<h2 className="font-header2 text-[24px] text-text-100 mb-4">
					Quick Stats
				</h2>
				<div className="flex flex-col gap-4">
					<Card2 className="flex justify-between items-center px-4 py-4">
						<div className="flex items-center gap-2">
							<span className="w-3 h-3 bg-pink-500 rounded-full"></span>
							<p className="text-text-100">Clarity call</p>
						</div>
						<p className="text-text-100 text-sm">Monday, April 14 at 1:00 PM</p>
					</Card2>
					<Card2 className="flex justify-between items-center px-4 py-4">
						<div className="flex items-center gap-2">
							<span className="w-3 h-3 bg-pink-500 rounded-full"></span>
							<p className="text-text-100">Pending tasks</p>
						</div>
						<p className="text-text-100 text-sm">3</p>
					</Card2>
				</div>
			</div>
		</div>
	);
};

export default GroupInfoPage;
