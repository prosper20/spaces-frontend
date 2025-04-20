interface CardProps {
	className?: string;
	isStroked?: boolean;
	header: string;
	headButton?: boolean;
	buttonText?: string;
	children: React.ReactNode;
}

const Card1: React.FC<CardProps> = ({
	className,
	isStroked,
	header,
	headButton,
	buttonText,
	children,
}) => {
	return (
		<div
			className={`rounded-[8px] bg-background-primary shadow-box-shadow1 flex flex-col ${className}`}
		>
			<header
				className={`flex items-center mt-[32px] justify-between px-[16px] ${isStroked ? "border-b" : ""}`}
			>
				<h3 className="text-[24px] text-text-100 font-header1">{header}</h3>
				{headButton && (
					<button className="text-[12px] text-right font-header1 underline underline-offset-[24.5%] text-lightpink hover:underline">
						{buttonText}
					</button>
				)}
			</header>

			{children}
		</div>
	);
};

export default Card1;
