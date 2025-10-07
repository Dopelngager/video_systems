import { useScrollY } from "@/app/hooks/useScrollY";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import styles from "./UpButton.module.css";

export const UpButton = () => {
	const controls = useAnimation();
	const y = useScrollY();

	useEffect(() => {
		controls.start({
			opacity: y / document.body.scrollHeight
		});
	});

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};

	return (
		<motion.button className={styles.upButton} onClick={scrollToTop} animate={controls} initial={{ opacity: 0 }}>
			Наверх
		</motion.button>
	);
};
