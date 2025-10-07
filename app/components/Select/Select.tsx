import { ForwardedRef, forwardRef } from "react";
import styles from "./Select.module.css";
import { SelectProps } from "./Select.props";
import cn from "classnames";

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
	{ className, error, ...props },
	ref: ForwardedRef<HTMLSelectElement>
) {
	return (
		<div className={cn(className, styles.wrapper, { [styles.error]: error })}>
			<select className={styles.select} {...props} ref={ref} />
			<span className={styles.arrow}></span>
			{error && <span className={styles.errorMessage}>{error.message}</span>}
		</div>
	);
});
