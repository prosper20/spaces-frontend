import {
	Navigate,
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import { lazy, Suspense } from "react";

import Login from "./pages/auth/Login";
import GlobalLayout from "./components/layout/GlobalLayout";
import Signup from "./pages/auth/Signup";
import Welcome from "./pages/auth/Welcome.tsx";
import Verification from "./pages/auth/Verification.tsx";
import { verifyOtpAction } from "./utils/url.ts";
import EmailSuccess from "./pages/EmailSuccess.tsx";
import CreateGroupPage from "./pages/dashboard/layout/CreateGroupPage.tsx";
import GroupDashboardPage from "./pages/dashboard/layout/GroupDashboardPage.tsx";
import GroupInfoPage from "./pages/dashboard/layout/GroupInfoPage.tsx";
import GroupsListPage from "./pages/dashboard/layout/GroupsListPage.tsx";
// import { Message } from "iconsax-react";
// import { Files } from "lucide-react";
// import ChatMessages from "./components/ChatMessages.tsx";
// import { groupedMessages } from "./pages/dashboard/Chat";
import ChatSplash from "./components/UI/chat/ChatSplash.tsx";
import ChatLayout from "./components/UI/chat/ChatLayout.tsx";
import ChatFiles from "./components/UI/chat/ChatFiles.tsx";
import ChatRoom from "./components/UI/chat/ChatRoom.tsx";
import ChatMessages from "./components/UI/chat/ChatMessages.tsx";

/* dashboard pages */
const DashboardHome = lazy(() => import("./pages/dashboard/Dashboard"));
const TasksPage = lazy(() => import("./pages/dashboard/Tasks"));
const SchedulePage = lazy(() => import("./pages/dashboard/Schedule"));
// const ChatPage = lazy(() => import("./pages/dashboard/Chat"));
const FilesPage = lazy(() => import("./pages/dashboard/Files"));
const SettingsPage = lazy(() => import("./pages/dashboard/Settings"));
const OngoingSession = lazy(() => import("./pages/OngoingSession.tsx"));
const ProfilePage = lazy(() => import("./pages/ProfilePage.tsx"));

const router = createBrowserRouter([
	{
		// {/* Top‑bar, Sidebar, BottomNav, <Outlet/> */}
		element: (
			// <RequireAuth>
			<GlobalLayout />
			// </RequireAuth>
		),

		children: [
			// • /dashboard (home overview – the screenshot)
			{
				path: "/dashboard",
				element: (
					<Suspense fallback={null}>
						<DashboardHome />
					</Suspense>
				),
			},

			// • /dashboard/groups
			{
				path: "/dashboard/groups",
				children: [
					{
						index: true,
						element: (
							<Suspense fallback={null}>
								<GroupsListPage />{" "}
							</Suspense>
						),
					},
					{
						path: "create",
						element: (
							<Suspense fallback={null}>
								<CreateGroupPage />
							</Suspense>
						),
					},
					{
						path: ":groupId",
						children: [
							{
								index: true,
								element: (
									<Suspense fallback={null}>
										<GroupDashboardPage />{" "}
									</Suspense>
								),
							},
							{
								path: "info",
								element: (
									<Suspense fallback={null}>
										<GroupInfoPage />{" "}
									</Suspense>
								),
							},
						],
					},
				],
			},

			// • /dashboard/tasks
			{
				path: "/dashboard/tasks",
				element: (
					<Suspense fallback={null}>
						<TasksPage />
					</Suspense>
				),
			},

			// • /dashboard/schedule
			{
				path: "/dashboard/schedule",
				element: (
					<Suspense fallback={null}>
						<SchedulePage />
					</Suspense>
				),
			},

			// • /dashboard/chat
			// {
			// 	path: "/dashboard/chat",
			// 	element: (
			// 		<Suspense fallback={null}>
			// 			<ChatPage />
			// 		</Suspense>
			// 	),
			// 	children: [
			// 		{
			// 			index: true,
			// 			element: (
			// 				<div className="flex justify-center pr-[300px] text-border items-center h-[70vh]">
			// 					<Message size={100} />
			// 					<h1 className="text-[36px]">Start Chatting</h1>
			// 				</div>
			// 			),
			// 		},
			// 		{
			// 			path: "/dashboard/chat/files",
			// 			element: (
			// 				<div className="flex justify-center pr-[300px] text-border items-center h-[70vh]">
			// 					<Files size={100} />
			// 					<h1 className="text-[36px]">Files</h1>
			// 				</div>
			// 			),
			// 		},
			// 		{
			// 			path: "/dashboard/chat/group/:groupName",
			// 			element: <ChatMessages groupedMessages={groupedMessages} />,
			// 		},
			// 		{
			// 			path: "/dashboard/chat/messages",
			// 			element: <ChatMessages groupedMessages={groupedMessages} />,
			// 		},
			// 	],
			// },

			// {
			// 	path: "/dashboard/chat",
			// 	element: <ChatLayout />,
			// 	children: [
			// 		{ index: true, element: <ChatSplash /> },

			// 		{
			// 			path: ":conversationId",
			// 			element: <ChatRoom />,
			// 			children: [
			// 				{ index: true, element: <ChatMessages /> },
			// 				{ path: "files", element: <ChatFiles /> },
			// 			],
			// 		},
			// 	],
			// },

			{
				path: "/dashboard/chat",
				element: <ChatLayout />,
				children: [
					{
						index: true,
						element: (
							<Suspense fallback={null}>
								<ChatSplash />
							</Suspense>
						),
					},
					{
						path: ":conversationId",
						element: (
							<Suspense fallback={null}>
								<ChatRoom />
							</Suspense>
						),
						children: [
							{
								index: true,
								element: (
									<Suspense fallback={null}>
										<ChatMessages />
									</Suspense>
								),
							},
							{
								path: "files",
								element: (
									<Suspense fallback={null}>
										<ChatFiles />
									</Suspense>
								),
							},
						],
					},
				],
			},

			// • /dashboard/files
			{
				path: "/dashboard/files",
				element: (
					<Suspense fallback={null}>
						<FilesPage />
					</Suspense>
				),
			},

			// • /dashboard/profile
			{
				path: "/dashboard/profile",
				element: (
					<Suspense fallback={null}>
						<ProfilePage />
					</Suspense>
				),
			},

			// • /dashboard/settings
			{
				path: "/dashboard/settings",
				element: (
					<Suspense fallback={null}>
						<SettingsPage />
					</Suspense>
				),
			},

			/* Redirect bare slash → /dashboard */
			{
				path: "/",
				element: <Navigate to="/dashboard" replace />,
			},
			{
				path: "/dashboard/schedule/ongoing-session",
				element: (
					<Suspense fallback={null}>
						<OngoingSession />
					</Suspense>
				),
			},
		],
	},

	// ▸ 404  ────────────────────────────────────────────────────────
	{
		path: "*",
		element: <h1 className="p-8 text-center text-2xl">404 – Page not found</h1>,
	},
	{
		path: "/welcome",
		element: <Welcome />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/signup",
		element: <Signup />,
	},
	{
		path: "/verify",
		element: <Verification />,
		action: verifyOtpAction,
	},
	{
		path: "/otpSuccess",
		element: <EmailSuccess />,
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
