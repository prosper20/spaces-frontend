import { AlertTriangle, Clock, HelpCircle } from "lucide-react";
// components/Card.tsx
import React from "react";

interface CardProps {
	header: string;
	children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ header, children }) => {
	return (
		<div className="bg-white rounded-lg shadow-md border border-blue-500">
			<div className="px-4 py-2 bg-blue-100 text-blue-800 font-semibold rounded-t-lg">
				{header}
			</div>
			<div className="p-4">{children}</div>
		</div>
	);
};

// components/ListItem.tsx

interface ListItemProps {
	title: string;
	description?: string;
	icon?: React.ReactNode;
}

export const ListItem: React.FC<ListItemProps> = ({
	title,
	description,
	icon,
}) => {
	return (
		<div className="flex items-start space-x-3">
			{icon && <div className="flex-shrink-0">{icon}</div>}
			<div>
				<p className="text-lg font-medium text-gray-900">{title}</p>
				{description && <p className="text-sm text-gray-500">{description}</p>}
			</div>
		</div>
	);
};

// pages/index.tsx (example usage)

const Home = () => {
	return (
		<div className="container mx-auto p-4">
			<Card header="Data Preprocessing Review">
				<div>
					<ListItem
						title="Decision"
						description="All missing categorical values will be filled using mode imputation"
						icon={<HelpCircle className="h-5 w-5 text-yellow-500" />}
					/>
					<ListItem
						title="Deadline"
						description="Submit cleaned dataset by March 30, 2025"
						icon={<Clock className="h-5 w-5 text-red-500" />}
					/>
					<ListItem
						title="Issues"
						description="Git merge conflicts arose during dataset versioning."
						icon={<AlertTriangle className="h-5 w-5 text-red-600" />}
					/>
				</div>
			</Card>
		</div>
	);
};

export default Home;
