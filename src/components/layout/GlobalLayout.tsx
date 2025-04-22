import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

import SessionProvider from "../../context/SessionProvider";
import DashboardSidebar from "./DashboardSidebar";
import MobileSidebar from "./MobileSidebar";
import DashboardTopbar from "./DashboardTopbar";

const GlobalLayout: React.FC = () => {
	/* Drawer state for tablets/phones */
	const [drawerOpen, setDrawerOpen] = useState(false);

	return (
		<SessionProvider>
			{/* Root flex contains sidebar + content column */}
			<div className="flex h-screen w-screen bg-background-100 text-text-100 overflow-hidden">
				{/* ─────────────────────────  Sidebar (desktop)  ───────────────────────── */}
				<DashboardSidebar className="hidden lg:block" />

				{/* ─────────────────────────  Drawer sidebar (mobile / md)  ───────────── */}
				<MobileSidebar open={drawerOpen} onClose={() => setDrawerOpen(false)} />

				{/* ─────────────────────────  Right column  ───────────────────────────── */}
				<div className="flex flex-col flex-1">
					{/* Top‑bar gets a hamburger for mobile, search field, icons */}
					<DashboardTopbar onHamburgerClick={() => setDrawerOpen(true)} />

					{/* Scrollable outlet (cards grid lives in each page) */}
					<main className="flex-1 overflow-y-auto m-[13px] lg:ml-[3%] lg:mr-[18px] lg:mt-[21px] lg:mb-[23px]">
						<Outlet />
					</main>
				</div>

				{/* Global toast notifications */}
				<Toaster richColors position="top-right" />
			</div>
		</SessionProvider>
	);
};

export default GlobalLayout;
