import { ReactNode } from "react";

export interface HTagProps {
	color: "black" | "dark-blue" | "blue" | "gray" | "gray-light" | "white";
	tag: "h1" | "h2_bold" | "h2_medium" | "h3_bold" | "h3_medium" | "h3_light" | "h4_bold" | "h4_medium" | "h5";
	children?: ReactNode;
	className?: string;
}
