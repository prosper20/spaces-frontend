// src/components/layout/DashboardSidebar.tsx
import React from "react";
import { NavLink } from "react-router-dom";
import {
	Home2,
	People,
	TaskSquare,
	Calendar,
	Message,
	Folder2,
	Setting2,
	LogoutCurve,
	IconProps,
} from "iconsax-react";
import Logo from "../../assets/Logo/logo.svg";

/* ────────────────────────────────────────────────────────── */
/* Helpers                                                   */
/* ────────────────────────────────────────────────────────── */

interface SidebarLink {
	to: string;
	label: string;
	icon: React.FC<IconProps>;
}

const MAIN_LINKS: SidebarLink[] = [
	{ to: "/dashboard", label: "Dashboard", icon: Home2 },
	{ to: "/dashboard/groups", label: "Groups", icon: People },
	{ to: "/dashboard/tasks", label: "Tasks", icon: TaskSquare },
	{ to: "/dashboard/schedule", label: "Schedule", icon: Calendar },
	{ to: "/dashboard/chat", label: "Chat", icon: Message },
	{ to: "/dashboard/files", label: "Files", icon: Folder2 },
];

const SECONDARY_LINKS: SidebarLink[] = [
	{ to: "/dashboard/settings", label: "Settings", icon: Setting2 },
	{ to: "/welcome", label: "Logout", icon: LogoutCurve },
];

/* ────────────────────────────────────────────────────────── */
/* Component                                                 */
/* ────────────────────────────────────────────────────────── */

type Props = {
	/** Extra classes (e.g. "hidden lg:block") injected by parent */
	className?: string;
	/** Optional click handler (useful for closing mobile drawer) */
	onLinkClick?: () => void;
};

const DashboardSidebar: React.FC<Props> = ({ className = "", onLinkClick }) => {
	const baseLinkClasses =
		"flex items-center gap-[16px] pl-[66px] pt-[13px] pb-[23px] h-[72px] rounded-tr-[10px] text-[24px] text-border font-header2 transition";

	return (
		<aside
			className={`
        bg-sidebar-200 text-text-100 flex flex-col
        w-[320px] lg:w-[280px] shrink-0 h-full
        ${className}
      `}
		>
			{/* Logo block */}
			<div className="flex items-center gap-[16px] h-[60px] px-[26px] mt-[38px]">
				<img src={Logo} className="w-[56px] h-[56px]" alt="Spaces logo" />
				<span className="text-[40px] text-text-100 font-header tracking-wide">
					SPACES
				</span>
			</div>

			<div className="flex flex-col h-[85%]">
				{/* Navigation */}
				<nav className="flex-1 justify-start overflow-y-auto mt-[72px] space-y-2">
					{MAIN_LINKS.map(({ to, label, icon: Icon }) => (
						<NavLink
							key={to}
							to={to}
							end={to === "/dashboard"}
							className={({ isActive }) =>
								[
									baseLinkClasses,
									isActive ? "bg-background-100" : "hover:bg-background-100/40",
								].join(" ")
							}
							onClick={onLinkClick}
						>
							<Icon size={20} variant="Outline" />
							{label}
						</NavLink>
					))}
				</nav>

				{/* Bottom section */}
				<div className="pb-6 space-y-2 justify-end">
					{SECONDARY_LINKS.map(({ to, label, icon: Icon }) => (
						<NavLink
							key={to}
							to={to}
							className={({ isActive }) =>
								[
									baseLinkClasses,
									isActive
										? "bg-background-100 "
										: "hover:bg-background-100/40",
								].join(" ")
							}
							onClick={onLinkClick}
						>
							<Icon size={20} variant="Outline" />
							{label}
						</NavLink>
					))}
				</div>
			</div>
		</aside>
	);
};

export default DashboardSidebar;
