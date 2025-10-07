import { ForwardedRef, forwardRef } from "react";
import styles from "./Textarea.module.css";
import { TextareaProps } from "./Textarea.props";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
	{ ...props },
	ref: ForwardedRef<HTMLTextAreaElement>
) {
	return <textarea className={styles.textarea} {...props} ref={ref} />;
});
