const colors = ["#C5BD1B", "#B28B50", "#9747FF", "#E43A6E"];

export function getColorFromInitials(initials: string) {
	if (!initials) return colors[0];

	const firstChar = initials[0].toUpperCase();
	const charCode = firstChar.charCodeAt(0);
	const colorIndex = charCode % colors.length;
	return colors[colorIndex];
}

const tagColors = [
	"bg-active-calendar",
	"bg-primary-button-green",
	"bg-primary-button-yellow",
];

export function getTagColorFromName(name: string) {
	if (!name) return tagColors[0];

	const firstChar = name[0].toUpperCase();
	const charCode = firstChar.charCodeAt(0);
	const colorIndex = charCode % tagColors.length;
	return tagColors[colorIndex];
}

const tagIcons = ["notes.svg", "folder.svg", "chat.svg"];

export function getIconFromTag(tag: string) {
	if (!tag) return tagIcons[0];

	const firstChar = tag[0].toUpperCase();
	const charCode = firstChar.charCodeAt(0);
	const iconIndex = charCode % tagIcons.length;
	return tagIcons[iconIndex];
}
