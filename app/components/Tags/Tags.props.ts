import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	color?: "gray" | "bg_white" | "gray_light";
	fontColor?: "blue" | "font_white" | "black";
	children?: ReactNode;
}
