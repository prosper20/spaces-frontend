// src/components/layout/DashboardTopbar.tsx
import React, { useState } from "react";
import { Menu, Search, Bell } from "lucide-react";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";

import userAvatar from "../../assets/user-images/default-avatar-photo.jpg";
import { Shadow2 } from "../UI/Input/Shadows";
import { Link } from "react-router-dom";

/* Props ------------------------------------------------------------------ */
interface DashboardTopbarProps {
	/** Opens the mobile sidebar drawer */
	onHamburgerClick: () => void;
}

const DashboardTopbar: React.FC<DashboardTopbarProps> = ({
	onHamburgerClick,
}) => {
	const authUser: {
		id: string;
		fullName: string;
		email: string;
		profilePicture: string;
	} | null = useAuthUser();

	const [searchTerm, setSearchTerm] = useState<string>("");

	function handleClearSearch() {
		setSearchTerm("");
	}
	return (
		<header
			className="
        sticky top-0 z-30 bg-background-100
        lg:place-content-center lg:place-items-end
		lg:block
		xxl:place-items-start
        h-[98px] 
		border-b-primary-button-100
		border-b-[1px]
		lg:px-[62px]
		px-[10px]
		flex
		w-full
		justify-between
		max-sw:h-[75px]
      "
		>
			<div
				className="
         bg-background-100
        flex items-center gap-[104px]
		xxl:w-full  justify-between lg:w-[659px] w-full max-sw:h-[74px]
        
      "
			>
				{/* ───── Hamburger (mobile only) ──────────────────────────── */}
				<button
					onClick={onHamburgerClick}
					className="lg:hidden p-2 rounded-md hover:bg-black/5 focus:outline-none  focus:ring-2 focus:ring-button-100"
					aria-label="Open sidebar"
				>
					<Menu size={35} className="max-sw:w-[27px]" />
				</button>

				{/* ───── Search bar (flex‑grown) ───────────────────────────── */}
				<Shadow2 className="relative mx-auto w-[419px] hidden lg:flex flex-1 h-[53px] !rounded-[10px] border-border border-[1px] shadow-search-bar px-[18px] place-content-center place-items-center xxl:flex-0 xxl:w-[454px]">
					<label htmlFor="topbar-search" className=" w-full">
						<Search
							size={27}
							strokeWidth={2.5}
							className="absolute right-[17px] top-1/2 -translate-y-1/2 text-border"
						/>

						<input
							id="topbar-search"
							type="search"
							onChange={(e) => setSearchTerm(e.target.value)}
							value={searchTerm}
							className="
              w-[92%] pr-4 py-2.5 text-[18px]
              rounded-lg bg-transparent
				focus:outline-none focus:ring-2 focus:ring-transparent
              
            "
						/>
						{searchTerm && ( // Conditionally render the clear button when there's text
							<span
								className="absolute right-[60px] top-1/2 -translate-y-1/2 cursor-pointer text-[16px] text-border hover:text-red-900"
								onClick={handleClearSearch}
							>
								&#x2715; {/* Unicode for a multiplication sign (X) */}
							</span>
						)}
					</label>
				</Shadow2>

				{/* ───── Icons (bell + avatar) ─────────────────────────────── */}
				<div className="flex items-center gap-[32px]">
					{/* notification bell */}
					<button
						className="relative p-2 rounded-md hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-button-100"
						aria-label="Notifications"
					>
						<Bell size={38} className="text-text-100 w-[26px]" />
						{/* red dot */}
						<span className="absolute top-1 right-1 inline-block w-2 h-2 rounded-full bg-red-500" />
					</button>

					{/* user avatar */}
					<Link to={"/dashboard/profile"}>
						<img
							src={
								authUser?.profilePicture.trim() !== ""
									? authUser?.profilePicture
									: userAvatar
							}
							alt="User avatar"
							className="w-[82px] h-[82px] max-sw:w-[50px] max-sw:h-[50px] rounded-full object-cover border border-black/10"
						/>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default DashboardTopbar;
