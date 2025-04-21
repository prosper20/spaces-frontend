interface DetailsBarProp {
	className?: string;
	children: React.ReactNode;
}

const DashboardDetailsBar: React.FC<DetailsBarProp> = ({
	children,
	className,
}) => {
	return (
		<div
			className={`w-[392px] h-[85vh] pl-[17px] pr-[18px] pt-[168px] pb-[23px] shadow-right-sidebar overflow-x-hidden top-[100px] fixed right-0 ${className}`}
		>
			{children}
		</div>
	);
};

export default DashboardDetailsBar;
