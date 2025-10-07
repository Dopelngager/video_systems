import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";
import cn from "classnames";

export const Button = ({ appearance, children, className, ...props }: ButtonProps) => {
	const buttonContent = <>{children || appearance === "primary" ? "Оставить заявку" : "Смотреть презентации"}</>;

	return (
		<button
			className={cn(styles.button, className, {
				[styles.primary]: appearance == "primary",
				[styles.slave]: appearance == "slave"
			})}
			{...props}
		>
			{buttonContent}
			{children}
		</button>
	);
};
