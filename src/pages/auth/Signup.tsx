import { Link, useNavigate } from "react-router-dom";
import { Profile, Sms, Unlock } from "iconsax-react";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { genSaltSync, hashSync } from "bcrypt-ts";

import { FormInput } from "../../components/UI/Input/Inputs";
import { signupSchema, TSignup } from "../../types/auth/signup";
import { PostRequest } from "../../utils/url";
import { useAppContext } from "../../context/AppContext";
import Logo from "../../assets/Logo/Logo.svg";

const Signup = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<TSignup>({
		resolver: zodResolver(signupSchema),
	});

	const navigate = useNavigate();
	const { setRegisterInfo } = useAppContext();

	const { mutate, isPending } = useMutation({
		mutationFn: PostRequest,
		onSuccess: (res) => {
			if (res.status === 200) {
				navigate("/email-verification");
				reset();
			}
		},
		onError: () => {
			toast.error("This email already exists.");
		},
	});

	const submitHandler = handleSubmit((data: TSignup) => {
		setRegisterInfo(data);
		const salt = genSaltSync(10);
		const hash = hashSync(data.password, salt);

		const postData = {
			url: "auth/register",
			data: { ...data, password: hash, passwordConfirm: hash },
		};

		mutate(postData);
	});

	return (
		<div className="flex h-screen w-screen bg-[#F5F0EB] overflow-hidden">
			{/* Left image side */}
			<div className="hidden md:flex md:w-1/2 h-full items-start justify-start p-6">
				<div className="w-full h-full relative">
					<img
						src={Logo}
						alt="Spaces logo"
						className="w-20 h-20 absolute top-12 left-12 z-10"
					/>
					<img
						src="/images/signup-image.png"
						alt="Sign up visual"
						className="w-full h-full object-cover rounded-[16px]"
					/>
				</div>
			</div>

			{/* Right form side */}
			<div className="w-full md:w-1/2 flex flex-col justify-center px-8 lg:px-24">
				<h1 className="text-4xl font-bold text-text-100 mb-8">Sign Up</h1>

				<form
					onSubmit={submitHandler}
					className="flex flex-col space-y-6 w-full"
				>
					<FormInput
						id="fullName"
						type="text"
						icon
						IconName={Profile}
						autoComplete="on"
						placeholder="Full Name"
						{...register("firstName")} // fullName
					/>
					{errors.firstName && (
						<p className="text-red-500 text-sm">{errors.firstName.message}</p>
					)}

					<FormInput
						id="email"
						type="email"
						icon
						IconName={Sms}
						autoComplete="on"
						placeholder="Institutional Email"
						{...register("email")}
					/>
					{errors.email && (
						<p className="text-red-500 text-sm">{errors.email.message}</p>
					)}

					<FormInput
						id="role"
						type="text"
						icon
						IconName={Profile}
						autoComplete="on"
						placeholder="Role Selection"
						{...register("email")} //role
					/>
					{errors.email && (
						<p className="text-red-500 text-sm">{errors.email.message}</p>
					)}

					<FormInput
						id="password"
						type="password"
						icon
						password
						IconName={Unlock}
						autoComplete="on"
						placeholder="Password"
						{...register("password")}
					/>
					{errors.password && (
						<p className="text-red-500 text-sm">{errors.password.message}</p>
					)}

					<FormInput
						id="passwordConfirm"
						type="password"
						icon
						password
						IconName={Unlock}
						autoComplete="off"
						placeholder="Confirm Password"
						{...register("passwordConfirm")}
					/>
					{errors.passwordConfirm && (
						<p className="text-red-500 text-sm">
							{errors.passwordConfirm.message}
						</p>
					)}

					<button
						type="submit"
						disabled={isPending}
						className="bg-[#B28B50] text-white font-semibold text-lg py-4 rounded-[12px] shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
					>
						{isPending ? "Signing up..." : "Sign Up"}
					</button>
				</form>

				<p className="mt-6 text-center text-sm text-text-100">
					Already have an account?{" "}
					<Link
						to="/login"
						className="text-button-100 font-medium hover:underline"
					>
						Log In
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Signup;

// import { FormInput } from "../../components/UI/Input/Inputs";
// import { toast } from "sonner";
// import { Profile, Sms, Unlock } from "iconsax-react";
// import check from "../../assets/icons/check.svg";
// import { Link, useNavigate } from "react-router-dom";
// import AuthLayout from "./AuthLayout";
// import { useAppContext } from "../../context/AppContext";
// import { PostRequest } from "../../utils/url";
// import { useMutation } from "@tanstack/react-query";
// import { genSaltSync, hashSync } from "bcrypt-ts";
// import { signupSchema, TSignup } from "../../types/auth/signup";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

// const Signup = () => {
// 	const {
// 		register,
// 		handleSubmit,
// 		formState: { errors, isSubmitting },
// 		reset,
// 		watch,
// 	} = useForm<TSignup>({ resolver: zodResolver(signupSchema) });

// 	// Watch password field
// 	const passwordValue = watch("password") || "";

// 	const lowerCaseRegex = new RegExp("(?=.*[a-z])");
// 	const upperCaseRegex = new RegExp("(?=.*[A-Z])");
// 	const numberRegex = new RegExp("(?=.*[0-9])");
// 	const passwordLength = new RegExp("(?=.{8,})");

// 	const navigate = useNavigate();
// 	const { setRegisterInfo } = useAppContext();

// 	const { mutate, isPending } = useMutation({
// 		mutationFn: PostRequest,
// 		onSuccess: (res) => {
// 			if (res.status === 200) {
// 				navigate("/email-verification");
// 				reset();
// 			}
// 		},
// 		onError: (error: unknown) => {
// 			if (error) {
// 				toast.error("This email already exists.");
// 			}
// 		},
// 	});

// 	const submitHandler = handleSubmit((data: TSignup) => {
// 		setRegisterInfo(data);
// 		const salt = genSaltSync(10);
// 		const hash = hashSync(data.password, salt);

// 		const postData = {
// 			url: "auth/register",
// 			data: { ...data, password: hash, passwordConfirm: hash },
// 		};
// 		if (data) {
// 			mutate(postData);
// 		}
// 	});

// 	return (
// 		<AuthLayout>
// 			<div className="w-full h-svh mx-auto max-w-[556px]">
// 				<div className="h-full w-full flex flex-col items-center justify-center">
// 					<p className="text-[#000] lg:text-[4rem] md:text-[4rem] text-[3.2rem] font-bold">
// 						Get started
// 					</p>
// 					<p className="text-gray-600 lg:text-[2.2rem] md:text-[2.2rem] text-[1.4rem] text-center font-normal">
// 						Enter the the required details in the fields below.
// 					</p>

// 					<form
// 						onSubmit={submitHandler}
// 						className="w-full pt-12 space-y-10 px-7 lg:px-0 md:px-0"
// 					>
// 						<div className="flex lg:flex-row md:flex-row flex-col items-center gap-5">
// 							<div className="flex flex-col w-full gap-2 relative">
// 								<FormInput
// 									id="firstName"
// 									type="text"
// 									icon
// 									IconName={Profile}
// 									autoComplete="on"
// 									{...register("firstName")}
// 									placeholder="First Name"
// 								/>
// 								{errors.firstName && (
// 									<p className="text-red-500 text-[12px] absolute bottom-[-22px]">
// 										{errors.firstName.message}
// 									</p>
// 								)}
// 							</div>
// 							<div className="flex flex-col w-full gap-2 relative">
// 								<FormInput
// 									id="lastName"
// 									type="text"
// 									icon
// 									IconName={Profile}
// 									autoComplete="on"
// 									{...register("lastName")}
// 									placeholder="Last Name"
// 								/>
// 								{errors.lastName && (
// 									<p className="text-red-500 text-[12px] absolute bottom-[-22px]">
// 										{errors.lastName.message}
// 									</p>
// 								)}
// 							</div>
// 						</div>
// 						<div className="flex flex-col w-full gap-2 relative">
// 							{" "}
// 							<FormInput
// 								id="email"
// 								type="email"
// 								icon
// 								IconName={Sms}
// 								autoComplete="on"
// 								{...register("email")}
// 								placeholder="Email address"
// 							/>
// 							{errors.email && (
// 								<p className="text-red-500 text-[12px] absolute bottom-[-22px]">
// 									{errors.email.message}
// 								</p>
// 							)}
// 						</div>
// 						<div className="flex flex-col w-full gap-2 relative">
// 							<FormInput
// 								id="password"
// 								type="password"
// 								password
// 								icon
// 								IconName={Unlock}
// 								autoComplete="on"
// 								placeholder="Set Password"
// 								{...register("password")}
// 							/>
// 							{errors.password && (
// 								<p className="text-red-500 text-[12px] absolute bottom-[-22px]">
// 									{errors.password.message}
// 								</p>
// 							)}
// 						</div>
// 						<div className="flex flex-col w-full gap-2 relative">
// 							<FormInput
// 								id="passwordConfirm"
// 								type="password"
// 								password
// 								icon
// 								IconName={Unlock}
// 								autoComplete="off"
// 								placeholder="Confirm Password"
// 								{...register("passwordConfirm")}
// 							/>
// 							{errors.passwordConfirm && (
// 								<p className="text-red-500 text-[12px] absolute bottom-[-22px]">
// 									{errors.passwordConfirm.message}
// 								</p>
// 							)}
// 						</div>

// 						<div className="grid grid-cols-3 lg:grid-cols-4 md:grid-cols-4 items-center gap-2 max-w-[450px] text-gray-600 text-[1.2rem]">
// 							<div className="flex items-center gap-3">
// 								<span
// 									className={`border rounded-full ${
// 										lowerCaseRegex.test(passwordValue)
// 											? "border-[#27BBA5] bg-[#D4F1ED] p-1"
// 											: "border-[#D0D5DD] p-3"
// 									}`}
// 								>
// 									{lowerCaseRegex.test(passwordValue) && (
// 										<img src={check} alt="check mark" />
// 									)}
// 								</span>
// 								<span>Lowercase</span>
// 							</div>
// 							<div className="flex items-center gap-3">
// 								<span
// 									className={`border rounded-full ${upperCaseRegex.test(passwordValue) ? "border-[#27BBA5] bg-[#D4F1ED] p-1" : "border-[#D0D5DD] p-3"}`}
// 								>
// 									{upperCaseRegex.test(passwordValue) && (
// 										<img src={check} alt="check mark" />
// 									)}
// 								</span>{" "}
// 								<span>Uppercase</span>
// 							</div>
// 							<div className="flex items-center gap-3">
// 								<span
// 									className={`border rounded-full ${passwordLength.test(passwordValue) ? "border-[#27BBA5] bg-[#D4F1ED] p-1" : "border-[#D0D5DD] p-3"}`}
// 								>
// 									{passwordLength.test(passwordValue) && (
// 										<img src={check} alt="check mark" />
// 									)}
// 								</span>
// 								<span>8 Characters </span>
// 							</div>
// 							<div className="flex items-center gap-3">
// 								<span
// 									className={`border rounded-full  ${numberRegex.test(passwordValue) ? "border-[#27BBA5] bg-[#D4F1ED] p-1" : "border-[#D0D5DD] p-3"}`}
// 								>
// 									{numberRegex.test(passwordValue) && (
// 										<img src={check} alt="check mark" />
// 									)}
// 								</span>{" "}
// 								<span>1 Number</span>
// 							</div>
// 						</div>

// 						<div className="flex flex-col items-center justify-center gap-2 lg:pt-12 md:pt-12 pt-24 pb-12">
// 							<p className="text-[1.2rem] text-gray-600 text-center mb-[10px]">
// 								By clicking “Sign Up” you agree to{" "}
// 								<Link
// 									to={"https://info.japahub.com/terms-of-use"}
// 									target="_Blank"
// 									className="text-primary-600 cursor-pointer"
// 								>
// 									Term & Condition
// 								</Link>{" "}
// 								and{" "}
// 								<Link
// 									to={"https://info.japahub.com/privacy"}
// 									target="_Blank"
// 									className="text-primary-600 cursor-pointer"
// 								>
// 									Privacy Policy
// 								</Link>
// 							</p>
// 							<button
// 								disabled={isPending || isSubmitting}
// 								className="flex items-center text-[14px] justify-center bg-primary-600 text-white w-full px-4 py-6 rounded-[10px] disabled:opacity-[0.5] disabled:cursor-not-allowed"
// 							>
// 								{isPending && isSubmitting ? "Signing up..." : "Sign up"}
// 							</button>
// 							<p className="mt-4 text-gray-600 font-medium text-[1.6rem]">
// 								Have an account?{" "}
// 								<Link className="text-primary-600" to="/login">
// 									Sign in
// 								</Link>
// 							</p>
// 						</div>
// 					</form>
// 				</div>
// 			</div>
// 		</AuthLayout>
// 	);
// };

// export default Signup;
