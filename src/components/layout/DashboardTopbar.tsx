// src/components/layout/DashboardTopbar.tsx
import React from "react";
import { Menu, Search, Bell } from "lucide-react";
import userAvatar from "../../assets/user-images/avatar.png";

/* Props ------------------------------------------------------------------ */
interface DashboardTopbarProps {
	/** Opens the mobile sidebar drawer */
	onHamburgerClick: () => void;
}

const DashboardTopbar: React.FC<DashboardTopbarProps> = ({
	onHamburgerClick,
}) => {
	return (
		<header
			className="
        sticky top-0 z-30 bg-background-100
        flex items-center gap-4
        h-16 px-4 lg:px-8 border-b border-black/5
      "
		>
			{/* ───── Hamburger (mobile only) ───────────────────────────── */}
			<button
				onClick={onHamburgerClick}
				className="lg:hidden p-2 rounded-md hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-button-100"
				aria-label="Open sidebar"
			>
				<Menu size={22} />
			</button>

			{/* ───── Search bar (flex‑grown) ───────────────────────────── */}
			<div className="flex-1 flex justify-center">
				<label
					htmlFor="topbar-search"
					className="relative w-full max-w-lg lg:max-w-xl"
				>
					<Search
						size={18}
						className="absolute left-4 top-1/2 -translate-y-1/2 text-black/50"
					/>

					<input
						id="topbar-search"
						type="search"
						placeholder="Search"
						className="
              w-full pl-12 pr-4 py-2.5
              rounded-lg border border-black/20 bg-white
              text-sm focus:outline-none focus:ring-2 focus:ring-button-100
              placeholder:text-black/40
            "
					/>
				</label>
			</div>

			{/* ───── Icons (bell + avatar) ─────────────────────────────── */}
			<div className="flex items-center gap-4">
				{/* notification bell */}
				<button
					className="relative p-2 rounded-md hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-button-100"
					aria-label="Notifications"
				>
					<Bell size={22} />
					{/* red dot */}
					<span className="absolute top-1 right-1 inline-block w-2 h-2 rounded-full bg-red-500" />
				</button>

				{/* user avatar */}
				<img
					src={userAvatar}
					alt="User avatar"
					className="w-9 h-9 rounded-full object-cover border border-black/10"
				/>
			</div>
		</header>
	);
};

export default DashboardTopbar;
