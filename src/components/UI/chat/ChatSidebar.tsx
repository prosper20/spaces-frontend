import { useEffect, useState } from "react";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import { toast } from "sonner";
import { Search } from "lucide-react";
// import SidebarSkeleton from "./SidebarSkeleton";
import SidebarRow from "./SidebarRow";
import { Conversation } from "../../../types/Message";
import { Link } from "react-router-dom";
// import { useSocket } from "@/contexts/SocketContext";   // enable later for online badges

const ChatSidebar = () => {
	const authHeader = useAuthHeader();
	const [conversations, setConversations] = useState<Conversation[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [refetchFlag, setRefetchFlag] = useState(false);

	useEffect(() => {
		const fetchConversations = async () => {
			setIsLoading(true);
			try {
				const token = authHeader?.split(" ")[1];
				if (!token) {
					toast.error("No auth token found");
					return;
				}

				const res = await fetch(
					`${import.meta.env.VITE_API_URL}/conversations`,
					{
						headers: { Authorization: `Bearer ${token}` },
					}
				);

				if (!res.ok) throw new Error("Failed to fetch conversations");

				const data: Conversation[] = await res.json();
				setConversations(data);
			} catch (err) {
				console.error(err);
				setError("Failed to fetch conversations");
			} finally {
				setIsLoading(false);
			}
		};

		fetchConversations();
	}, [authHeader, refetchFlag]);

	const refetch = () => setRefetchFlag((p) => !p);

	return (
		// <aside className="basis-[18%] min-w-[218px] bg-muted border-r">
		// 	<h1 className="mt-[70px] text-center text-2xl font-bold">
		// 		Conversations
		// 	</h1>
		// 	<hr className="border-border mt-2" />

		// 	{isLoading && conversations.length === 0 && (
		// 		<>
		// 			<SidebarSkeleton />
		// 			<SidebarSkeleton />
		// 			<SidebarSkeleton />
		// 		</>
		// 	)}

		// 	{error && !isLoading && conversations.length === 0 && (
		// 		<div className="mt-[74px] mx-[17px] flex flex-col gap-3 text-[15px] text-red-700">
		// 			<p>{error}</p>
		// 			<button onClick={refetch} className="underline">
		// 				Try again
		// 			</button>
		// 		</div>
		// 	)}

		// 	{conversations.length > 0 ? (
		// 		<>
		// 			<div className="mt-6 px-6 pb-4">
		// 				<Link
		// 					to="/dashboard/groups"
		// 					className="flex w-full items-center justify-center gap-2 text-[16px] font-header2"
		// 				>
		// 					<Search size={18} />
		// 					Browse all groups
		// 				</Link>
		// 			</div>
		// 			<ul className="mt-6 px-3 space-y-3 overflow-y-auto h-[calc(100vh-150px)]">
		// 				{conversations.map((c) => (
		// 					<SidebarRow key={c.id} conversation={c} />
		// 				))}
		// 			</ul>
		// 		</>
		// 	) : (
		// 		<div className="mt-6 px-6 pb-4">
		// 			<button className="flex w-full items-center justify-center gap-2 text-[16px] font-header2">
		// 				<Search size={18} />
		// 				Browse all groups
		// 			</button>
		// 		</div>
		// 	)}
		// </aside>

		<div className=" border/[15%] border-border/[71%] basis-[100%] md:basis-[18%] min-w-[218px] text-border text-center">
			<header className="mt-[70px]">
				<h1 className="text-[28px] font-header1">Groups</h1>
			</header>
			<hr className="border-border mt-2" />

			{isLoading && conversations.length === 0 && (
				<div>
					<h1 className="mt-[74px] mx-[17px] flex flex-col gap-9 mb-[20px] text-[15px]">
						Fetching groups...
					</h1>
				</div>
			)}
			{error && !isLoading && conversations.length === 0 && (
				<div className="mt-[74px] mx-[17px] flex text-red-700 flex-col gap-9 mb-[20px] text-[15px]">
					<h1>{error}</h1>
					<button onClick={refetch}>try again</button>
				</div>
			)}
			{conversations && (
				<ul className="mt-[44px] mx-[17px] flex flex-col gap-9 mb-[50px]">
					{conversations.map((c) => (
						<SidebarRow key={c.id} conversation={c} />
					))}
				</ul>
			)}

			<Link to={""}>
				<div className="flex items-center justify-center gap-8 text-[16px] font-header2 mx-[24px] cursor-pointer">
					<Search size={18} />
					<h1 className="hover:underline">Browse all groups</h1>
				</div>
			</Link>
		</div>
	);
};

export default ChatSidebar;

// import { useSocket } from "@/contexts/SocketContext";

// import { useEffect, useState } from "react";
// import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
// import { toast } from "sonner";
// import SidebarSkeleton from "./SidebarSkeleton";
// import SidebarRow from "./SidebarRow";
// import { Conversation } from "../../../types/Message";

// const ChatSidebar = () => {
// 	//const { data, isLoading } = useGetConversations();
// 	//const { onlineUserIds } = useSocket();

// 	const authHeader = useAuthHeader();
// 	const [conversations, setConversations] = useState<Conversation[]>([]);
// 	const [isLoading, setIsLoading] = useState(false);
// 	const [error, setError] = useState<string | null>(null);
// 	const [refetchFlag, setRefetchFlag] = useState(false);

// 	useEffect(() => {
// 		const fetchConversations = async () => {
// 			setIsLoading(true);
// 			try {
// 				const token = authHeader?.split(" ")[1];
// 				if (!token) {
// 					toast.error("No auth token found");
// 					return;
// 				}

// 				const res = await fetch(
// 					`${import.meta.env.VITE_API_URL}/conversations`,
// 					{
// 						headers: { Authorization: `Bearer ${token}` },
// 					}
// 				);

// 				if (!res.ok) throw new Error("Failed to fetch conversations");

// 				const data: Conversation[] = await res.json();
// 				setConversations(data);
// 			} catch (err) {
// 				console.error(err);
// 				setError("Failed to fetch conversations");
// 			} finally {
// 				setIsLoading(false);
// 			}
// 		};

// 		fetchConversations();
// 	}, [authHeader, refetchFlag]);

// 	//const refetch = () => setRefetchFlag((p) => !p);

// 	return (
// 		<aside className="basis-[18%] min-w-[218px] bg-muted border-r">
// 			<h1 className="mt-[70px] text-center text-2xl font-bold">Groups</h1>
// 			<hr className="border-border mt-2" />

// 			{isLoading ? (
// 				<>
// 					<SidebarSkeleton />
// 					<SidebarSkeleton />
// 					<SidebarSkeleton />
// 				</>
// 			) : (
// 				<ul className="mt-6 px-3 space-y-3 overflow-y-auto h-[calc(100vh-150px)]">
// 					{conversations?.map((c) => (
// 						<SidebarRow
// 							key={c.id}
// 							conversation={c}
// 							// isOnline={onlineUserIds.includes(c.participantId)}
// 						/>
// 					))}
// 				</ul>
// 			)}
// 		</aside>
// 	);
// };

// export default ChatSidebar;
