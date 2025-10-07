import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ContentBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	color?: "gray" | "blue" | "white";
	size: "large" | "small" | "imageBlock";
	path?: string;
	children?: ReactNode;
}
