"use client";
import { useState, forwardRef } from "react";
import { Eye, EyeSlash } from "iconsax-react";
import { FormInputProps } from "../../../types/FormInput";

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
	(
		{
			label,
			value,
			name,
			id,
			type,
			additionalClasses,
			placeholder,
			onChange,
			additionalAttributes,
			textarea,
			password,
			icon,
			IconName,
			pattern,
			rows,
			cols,
			disabled,
			required,
			minLength,
			maxLength,
			autoComplete,
		},
		ref
	) => {
		const [visible, setVisible] = useState<boolean>(false);

		return (
			<div className="flex w-full flex-col gap-y-1">
				<label className="text-left font-light capitalize text-black text-[14px]">
					{label} {label && <span className="text-red-500">*</span>}
				</label>
				{!textarea && (
					<div className="relative">
						{icon && IconName && (
							<i className="absolute left-6 top-6 flex -translate-x-1/2 items-center">
								<IconName size="14" color="#808080" variant="TwoTone" />
							</i>
						)}

						<input
							name={name}
							id={id}
							value={value}
							ref={ref}
							className={`${
								additionalClasses
									? additionalClasses +
										"w-full outline-none text-[14px] font-light"
									: `w-full rounded-[10px] border border-gray-200 focus:caret-primary-300 focus:border-primary-300 bg-transparent ${icon ? "px-12" : "px-4"} py-4 text-[14px] font-light  outline-none`
							}`}
							type={!visible ? type : "text"}
							required={required}
							minLength={minLength}
							maxLength={maxLength}
							autoComplete={autoComplete}
							pattern={pattern}
							placeholder={placeholder}
							disabled={disabled}
							onChange={onChange}
							{...additionalAttributes}
						/>
						{password && (
							<i className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center text-black">
								<button
									type="button"
									onClick={() => setVisible(!visible)}
									aria-label={visible ? "Hide password" : "Show password"}
								>
									<span className="sr-only">
										{visible ? "Hide password" : "Show password"}
									</span>
									{visible ? (
										<Eye size="14" color="#808080" variant="TwoTone" />
									) : (
										<EyeSlash size="14" color="#808080" variant="TwoTone" />
									)}
								</button>
							</i>
						)}
					</div>
				)}
				{textarea && (
					<textarea
						className="w-full outline-none focus:ring-1 ring-black rounded-md border border-gray-200 bg-transparent px-4 py-4 text-[14px] font-light"
						rows={rows}
						cols={cols}
						disabled={disabled}
						placeholder={placeholder}
						maxLength={maxLength}
						onChange={onChange}
					></textarea>
				)}
			</div>
		);
	}
);
