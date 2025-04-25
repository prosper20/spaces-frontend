import img1 from "../assets/images/Module Icon.svg";
import groupedAvatar from "../assets/images/Grouped avatars.svg";
export const daysOptions = Array.from({ length: 31 }, (_, i) => i + 1); // 1 to 31
export const yearsOptions = Array.from({ length: 100 }, (_, i) => 2024 - i); // Last 100 years
export const monthsOptions = [
	{ value: "01", label: "January" },
	{ value: "02", label: "February" },
	{ value: "03", label: "March" },
	{ value: "04", label: "April" },
	{ value: "05", label: "May" },
	{ value: "06", label: "June" },
	{ value: "07", label: "July" },
	{ value: "08", label: "August" },
	{ value: "09", label: "September" },
	{ value: "10", label: "October" },
	{ value: "11", label: "November" },
	{ value: "12", label: "December" },
];

export const validateEmail = (email: string) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};

export function validateUrl(str: string): boolean {
	const urlRegex = /^(http|https|ftp|ftps):\/\/[\w.-]+(?:\/[\w .-]*)*\/?$/i;
	return urlRegex.test(str);
}
export const selectedCountry = [
	{ value: "finland", label: "finland" },
	{ value: "usa", label: "usa" },
	{ value: "Qatar", label: "Qatar" },
	{ value: "Niger", label: "Niger" },
	{ value: "Germany", label: "Germany" },
];

export function maskEmail(email: string): string {
	// Split the email into local part and domain
	const [localPart, domain] = email.split("@");

	let visiblePart = "";
	// Always show up to the first 3 characters
	// const visiblePart = localPart.slice(0, 3);
	if (localPart.length >= 3 && localPart.length < 4)
		visiblePart = localPart.slice(0, 2);
	if (localPart.length >= 6 && localPart.length <= 10)
		visiblePart = localPart.slice(0, 3);
	if (localPart.length > 10) visiblePart = localPart.slice(0, 6);

	// Hide the rest with bullet points (minimum 1 bullet)
	const hiddenPart = "•".repeat(Math.max(1, localPart.length - 3));

	// Combine the parts
	return `${visiblePart}${hiddenPart}@${domain}`;
}

export function shortenUrl(url: string, maxLength = 30) {
	if (url.length <= maxLength) {
		return url;
	}

	// Extract the domain
	let domain = url.replace(/^https?:\/\//, "").split("/")[0];

	// If the domain itself is too long, shorten it
	if (domain.length > maxLength - 4) {
		// -4 to account for '...' and at least one character
		domain = domain.substr(0, maxLength - 4);
		return domain + "...";
	}

	// Calculate remaining characters
	const remainingLength = maxLength - domain.length - 3; // -3 for '...'

	// Get the path
	let path = url.replace(/^https?:\/\/[^/]+/, "");

	// Shorten the path
	if (path.length > remainingLength) {
		path = path.substring(0, remainingLength);
	}

	return domain + path + "...";
}

// interface Groups {
//     title: string;
//     img: string;
//     alt: string;
//     description: string;
//     supervisor: string;
//     courses: string[];
//     roles: {
//         name: string;
//         roleplayer: string;
//         desc: string;
//     }[];
//     clarityCall: string;
//     pendingTasks: number;
// }[]

export const group1 = [
	{
		id: "1",
		title: "Module: Machine Learning Fundamentals",
		img: img1,
		alt: "image of brain",
		description:
			"Collaborating to uncover patterns, train models, and build intelligent systems",
		supervisor: "Dr Floyd Miles",
		courses: ["AI", "Python", "Data Science", "ML", "Neutral Net", "Classify"],
		roles: [
			{
				name: "grouplead",
				roleplayer: "Wade warren",
				desc: "Oversees the team, assigns tasks, and ensures project timelines are met",
			},
			{
				name: "Tech starategist",
				roleplayer: "Darlene Robotson",
				desc: "Leads the technical direction—guides model-building, tools, and coding standards",
			},
			{
				name: "Data Curator",
				roleplayer: "Anette Black",
				desc: "finds, cleans, and manages datasets for the team’s ML experiment",
			},
			{
				name: "Note Keeper",
				roleplayer: "Ralph Edwards",
				desc: "Organizes and updates shared notes and meeting summaries.",
			},
			{
				name: "Task Co-ord",
				roleplayer: "Courtney Henry",
				desc: "Tracks task progress and updates the workspace regularly.",
			},
		],
		clarityCall: "Monday, April 14 at 1:00 PM",
		pendingTasks: 3,
		groupedAvatar,
	},
];
