import styles from "./Tags.module.css";
import { TagsProps } from "./Tags.props";
import cn from "classnames";

export const Tags = ({ color, fontColor, children, className, ...props }: TagsProps) => {
	return (
		<div
			className={cn(styles.tags, className, {
				[styles.gray]: color == "gray",
				[styles.bg_white]: color == "bg_white",
				[styles.gray_light]: color == "gray_light",
				[styles.blue]: fontColor == "blue",
				[styles.font_white]: fontColor == "font_white",
				[styles.black]: fontColor == "black"
			})}
			{...props}
		>
			{children}
		</div>
	);
};
