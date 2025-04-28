const NotificationSetting: React.FC = () => {
	// State for notification preferences
	// const [notifications, setNotifications] = useState({
	// 	pushNotification: true,
	// 	sessionReminders: true,
	// 	taskDeadlineAlerts: true
	// });
	return (
		<section>
			<h2 className="text-[24px] sm:text-[32px] font-header mb-2 text-gray-800">
				Notification Preferences
			</h2>
			<div className="bg-[#F3D7CA66]/[40%] px-[12px] sm:px-[36px] py-[19px] sm:py-[48px] rounded-tr-[15px] p-4 shadow-profile-info">
				<div className="mb-3">
					<h3 className="text-[24px] sm:text-[32px] font-header3 mb-8 text-text-100">
						Password
					</h3>
				</div>

				<div className="flex flex-col gap-[16px]">
					<div className="flex justify-between items-center">
						<span className="text-[20px] font-[300] text-text-100">
							Push notification
						</span>
						<div className="w-12 h-6 bg-blue-500 rounded-full flex items-center px-0.5">
							<div className="w-5 h-5 bg-white rounded-full ml-auto"></div>
						</div>
					</div>

					<div className="">
						<div className="flex justify-between items-center">
							<span className="text-[20px] font-[300] text-text-100">
								Session Reminders
							</span>
							<div className="w-12 h-6 bg-blue-500 rounded-full flex items-center px-0.5">
								<div className="w-5 h-5 bg-white rounded-full ml-auto"></div>
							</div>
						</div>
					</div>

					<div className="">
						<div className="flex justify-between items-center">
							<span className="text-[20px] font-[300] text-text-100">
								Task Deadline alerts
							</span>
							<div className="w-12 h-6 bg-blue-500 rounded-full flex items-center px-0.5">
								<div className="w-5 h-5 bg-white rounded-full ml-auto"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NotificationSetting;
