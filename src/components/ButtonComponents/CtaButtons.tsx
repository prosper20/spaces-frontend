interface CtaButton1Prop {
	children: React.ReactNode;
}

const CtaButton1: React.FC<CtaButton1Prop> = ({ children }) => {
	return (
		<button className="text-[12px] bg-lightpink w-[59px] h-[20px] font-header1  text-gray-400 rounded-md hover:opacity-90">
			{children}
		</button>
	);
};

export default CtaButton1;

interface CtaButton2Prop {
	className?: string;
	children: React.ReactNode;
}

export const CtaButton2: React.FC<CtaButton2Prop> = ({
	className,
	children,
}) => {
	return (
		<button
			className={`w-[98px] h-[27px] text-[14px] font-header1 text-white text-center rounded-[10px] ${className}`}
		>
			{children}
		</button>
	);
};
