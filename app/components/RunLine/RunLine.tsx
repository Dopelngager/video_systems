import styles from "./RunLine.module.css";
import { RunLineProps } from "./RunLine.props";
import IconRunline from "./icon_runline.svg";
import Image from "next/image";

export const RunLine = ({ children, ...props }: RunLineProps) => {
	const items = new Array(10).fill(null).map((_, i) => (
		<div key={i} className={styles.item}>
			<Image src={IconRunline} alt="IconRunline" width={38} height={38} />
			<div className={styles.textRunline}>От идеи до результата!</div>
		</div>
	));
	return (
		<div className={styles.run_line} {...props}>
			<div className={styles.track}>
				{items}
				{items}
			</div>
			{children}
		</div>
	);
};
