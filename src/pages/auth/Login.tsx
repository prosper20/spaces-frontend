import { Link, useNavigate } from "react-router-dom";
import { Lock, Sms } from "iconsax-react";
import { toast } from "sonner";
import { FormInput } from "../../components/UI/Input/Inputs";
import LoaderSpinnerSmall from "../../components/Loaders/LoaderSpinnerSmall";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { loginSchema, TLogin } from "../../types/auth/login";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import useSignIn from "react-auth-kit/hooks/useSignIn";

const LoginForm = () => {
	const navigate = useNavigate();
	const signIn = useSignIn();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<TLogin>({ resolver: zodResolver(loginSchema) });

	const loginMutation = useMutation({
		mutationFn: async (formData: TLogin) => {
			try {
				const response = await axios.post(
					import.meta.env.VITE_API_URL + "/auth/login",
					formData,
					{ withCredentials: true }
				);

				// const { accessToken, refreshToken } = response.data;
				// localStorage.setItem("access-token", accessToken);
				// localStorage.setItem("refresh-token", refreshToken);

				// const userProfile = await axios.get(
				// 	import.meta.env.VITE_API_URL + "/api/users/me",
				// 	{
				// 		headers: {
				// 			Authorization: `Bearer ${accessToken}`,
				// 		},
				// 		withCredentials: true,
				// 	}
				// );

				// localStorage.setItem("user", JSON.stringify(userProfile.data));
				return response.data;
			} catch (err: any) {
				throw new Error(err.response?.data?.message || "Login failed");
			}
		},
		onSuccess: (response) => {
			if (response.accessToken) {
				signIn({
					auth: {
						type: "Bearer",
						token: response.accessToken,
					},
					userState: {
						id: response.id,
						fullName: response.fullName,
						email: response.email,
						profilePicture: response.profile_picture,
						role: response.role,
					},
				});
				toast.success("Login Successful");
				reset();
				navigate("/");
			}
		},
		onError: (err: Error) => {
			toast.error(err.message);
		},
	});

	const submitHandler = handleSubmit((data) => {
		loginMutation.mutate(data);
	});

	return (
		<div className="flex h-screen w-screen bg-[#F5F0EB] overflow-hidden">
			{/* Left Form Side */}
			<div className="w-full md:w-1/2 flex flex-col justify-center px-8 lg:px-24">
				<h1 className="text-4xl font-bold text-text-100 mb-8">Log In</h1>

				<form
					onSubmit={submitHandler}
					className="flex flex-col space-y-6 w-full"
				>
					<div className="relative">
						<FormInput
							id="email"
							type="text"
							icon
							IconName={Sms}
							autoComplete="on"
							placeholder="Institutional Email"
							{...register("email")}
						/>
						{errors.email && (
							<p className="text-red-500 text-sm absolute mt-1">
								{errors.email.message}
							</p>
						)}
					</div>

					<div className="relative">
						<FormInput
							id="password"
							type="password"
							icon
							IconName={Lock}
							autoComplete="on"
							password
							placeholder="Password"
							{...register("password")}
						/>
						{errors.password && (
							<p className="text-red-500 text-sm absolute mt-1">
								{errors.password.message}
							</p>
						)}
					</div>

					<div className="text-right text-sm text-text-100">
						<Link to="/reset-password">Forgot Password?</Link>
					</div>

					<button
						type="submit"
						disabled={loginMutation.isPending}
						className="justify-center items-center w-full flex bg-[#B28B50] text-white font-semibold text-lg py-4 rounded-[12px] shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
					>
						{loginMutation.isPending ? <LoaderSpinnerSmall /> : "Login"}
					</button>
				</form>

				<p className="mt-6 text-center text-sm text-text-100">
					Don’t have an account?{" "}
					<Link
						to="/signup"
						className="text-button-100 font-medium hover:underline"
					>
						Sign Up
					</Link>
				</p>
			</div>

			{/* Right Image Side (hidden on mobile) */}
			<div className=" hidden md:flex md:w-1/2 h-full items-center justify-center py-10">
				<img
					src="/images/login-image.png"
					alt="Login visual"
					className="max-w-full max-h-full object-contain rounded-[10px] shadow-lg"
				/>
			</div>
		</div>
	);
};

export default LoginForm;
