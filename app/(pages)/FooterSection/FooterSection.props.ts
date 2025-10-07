import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface FooterSectionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode;
}
