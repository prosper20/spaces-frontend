import Card1, { Card2 } from "../../../components/UI/Input/Card1";
import brainImg from "../../../assets/images/Module Icon.svg";
import { CtaButton3 } from "../../../components/ButtonComponents/CtaButtons";
import { Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";

interface GroupsProps {
	id: string;
	tag: "AI" | "Python" | "Data Science";
	title: string;
}

interface GroupDetails {
	id: string;
	title: string;
	img: string;
	alt: string;
	details: string;
	index: number;
}

interface Props {
	groupDetails?: GroupDetails[];
	items?: GroupsProps[];
	className?: string;
}

const groupCourse: GroupsProps[] = [
	{
		id: "1",
		tag: "AI",
		title: "AI",
	},
	{
		id: "2",
		tag: "Python",
		title: "Python",
	},
	{
		id: "3",
		tag: "Data Science",
		title: "Data Sci",
	},
];
const groupDetail: GroupDetails[] = [
	{
		id: "1",
		title: "Module: Machine Learning Fundamentals",
		img: brainImg,
		alt: "image of brain",
		details:
			"Collaborating to uncover patterns, train models, and build intelligent systems",
		index: 5,
	},
];

const GroupOverviewCard: React.FC<Props> = ({
	className,
	items = groupCourse,
	groupDetails = groupDetail,
}) => {
	return (
		<Card1
			header={"Group Overview"}
			className={` px-[24px] max-bw:px-[15px] lg:px-[20px] md:px-[64px] py-[25px] ${className}`}
		>
			<Card2 className="py-[29px] px-[19px] md:py-[9px] mt-[9px] rounded-[8px]">
				{groupDetails.map((details) => {
					return (
						<Fragment key={details.id}>
							<div className="flex justify-between items-center gap-[10px] mb-[10px] sm:mb-0 lg:flex-wrap">
								<div className="flex max-bw:flex-wrap items-center lg:flex-wrap">
									<img
										src={details.img}
										alt={details.alt}
										className="w-[73px] h-[73px] "
									/>
									<Link to={`/dashboard/groups/${details.id}`}>
										<p className="w-[100%] sm:w-[319px] text-wrap cursor-pointer hover:underline font-header2 text-[20px] sm:text-[24px] lg:text-[20px] text-text-100">
											{details.title}
										</p>
									</Link>
								</div>
								<p className="text-[20px] md:text-[24px] lg:text-[20px] font-header3">
									{details.index}
								</p>
							</div>
							<p className=" sm:w-[207px] mt-[8px] font-header2 text-[16px] text-text-100/[68%] mb-[30px]">
								{details.details}
							</p>
						</Fragment>
					);
				})}

				<div className="flex gap-[8px] flex-wrap mt-[30px] pb-[37px] md:pb-[17px]">
					{items.map((item) => {
						return (
							<CtaButton3
								key={item.id}
								className="w-[90px] lg:h-[29px] lg:w-[90px] md:w-[137px] md:h-[36px] text-[16px] lg:text-[16px] md:text-[24px]"
							>
								{item.title}
							</CtaButton3>
						);
					})}
				</div>
			</Card2>
		</Card1>
	);
};

export default GroupOverviewCard;
