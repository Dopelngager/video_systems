import styles from "./HTag.module.css";
import { HTagProps } from "./HTag.props";
import cn from "classnames";
import { JSX } from "react/jsx-runtime";

export const HTag = ({ tag, color = "black", className, children, ...props }: HTagProps) => {
	const Tag = tag.slice(0, 2) as keyof JSX.IntrinsicElements;
	return (
		<Tag className={cn(styles[tag], styles[color], className)} {...props}>
			{children}
		</Tag>
	);
};
