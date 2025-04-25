import { CtaButton3 } from "../../../components/ButtonComponents/CtaButtons";
import { Card2 } from "../../../components/UI/Input/Card1";

interface Props {
	className?: string;
}

const ChatGroupCard: React.FC<Props> = ({ className }) => {
	return (
		<Card2
			className={`!rounded-[8px] px-[22px] sm:px-[26px] py-[16px] !bg-background-primary ${className}`}
		>
			<p className="text-[24px] mb-[12px] sm:mb-2 sm:text-[30px] px-[32px] font-header1 text-text-100">
				Chats
			</p>

			<Card2 className="!rounded-[8px] py-[5px] px-[10px] sm:px-[38px] mb-[12px] sm:mb-0">
				<div className="flex justify-between items-center flex-wrap gap-[20px] py-[10px] sm:py-0">
					<p className="text-[18px] font-header3 text-text-100 italic ">
						Sam just shared the training set
					</p>
					<CtaButton3 className="px-[10%] text-[18px] sm:text-[20px] text-wrap">
						View Message
					</CtaButton3>
				</div>
			</Card2>
		</Card2>
	);
};

export default ChatGroupCard;
