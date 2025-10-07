import styles from "./ContentBlock.module.css";
import { ContentBlockProps } from "./ContentBlock.props";
import cn from "classnames";

export const ContentBlock = ({ color, size, path, children, className, ...props }: ContentBlockProps) => {
	return (
		<div
			className={cn(styles.content_block, className, {
				[styles.gray]: color == "gray",
				[styles.blue]: color == "blue",
				[styles.white]: color == "white",
				[styles.large]: size == "large",
				[styles.small]: size == "small",
				[styles.image_block]: size == "imageBlock"
			})}
			{...props}
			style={
				path
					? {
							background: `url(${path}) no-repeat center center / cover`,
							width: "100%",
							height: "100%",
							maxWidth: "460px",
							maxHeight: "608px"
					  }
					: undefined
			}
		>
			{children}
		</div>
	);
};
