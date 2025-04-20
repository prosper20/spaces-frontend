const plus = "Plus.svg";

const CreateJoinCard = () => (
	<div className="rounded-[5px] bg-background-primary w-[328px] h-[232px] shadow-box-shadow1 pt-[32px] pr-[31px]">
		<header className="mb-4">
			<h3 className="text-[24px] font-header1 px-[16px] text-text-100 border-b">
				Create / Join Group
			</h3>
		</header>

		<div className="flex justify-end items-end mt-[60px]">
			<button
				aria-label="create or join"
				className="
        w-[82px] h-[82px] self-center rounded-full shadow-joincircle bg-[#E7B2A6]
        text-text-100 hover:bg-[#d89c94] flex justify-center items-center transition
      "
			>
				<img src={plus} alt="image of plus" className="mt-7 w-[40px]" />
			</button>
		</div>
	</div>
);

export default CreateJoinCard;
// On click
// Navigate to: "Create / Join Group";
// Animate: Dissolve;
// animation-timing-function: ease-in-out;
// animation-duration: 700ms;
