import { Icon } from "iconsax-react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Option {
	value: string;
	label: string;
}

export interface FormInputProps {
	label?: string;
	name: string;
	id: string;
	type: string;
	icon?: boolean;
	IconName?: Icon;
	additionalClasses?: string;
	placeholder?: string;
	placeholderStyleOptions?: { [index: string]: boolean | string | number };
	value?: string;
	autoComplete: string;
	onChange: (e: any) => void;
	pattern?: string;
	password?: boolean;
	additionalAttributes?: { [propName: string]: any };
	select?: boolean;
	selectStyleOptions?: { [index: string]: boolean | string | number };
	textarea?: boolean;
	rows?: number;
	cols?: number;
	disabled?: boolean;
	required?: boolean;
	minLength?: number;
	emoji?: boolean;
	maxLength?: number;
	readOnly?: boolean;
}

export interface commentInputProps {
	comment: string;
}
