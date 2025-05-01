// components/FileList.tsx
import React from "react";
import { Files } from "lucide-react";
import { Link } from "react-router-dom";
import { FileItem } from "../pages/dashboard/ChatFiles";

interface Props {
	fileData: FileItem[];
}

const ChatFilesSection: React.FC<Props> = ({ fileData }) => {
	const getFileIcon = (type: FileItem["type"]) => {
		switch (type) {
			case "pdf":
				return <Files className="h-[64px] w-[64px] text-red-500" />;
			case "csv":
				return <Files className="h-[64px] w-[64px] text-green-500" />;
			case "docx":
				return <Files className="h-[64px] w-[64px] text-blue-500" />;
			case "xlsx":
				return <Files className="h-[64px] w-[64px] text-red-500" />; // Using PDF icon as no specific XLSX icon in lucide at the moment
			default:
				return <Files className="h-[64px] w-[64px] text-gray-500" />;
		}
	};

	return (
		<div className="bg-background-primary py-[22px] rounded-[24px] w-[95%] border border-border/[72%]">
			<ul>
				{fileData.length > 0 ? (
					fileData.map((file, index) => (
						<li
							key={index}
							className={`py-4 px-7 ${index < fileData.length - 1 ? "border-b border-border/[72%]" : ""} flex items-center space-x-3`}
						>
							<div className="flex-shrink-0">{getFileIcon(file.type)}</div>
							<div>
								<p className="text-[24px] hover:underline font-header3 text-gray-800">
									<Link to={""}>{file.name}</Link>
								</p>
								<p className="text-[20px] text-text-100/[77%]">
									Shared by{" "}
									<span className="font-header2 text-[24px]">
										{file.sharedBy}
									</span>{" "}
									on {file.sharedOn}
								</p>
							</div>
						</li>
					))
				) : (
					<h1 className="h-[45vh] flex justify-center items-center text-4xl text-red-600">
						No Files Found!
					</h1>
				)}
			</ul>
		</div>
	);
};

export default ChatFilesSection;
