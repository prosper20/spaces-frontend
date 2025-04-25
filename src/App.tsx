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

/* dashboard pages */
const DashboardHome = lazy(() => import("./pages/dashboard/Dashboard"));
const GroupsPage = lazy(() => import("./pages/dashboard/Groups"));
const TasksPage = lazy(() => import("./pages/dashboard/Tasks"));
const SchedulePage = lazy(() => import("./pages/dashboard/Schedule"));
const ChatPage = lazy(() => import("./pages/dashboard/Chat"));
const FilesPage = lazy(() => import("./pages/dashboard/Files"));
const SettingsPage = lazy(() => import("./pages/dashboard/Settings"));
const GroupInfo = lazy(() => import("./pages/GroupInfo.tsx"));

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
				element: (
					<Suspense fallback={null}>
						<GroupsPage />
					</Suspense>
				),
			},

			{
				path: "/dashboard/groups/:groups",
				element: (
					<Suspense fallback={null}>
						<GroupInfo></GroupInfo>
					</Suspense>
				),
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
			{
				path: "/dashboard/chat",
				element: (
					<Suspense fallback={null}>
						<ChatPage />
					</Suspense>
				),
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
