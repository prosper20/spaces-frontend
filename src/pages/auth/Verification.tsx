import { useSearchParams } from "react-router-dom";
import OtpVerification from "../../components/auth/OtpVerification";

const Verification = () => {
	const [searchParam] = useSearchParams();
	const mode = searchParam.get("mode");
	const password = mode === "password";

	return (
		<OtpVerification
			header={password ? "Password Reset" : "Please verify your email"}
		></OtpVerification>
	);
};

export default Verification;
