import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface WorkSectionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode;
}
