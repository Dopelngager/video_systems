import { HTag } from "@/app/components/HTag/HTag";
import { Tags } from "@/app/components/Tags/Tags";
import styles from "./ServicesSection.module.css";
import { ServicesSectionProps } from "./ServicesSection.props";
import { ContentBlock } from "@/app/components/ContentBlock/ContentBlock";
import Icon1 from "./icons/icon_1.svg";
import Icon2 from "./icons/icon_2.svg";
import Icon3 from "./icons/icon_3.svg";
import Icon4 from "./icons/icon_4.svg";
import Icon5 from "./icons/icon_5.svg";
import Image from "next/image";

export const ServicesSection = ({ children, ...props }: ServicesSectionProps) => {
	return (
		<div className={styles.servicesSection} {...props}>
			<ContentBlock color="white" size="large" className={styles.servicesSection}>
				<div className={styles.bigContainerHeader}>
					<div>
						<HTag color="black" tag="h1">
							УСЛУГИ
						</HTag>
						<HTag color="black" tag="h1">
							ARSHIN TECH
						</HTag>
					</div>
					<div className={styles.bigContainerTags}>
						<Tags color="gray" fontColor="font_white">
							Видеонаблюдение
						</Tags>
						<Tags color="gray" fontColor="font_white">
							Домофония
						</Tags>
						<Tags color="gray" fontColor="font_white">
							Умные замки
						</Tags>
						<Tags color="gray" fontColor="font_white">
							Распознование лиц
						</Tags>
						<Tags color="gray" fontColor="font_white">
							Видеосистемы для спецтехники
						</Tags>
					</div>
				</div>
				<div className={styles.containerContent}>
					<div className={styles.containerContentLeft}>
						<ContentBlock color="gray" size="small" className={styles.smallConteinerContent}>
							<div className={styles.smallConteinerHead}>
								<HTag color="white" tag="h2_bold">
									Домофония
								</HTag>
								<Image src={Icon1} alt="Icon_1" width={28} height={28} />
							</div>
							<HTag color="white" tag="h4_medium">
								Позволяет на этапе звонка точно определить, кто к вам пришёл и позвать на помощь вслучае
								необходимости
							</HTag>
						</ContentBlock>
						<ContentBlock color="gray" size="small" className={styles.smallConteinerContent}>
							<div className={styles.smallConteinerHead}>
								<HTag color="white" tag="h2_bold">
									Умные замки
								</HTag>
								<Image src={Icon2} alt="Icon_2" width={28} height={28} />
							</div>
							<HTag color="white" tag="h4_medium">
								Надёжность и высокая степень защиты от взлома выгодно отличает умные замки от обычных
								механических
							</HTag>
						</ContentBlock>
						<ContentBlock color="gray" size="small" className={styles.smallConteinerContent}>
							<div className={styles.smallConteinerHead}>
								<HTag color="white" tag="h2_bold">
									Видеонаблюдение
								</HTag>
								<Image src={Icon3} alt="Icon_3" width={28} height={28} />
							</div>
							<HTag color="white" tag="h4_medium">
								Позволяет обеспечить безопасность прав человека, частной и государственной собственности
							</HTag>
						</ContentBlock>
					</div>
					<div className={styles.containerCenter}>
						<ContentBlock color="gray" size="small" className={styles.smallConteinerContent}>
							<div className={styles.smallConteinerHead}>
								<HTag color="white" tag="h2_bold">
									Системы распознавания лиц
								</HTag>
								<Image src={Icon4} alt="Icon_4" width={28} height={28} />
							</div>
							<HTag color="white" tag="h4_medium">
								Идентификации личности при помощи сканирования лица
							</HTag>
						</ContentBlock>
						<ContentBlock color="gray" size="small" className={styles.smallConteinerContent}>
							<div className={styles.smallConteinerHead}>
								<HTag color="white" tag="h2_bold" className={styles.headerText}>
									Видеосистемы для спецтехники
								</HTag>
								<Image src={Icon5} alt="Icon_5" width={28} height={28} />
							</div>
							<HTag color="white" tag="h4_medium">
								Позволяют решить задачи, связанные с работами при ведении строительства, монтажа и
								производства.
							</HTag>
						</ContentBlock>
					</div>
					<ContentBlock size="imageBlock" path="/camera_2.png" className={styles.imageBlock} />
				</div>
			</ContentBlock>
			{children}
		</div>
	);
};
