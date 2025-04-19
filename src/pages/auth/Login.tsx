import { Link, useNavigate } from "react-router-dom";
import { Lock, Sms } from "iconsax-react";
import { toast } from "sonner";
import { FormInput } from "../../components/UI/Input/Inputs";
import { PostRequest } from "../../utils/url";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { loginSchema, TLogin } from "../../types/auth/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import LoaderSpinnerSmall from "../../components/Loaders/LoaderSpinnerSmall";

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<TLogin>({ resolver: zodResolver(loginSchema) });

	const signIn = useSignIn();
	const navigate = useNavigate();

	const { mutate, isPending } = useMutation({
		mutationFn: PostRequest,
		onSuccess: (res) => {
			if (res.data.accessToken) {
				signIn({
					auth: {
						type: "Bearer",
						token: res.data.accessToken,
					},
					userState: {
						username: res.data.user.username,
					},
				});
				toast.success("Login Successful");
				reset();
				navigate("/");
			}
		},
		onError: (error: AxiosError<{ message: string }>) => {
			toast.error(error?.response?.data?.message ?? "Login failed");
		},
	});

	const submitHandler = handleSubmit((data: TLogin) => {
		mutate({ url: "/auth/login", data });
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
						disabled={isPending}
						className="bg-[#B28B50] text-white font-semibold text-lg py-4 rounded-[12px] shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
					>
						{isPending ? <LoaderSpinnerSmall /> : "Login"}
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
