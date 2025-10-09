import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface MainSectionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode;
}
