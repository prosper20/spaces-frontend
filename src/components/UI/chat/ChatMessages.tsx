// import { useOutletContext } from "react-router-dom";
import { format } from "date-fns";
import { Paperclip, SendHorizontal, Files, Download } from "lucide-react";
import { Message as MessageIcon } from "iconsax-react";
import { groupMessagesByDate } from "../../../utils/utilities";
import { Message } from "../../../types/Message";

export const dummyMessages: Message[] = [
	{
		id: "m1",
		created_at: "2025-04-28T09:00:00Z",
		message: "Morning team! Stand-up at 10 AM.",
		author: {
			id: "u1",
			fullName: "Courtney Henry",
			profile_picture: "https://randomuser.me/api/portraits/women/1.jpg",
			role: "STUDENT",
		},
		isEdited: false,
		files: [],
	},
	{
		id: "m2",
		created_at: "2025-04-28T11:15:00Z",
		message: "Uploading the cleaned dataset all.xlsx ⬆",
		author: {
			id: "u2",
			fullName: "Wade Warren",
			profile_picture: "https://randomuser.me/api/portraits/men/2.jpg",
			role: "STUDENT",
		},
		isEdited: false,
		files: [
			{
				name: "cleaned-dataset.xlsx",
				size: 1_572_864, // 1.5 MB
				url: "#",
			},
		],
	},
	{
		id: "m3",
		created_at: "2025-04-28T14:30:00Z",
		message: "Don’t forget your mid-project report, please.",
		author: {
			id: "u3",
			fullName: "Floyd Miles",
			profile_picture: "https://randomuser.me/api/portraits/men/3.jpg",
			role: "SUPERVISOR",
		},
		isEdited: true,
		files: [],
	},
	{
		id: "m4",
		created_at: "2025-04-29T08:07:00Z",
		message: "Joy pinned a white-paper.pdf",
		type: "info",
		author: null,
	},
	{
		id: "m5",
		created_at: "2025-04-29T14:45:00Z",
		message: "Here’s the draft ER-diagram for review.",
		author: {
			id: "u4",
			fullName: "Annette Black",
			profile_picture: "https://randomuser.me/api/portraits/women/4.jpg",
			role: "STUDENT",
		},
		isEdited: false,
		files: [],
	},
];

export default function ChatMessages() {
	//const { conversationId } = useOutletContext<{ conversationId: string }>();

	const groupedMessages = groupMessagesByDate(dummyMessages);

	// const { data, fetchNextPage } = useGetMessagesInfinite(conversationId, 50);
	// const groupedMessages = useMemo(
	// 	() => groupMessagesByDate(data?.pages.flat() ?? []),
	// 	[data]
	// );

	if (!groupedMessages.length) {
		return (
			<div className="flex h-[70vh] items-center justify-center text-border">
				<MessageIcon size={100} />
				<h1 className="ml-6 text-[36px]">Start Chatting</h1>
			</div>
		);
	}

	return (
		<>
			{/* message list */}
			<div className="h-[calc(100vh-240px)] overflow-y-auto px-8 space-y-6 pb-[90px]">
				{groupedMessages.map((group, i) => (
					<div key={i} className="space-y-4">
						{/* date divider */}
						<div className="my-8 flex items-center gap-2">
							<div className="flex-1 h-[1px] bg-gray-300" />
							<span className="rounded-full border-2 border-bg-gray-300 px-3 py-1 text-[14px] font-semibold text-gray-700 shadow-sm">
								{group.date}
							</span>
							<div className="flex-1 h-[1px] bg-gray-300" />
						</div>

						{/* messages in that date */}
						{group.items.map((msg) => {
							const time = format(
								new Date(msg.created_at),
								"hh:mm a"
							).toLowerCase();

							/* system / info bubble */
							if (msg.type === "info") {
								return (
									<div key={msg.id} className="space-y-1 text-right">
										<div className="text-xs text-gray-500">{time}</div>
										<div className="inline-block text-[18px] text-border/56 shadow-sm">
											{msg.message}
										</div>
									</div>
								);
							}

							/* normal user bubble */
							return (
								<div key={msg.id} className="space-y-1">
									<div className="flex items-start gap-6">
										<img
											src={msg.author.profile_picture}
											alt={msg.author.fullName}
											className="h-[56px] w-[56px] rounded-[16px] object-cover"
										/>

										<div>
											<p className="text-[20px] font-header3 text-border">
												{msg.author.fullName}
												{msg.author.role == "SUPERVISOR" && (
													<span className="ml-2 bg-background-card px-2 py-[1px] text-[12px] rounded-md">
														{msg.author.role}
													</span>
												)}
												<span className="ml-2 text-[14px] font-[300] text-border/56">
													{time}
												</span>
											</p>

											<p className="text-[18px] font-header2 text-border/56">
												{msg.message}
											</p>

											{/* {msg.files && (
												<div className="mt-2 flex w-[306px] items-center gap-3 rounded-[10px] bg-[#e6d8c3] p-3">
													<Files size={45} />
													<div className="flex-1">
														<div className="flex justify-between">
															<p className="text-[20px] font-header1 text-border">
																{msg.file.name}
															</p>
															<Download
																strokeWidth={3}
																className="cursor-pointer self-end text-border"
															/>
														</div>
														<p className="text-[20px] font-header1 text-border/73">
															{msg.file.size}
														</p>
													</div>
												</div>
											)} */}
											{msg.files?.length > 0 && (
												<div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
													{msg.files.map((file) => (
														<div
															key={file.name /* or file.id */}
															className="flex items-center gap-3 rounded-[10px] bg-[#e6d8c3] p-3"
														>
															<Files size={45} />

															<div className="flex-1">
																<div className="flex justify-between">
																	<p className="text-[20px] font-header1 text-border truncate">
																		{file.name}
																	</p>
																	<Download
																		strokeWidth={3}
																		className="cursor-pointer self-end text-border"
																	/>
																</div>

																<p className="text-[20px] font-header1 text-border/73">
																	{file.size}
																</p>
															</div>
														</div>
													))}
												</div>
											)}
										</div>
									</div>
								</div>
							);
						})}
					</div>
				))}
			</div>

			{/* message input */}
			<div className="fixed bottom-0 z-[70] w-full border-t border-gray-300 bg-background-100 pr-[230px] lg:pr-[510px] xxl:pr-[540px] p-4">
				<div className="flex h-[54px] items-center rounded-full bg-[#e6d8c3] px-4 py-2">
					<Paperclip
						size={42}
						className="rotate-[-43deg] rounded-full bg-border/50 p-3 text-border"
					/>
					<input
						type="text"
						placeholder="Type a message"
						className="flex-1 bg-transparent px-4 text-[18px] focus:outline-none"
					/>
					<button>
						<SendHorizontal
							size={42}
							className="rounded-full bg-border/50 p-3 text-border"
						/>
					</button>
				</div>
			</div>
		</>
	);
}
