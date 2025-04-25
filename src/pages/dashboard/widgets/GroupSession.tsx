import { Card2, Card3 } from "../../../components/UI/Input/Card1";
import addButton from "../../../assets/images/button.svg";
import img1 from "../../../assets/images/vscode-icons_folder-type-model.svg";
import img2 from "../../../assets/images/fluent-color_chat-bubbles-question-16.svg";

interface Sessions {
	id: number;
	img: string;
	alt: string;
	title: string;
	time: string;
}

interface Props {
	items?: Sessions[];
	className?: string;
}

const Sessions: Sessions[] = [
	{
		id: 1,
		img: img1,
		alt: "image of mtj",
		title: "Model Training Jam",
		time: "5 days 6hrs",
	},
	{
		id: 2,
		img: img2,
		alt: "image of q&a",
		title: "Q&A with Industry Mentor",
		time: "8 days 2hrs",
	},
];

const GroupSessions: React.FC<Props> = ({ className, items = Sessions }) => {
	return (
		<Card3
			img={addButton}
			alt={"image of addButton"}
			header={"Sessions"}
			className={`flex flex-col gap-[40px]${className}`}
			style={{ paddingLeft: "20px" }}
			headButton
		>
			{items.map((item) => {
				return (
					<Card2
						key={item.id}
						className="mx-[20px] sm:mx-[32px] px-[28px] py-[10px] mt-[23px] sm:mt-0 rounded-[10px] mb-[30px]"
					>
						<div className="flex items-center justify-left gap-[27px] flex-wrap">
							<img src={item.img} alt={item.alt} />
							<div className="font-header3">
								<h1 className="text-[20px] text-text-100">{item.title}</h1>
								<p className="text-[15px] text-text-100/[48%]">{item.time}</p>
							</div>
						</div>
					</Card2>
				);
			})}
		</Card3>
	);
};

export default GroupSessions;
