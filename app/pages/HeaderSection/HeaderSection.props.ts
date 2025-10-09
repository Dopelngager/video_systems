import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface HeaderSectionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode;
}
