"use client";

import { Tags } from "../Tags/Tags";
import styles from "./Navbar.module.css";
import { NavbarProps } from "./Navbar.props";

export const Navbar = ({ children, ...props }: NavbarProps) => {
	const scrollToPage = (nav: string) => {
		document.getElementById(nav)?.scrollIntoView({ behavior: "smooth" });
	};
	return (
		<div className={styles.navbar} {...props}>
			<Tags color="gray_light" fontColor="black" onClick={() => scrollToPage("services")}>
				Услуги
			</Tags>
			<Tags color="gray_light" fontColor="black" onClick={() => scrollToPage("work")}>
				Схема работы
			</Tags>
			<Tags color="gray_light" fontColor="black" onClick={() => scrollToPage("footer")}>
				Контакты
			</Tags>
			{children}
		</div>
	);
};
