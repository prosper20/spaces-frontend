import { FileText, Image, CornerUpRight } from "lucide-react";
import React from "react";

interface Contribution {
	id: string;
	type: "file" | "image" | "reply";
	text: string;
}

interface Props {
	items?: Contribution[];
	className?: string;
}

const sampleItems: Contribution[] = [
	{ id: "1", type: "file", text: 'Added meeting notes "AI Team"' },
	{ id: "2", type: "image", text: 'Uploaded logo.png "Brand Sprint"' },
	{ id: "3", type: "reply", text: "Replied in group chat" },
];

const iconMap = {
	file: FileText,
	image: Image,
	reply: CornerUpRight,
};

const ContributionsCard: React.FC<Props> = ({
	items = sampleItems,
	className = "",
}) => (
	<div
		className={`rounded-lg bg-white shadow-sm border border-gray-200 flex flex-col ${className}`}
	>
		<h3 className="px-6 py-4 text-lg font-semibold border-b">Contributions</h3>
		<ul className="px-6 py-4 space-y-3 text-sm">
			{items.map((c) => {
				const Icon = iconMap[c.type];
				return (
					<li key={c.id} className="flex items-start gap-3">
						<Icon size={16} className="mt-[2px]" />
						<span>{c.text}</span>
					</li>
				);
			})}
		</ul>
	</div>
);

export default ContributionsCard;
