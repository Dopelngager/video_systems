import { HTag } from "@/app/components/HTag/HTag";
import styles from "./FooterSection.module.css";
import { FooterSectionProps } from "./FooterSection.props";
import { ContentBlock } from "@/app/components/ContentBlock/ContentBlock";
import Image from "next/image";
import { Navbar } from "@/app/components/Navbar/Navbar";

export const Footer = ({ children, ...props }: FooterSectionProps) => {
	return (
		<div {...props}>
			<ContentBlock color="white" size="large" className={styles.footerSection}>
				<div className={styles.footerHead}>
					<Image src="/arsh.svg" alt="IconFrame" width={311} height={125} />
					<Navbar />
				</div>
				<div className={styles.footerCenter}>
					<HTag tag="h3_bold" color="black">
						idea@arshin-tech.ru
					</HTag>
					<HTag tag="h3_bold" color="black">
						+7 (843) 253-22-81
					</HTag>
				</div>
				<div className={styles.footerDown}>
					<p>Политика конфиденциальности</p>
					<HTag tag="h1" color="black">
						Казань, Бондаренко, 26, офис 5, цокольный этаж
					</HTag>
				</div>
			</ContentBlock>
			{children}
		</div>
	);
};
