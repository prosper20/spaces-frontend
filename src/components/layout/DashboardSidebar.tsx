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
		"flex items-center gap-3 px-6 py-3 rounded-lg text-sm font-medium transition";

	return (
		<aside
			className={`
        bg-[#B28B50] text-text-100 flex flex-col
        w-64 lg:w-[220px] shrink-0 h-full
        ${className}
      `}
		>
			{/* Logo block */}
			<div className="flex items-center gap-2 h-20 pl-6 pr-4">
				<img src={Logo} className="w-7 h-7" alt="Spaces logo" />
				<span className="text-xl font-extrabold tracking-wide">SPACES</span>
			</div>

			{/* Navigation */}
			<nav className="flex-1 overflow-y-auto mt-4 space-y-2">
				{MAIN_LINKS.map(({ to, label, icon: Icon }) => (
					<NavLink
						key={to}
						to={to}
						className={({ isActive }) =>
							[
								baseLinkClasses,
								isActive
									? "bg-background-100/60 font-semibold"
									: "hover:bg-background-100/40",
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
			<div className="pb-6 space-y-2">
				{SECONDARY_LINKS.map(({ to, label, icon: Icon }) => (
					<NavLink
						key={to}
						to={to}
						className={({ isActive }) =>
							[
								baseLinkClasses,
								isActive
									? "bg-background-100/60 font-semibold"
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
		</aside>
	);
};

export default DashboardSidebar;
