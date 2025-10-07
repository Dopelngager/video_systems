import { ForwardedRef, forwardRef } from "react";
import styles from "./Input.module.css";
import { InputProps } from "./Input.props";
import cn from "classnames";

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
	{ className, error, ...props },
	ref: ForwardedRef<HTMLInputElement>
) {
	return (
		<div className={styles.inputWrapper}>
			<input className={cn(className, styles.input, { [styles.error]: error })} {...props} ref={ref} />
			{error && <span className={styles.errorMessage}>{error.message}</span>}
		</div>
	);
});
