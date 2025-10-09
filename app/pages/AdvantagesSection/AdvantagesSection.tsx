"use client";

import { HTag } from "@/app/components/HTag/HTag";
import { Tags } from "@/app/components/Tags/Tags";
import styles from "./AdvantagesSection.module.css";
import { AdvantagesSectionProps } from "./AdvantagesSection.props";
import { ContentBlock } from "@/app/components/ContentBlock/ContentBlock";
import { Button } from "@/app/components/Button/Button";
import { ContentBlockIcon } from "@/app/components/ContentBlockIcon/ContentBlockIcon";

export const AdvantagesSection = ({ children, ...props }: AdvantagesSectionProps) => {
	const scrollToPage = () => {
		document.getElementById("presentations")?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className={styles.advantagesSection} {...props}>
			<ContentBlock color="white" size="large" className={styles.howContentBlock}>
				<div>
					<Tags color="gray" fontColor="font_white">
						Преимущества
					</Tags>
					<HTag tag="h1" color="black" className={styles.textHead}>
						ПОЧЕМУ НАС ВЫБИРАЮТ?
					</HTag>
					<HTag tag="h4_medium" color="black" className={styles.textOneContentBlock}>
						Наша компания проектирует, поставляет оборудование и реализует проекты любой сложности на
						протяжении <span className={styles.howTextBold}>5 лет</span>.
					</HTag>
					<HTag tag="h4_medium" color="black" className={styles.textTwoContentBlock}>
						Мы используем только <span className={styles.howTextBold}>современное оборудование</span> и
						выполняем монтаж в рамках индивидуального запроса клиента.
					</HTag>
				</div>
				<Button appearance="slave" className={styles.buttonContentBlock} onClick={scrollToPage} />
			</ContentBlock>
			<ContentBlock color="gray" size="large" className={styles.adv1ContentBlock}>
				<ContentBlockIcon painted={1} />
				<HTag tag="h3_light" color="white">
					Подбор и монтаж системы видеонаблюдения <span className={styles.textBold}>в короткие сроки</span>
				</HTag>
			</ContentBlock>
			<ContentBlock color="gray" size="large" className={styles.adv2ContentBlock}>
				<ContentBlockIcon painted={2} />
				<HTag tag="h3_light" color="white">
					Оборудование от <span className={styles.textBold}>надёжных брендов</span> систем безопасности{" "}
					<span className={styles.textBold}>с гарантией от 3-х лет</span>
				</HTag>
			</ContentBlock>
			<ContentBlock color="gray" size="large" className={styles.adv3ContentBlock}>
				<ContentBlockIcon painted={3} />
				<HTag tag="h3_light" color="white">
					Обязательный выезд специалиста на объект до начала работ, для{" "}
					<span className={styles.textBold}>точного расчёта стоимости</span>
				</HTag>
			</ContentBlock>
			<ContentBlock color="gray" size="large" className={styles.adv4ContentBlock}>
				<ContentBlockIcon painted={4} />
				<HTag tag="h3_light" color="white">
					Чистый монтаж на объектах с готовым ремонтом! В работе{" "}
					<span className={styles.textBold}>используем промышленные пылесосы</span>
				</HTag>
			</ContentBlock>
			{children}
		</div>
	);
};
