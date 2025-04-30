export interface FileItem {
	name: string;
	size: number;
	url: string;
}

export interface Author {
	id: string;
	fullName: string;
	profile_picture: string;
	role: "STUDENT" | "SUPERVISOR";
}

export type Message =
	| {
			id: string;
			created_at: string;
			message: string;
			type?: null;
			isEdited: boolean;
			files: FileItem[];
			author: Author;
	  }
	| {
			id: string;
			created_at: string;
			message: string;
			type: "info";
			author: null;
			files?: never;
			isEdited?: never;
	  };

export interface Participant {
	id: string;
	fullName: string;
	profile_picture: string;
}

export interface Conversation {
	id: string;
	title: string;
	groupId: string;
	participants: Participant[];
	lastMessageSent: {
		id: string;
		message: string;
		created_at: string;
	} | null;
	isRead: boolean;
}
