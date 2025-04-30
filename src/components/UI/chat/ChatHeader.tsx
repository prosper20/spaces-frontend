import { NavLink, useParams } from "react-router-dom";
//import { useConversationMeta } from "@/hooks/useConversations";

/**  Shows conversation title and the two tabs  */
const ChatHeader = () => {
	const { conversationId } = useParams();
	//const { data: meta } = useConversationMeta(conversationId || "");

	// • When no conversation is selected (route `/chat`) simply render nothing
	//if (!conversationId) return null;

	return (
		<header className="border-b px-8">
			{/* <h2 className="text-[28px] my-4 font-header1">{meta?.name}</h2> */}
			<h2 className="text-[28px] my-4 font-header1">Project Pioneers</h2>
			<nav className="flex gap-8 text-[24px] font-header2">
				<NavLink end to={`/dashboard/chat/${conversationId}`}>
					Messages
				</NavLink>
				<NavLink to={`/dashboard/chat/${conversationId}/files`}>Files</NavLink>
			</nav>
		</header>
	);
};

export default ChatHeader;
