import React from "react";
import { CtaButton2 } from "../../../components/ButtonComponents/CtaButtons";
import { Shadow2 } from "../../../components/UI/Input/Shadows";

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
	Design: "bg-active-calendar",
	AI: "bg-primary-button-green",
	Cloud: "bg-primary-button-yellow",
};

const AgendaCard: React.FC<Props> = ({ items = sample }) => (
	<div>
		<h3 className="text-[14px] font-header1 text-text-100 mb-[32px]">
			Agenda for the day
		</h3>

		<ul className="flex flex-col gap-[25px]">
			{items.map((item) => (
				<Shadow2
					key={item.id}
					className="bg-background-primary !shadow-agenda-shadow flex w-full h-[72px] !rounded-[15px] px-[11px] py-[10px] gap-[19px]"
				>
					<div>
						<CtaButton2 className={tagColor[item.tag]}> {item.tag}</CtaButton2>
					</div>
					<div>
						<p className="text-[16px] font-header1 text-text-100">
							{item.title}
						</p>
						<p className="text-[12px] font-header1 text-gray-600/[52%] mt-[3px]">
							{new Date(item.datetime).toLocaleString("en", {
								month: "short",
								day: "numeric",
								year: "numeric",
								hour: "2-digit",
								minute: "2-digit",
							})}
						</p>
					</div>
				</Shadow2>
			))}
		</ul>
	</div>
);

export default AgendaCard;
