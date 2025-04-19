import React from "react";

interface AgendaItem {
	id: string;
	tag: "Design" | "AI" | "Cloud";
	title: string;
	datetime: string; // ISO
}

interface Props {
	items?: AgendaItem[];
}

const sample: AgendaItem[] = [
	{
		id: "1",
		tag: "Design",
		title: "Design Systems",
		datetime: "2025-04-13T09:00:00",
	},
	{
		id: "2",
		tag: "AI",
		title: "Prompt Engineering",
		datetime: "2025-04-13T12:00:00",
	},
	{
		id: "3",
		tag: "Cloud",
		title: "Cloud Architecture",
		datetime: "2025-04-13T14:00:00",
	},
];

const tagColor: Record<AgendaItem["tag"], string> = {
	Design: "bg-pink-600",
	AI: "bg-green-800",
	Cloud: "bg-yellow-500",
};

const AgendaCard: React.FC<Props> = ({ items = sample }) => (
	<div className="rounded-lg bg-white shadow-sm border border-gray-200 flex flex-col">
		<h3 className="px-6 py-4 text-lg font-semibold border-b">
			Agenda for the day
		</h3>
		<ul>
			{items.map((item) => (
				<li key={item.id} className="flex items-center gap-4 px-6 py-3">
					<span
						className={`text-xs text-white px-3 py-1 rounded-full ${tagColor[item.tag]}`}
					>
						{item.tag}
					</span>
					<div>
						<p className="font-medium">{item.title}</p>
						<p className="text-xs text-gray-500">
							{new Date(item.datetime).toLocaleString("en", {
								month: "short",
								day: "numeric",
								year: "numeric",
								hour: "2-digit",
								minute: "2-digit",
							})}
						</p>
					</div>
				</li>
			))}
		</ul>
	</div>
);

export default AgendaCard;
