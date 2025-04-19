import { Plus } from "lucide-react";

const CreateJoinCard = () => (
	<div className="rounded-lg bg-white shadow-sm border border-gray-200 p-6 flex flex-col">
		<h3 className="text-lg font-semibold mb-4">Create / Join Group</h3>

		<button
			aria-label="create or join"
			className="
        w-14 h-14 self-center rounded-full bg-[#E7B2A6]
        text-text-100 flex items-center justify-center
        hover:bg-[#d89c94] transition
      "
		>
			<Plus size={28} />
		</button>
	</div>
);

export default CreateJoinCard;
