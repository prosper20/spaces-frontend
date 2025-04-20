// import { FileText, Image, CornerUpRight } from "lucide-react";
import React from "react";
import Card1 from "../../../components/Card1";

interface Contribution {
	id: string;
	type: "file" | "image" | "reply";
	text: string;
	text2?: string;
}

interface Props {
	items?: Contribution[];
	className?: string;
}

const sampleItems: Contribution[] = [
	{ id: "1", type: "file", text: "Added meeting notes ", text2: '"AI Team"' },
	{
		id: "2",
		type: "image",
		text: "Uploaded logo.png ",
		text2: '"Brand Sprint"',
	},
	{ id: "3", type: "reply", text: "Replied in group chat" },
];

const FileText = "notes.svg";
const Image = "folder.svg";
const CornerUpRight = "chat.svg";

const iconMap = {
	file: FileText,
	image: Image,
	reply: CornerUpRight,
};

const ContributionsCard: React.FC<Props> = ({ items = sampleItems }) => (
	<Card1
		header={"Contributions"}
		className="w-[328px] h-[232px]"
		isStroked
		style={{ fontWeight: "400" }}
	>
		<h1 className="font-header2 text-text-200 text-[16px] px-[16px] mt-1">
			This week
		</h1>
		<ul className="px-6 py-4 space-y-3 text-sm">
			{items.map((c) => {
				const Icon = iconMap[c.type];
				return (
					<>
						<li key={c.id} className="flex items-center gap-3">
							<img src={Icon} className="mt-[2px]" />

							<p className="text-[12px] font-header2 text-text-100">{c.text}</p>
						</li>
						<p className="font-header2 text-text-200 text-[12px] !mt-1 px-[24px]">
							{c.text2}
						</p>
					</>
				);
			})}
		</ul>
	</Card1>
);

export default ContributionsCard;
