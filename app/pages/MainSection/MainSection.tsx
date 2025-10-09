"use client";

import { HTag } from "@/app/components/HTag/HTag";
import { Tags } from "@/app/components/Tags/Tags";
import styles from "./MainSection.module.css";
import { MainSectionProps } from "./MainSection.props";
import { ContentBlock } from "@/app/components/ContentBlock/ContentBlock";
import Image from "next/image";
import { Button } from "@/app/components/Button/Button";

export const MainSection = ({ children, ...props }: MainSectionProps) => {
	const scrollToPage = () => {
		document.getElementById("leaverequest")?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className={styles.mainSection} {...props}>
			<div className={styles.installContentBlock}>
				<ContentBlock color="white" size="large">
					<div className={styles.tags}>
						<Tags color="gray" fontColor="font_white">
							Видеонаблюдение
						</Tags>
						<Tags color="gray" fontColor="font_white">
							Казань
						</Tags>
					</div>
					<Image
						className={styles.iconFrame1}
						src="icon_frame_1.svg"
						alt="Frame_1"
						width={135}
						height={128}
					/>
					<HTag tag="h1" color="black" className={styles.headInstallH3}>
						Установка и продажа систем видеонаблюдения
					</HTag>
					<HTag tag="h3_bold" color="gray" className={styles.textInstallH3}>
						Понятным языком объясняем технические термины
					</HTag>
				</ContentBlock>
			</div>
			<div className={styles.imageContentBlock}>
				<ContentBlock size="imageBlock" path="/camera_1.png" />
			</div>
			<div className={styles.leaveReqContentBlock}>
				<ContentBlock color="gray" size="large">
					<HTag tag="h1" color="white">
						ARSHIN TECH
					</HTag>
					<HTag tag="h3_medium" color="white" className={styles.textLeaveH3}>
						Объединение профессионалов, c большим опытом работы в сфере систем видеонаблюдения, контроля
						доступа и видеодомофонии.
					</HTag>
					<Button appearance="primary" className={styles.buttonLeaveH3} onClick={scrollToPage} />
					<Image
						className={styles.iconFrame2}
						src="icon_frame_2.svg"
						alt="Frame_1"
						width={165}
						height={165}
					/>
				</ContentBlock>
			</div>
			{children}
		</div>
	);
};
