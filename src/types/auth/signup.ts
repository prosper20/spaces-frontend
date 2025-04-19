import { z } from "zod";

export const signupSchema = z
	.object({
		email: z.string({ required_error: "Email is required" }).email(),
		password: z
			.string({ required_error: "Password is required" })
			.min(1, "Password is required"),
		passwordConfirm: z.string({
			required_error: "Confirm password is required",
		}),
		firstName: z
			.string({ required_error: "First name is required" })
			.min(1, "First name is required"),
		lastName: z
			.string({ required_error: "Last name is required" })
			.min(1, "Last name is required"),
	})

	.refine((data) => data.password === data.passwordConfirm, {
		message: "Password must match",
		path: ["passwordConfirm"],
	});

export type TSignup = z.infer<typeof signupSchema>;
