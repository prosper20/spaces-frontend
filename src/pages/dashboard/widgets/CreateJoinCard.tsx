import Card1 from "../../../components/Card1";

const plus = "Plus.svg";

const CreateJoinCard = () => (
	<Card1
		header={"Create / Join Group"}
		className="w-[328px] h-[232px]"
		isStroked
	>
		<div className="flex justify-end items-end mt-[60px] pr-[31px]">
			<button
				aria-label="create or join"
				className="
        w-[82px] h-[82px] self-center rounded-full shadow-joincircle bg-[#E7B2A6]
        text-text-100 hover:bg-[#d89c94] flex justify-center items-center ease-in-out duration-700 transition
      "
			>
				<img src={plus} alt="image of plus" className="mt-6 w-[40px]" />
			</button>
		</div>
	</Card1>
);

export default CreateJoinCard;
