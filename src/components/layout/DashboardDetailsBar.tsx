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
			className={`w-[392px] h-[85vh] pl-[17px] pr-[18px] pt-[168px] pb-[23px] max-mw:block shadow-right-sidebar max-mm:flex max-mm:w-full max-mm:gap-[24px] max-mm:p-0 max-mm:justify-between max-mm:pr-1 max-mm:h-[30vw]  ${className}`}
		>
			{children}
		</div>
	);
};

export default DashboardDetailsBar;
