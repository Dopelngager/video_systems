import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface PresentationsSectionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode;
}
