import styles from "./ContentBlockIcon.module.css";
import { ContentBlockIconProps } from "./ContentBlockIcon.props";

export const ContentBlockIcon = ({ children, painted, ...props }: ContentBlockIconProps) => {
	const circlePaint = Array(4).fill(styles.circle);
	if (painted >= 1 && painted <= 4) {
		circlePaint[painted - 1] = styles.circlePainted;
	}
	return (
		<div className={styles.contentBlockIcon} {...props}>
			<div className={circlePaint[0]} />
			<div className={circlePaint[1]} />
			<div className={circlePaint[2]} />
			<div className={circlePaint[3]} />
			{children}
		</div>
	);
};
