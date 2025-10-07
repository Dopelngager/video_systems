import { ForwardedRef, forwardRef } from "react";
import styles from "./Checkbox.module.css";
import { CheckboxProps } from "./Checkbox.props";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps & { label?: string }>(function CheckboxWithRef(
	{ label, ...props },
	ref: ForwardedRef<HTMLInputElement>
) {
	return (
		<label className={styles.checkboxWrapper}>
			<input type="checkbox" className={styles.checkbox} {...props} ref={ref} />
			{label && <span className={styles.label}>{label}</span>}
		</label>
	);
});
