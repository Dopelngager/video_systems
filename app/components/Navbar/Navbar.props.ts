import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface NavbarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode;
}
