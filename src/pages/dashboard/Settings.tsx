import ProfileInfo from "../../components/SettingsComponent/ProfileInfo";
import AccountSettings from "../../components/SettingsComponent/AccountSettings";
import NotificationSetting from "../../components/SettingsComponent/NotificationSetting";

const SettingsPage = () => {
	return (
		<div className="p-3 sm:p-4 sm:pr-[4%] mb-[60px]">
			<div className="flex flex-col gap-[90px]">
				{/* Profile Information Section */}
				<ProfileInfo />
				{/* Account Settings Section */}
				<AccountSettings />
				{/* Notification Preferences Section */}
				<NotificationSetting />
			</div>
		</div>
	);
};

export default SettingsPage;
