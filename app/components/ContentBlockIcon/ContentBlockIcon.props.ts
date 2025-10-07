import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ContentBlockIconProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	painted: 1 | 2 | 3 | 4;
	children?: ReactNode;
}
