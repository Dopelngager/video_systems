"use client";

import { HTag } from "@/app/components/HTag/HTag";
import { Tags } from "@/app/components/Tags/Tags";
import styles from "./PresentationsSection.module.css";
import { PresentationsSectionProps } from "./PresentationsSection.props";
import { ContentBlock } from "@/app/components/ContentBlock/ContentBlock";
import Image from "next/image";
import { Button } from "@/app/components/Button/Button";

export const PresentationsSection = ({ children, ...props }: PresentationsSectionProps) => {
	const scrollToPage = () => {
		document.getElementById("leaverequest")?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div {...props}>
			<ContentBlock color="gray" size="large" className={styles.presentationsSection}>
				<div className={styles.presentationsContent}>
					<div className={styles.presentationsContentHead}>
						<div className={styles.headTags}>
							<Tags color="bg_white" fontColor="blue">
								Видеонаблюдение
							</Tags>
							<Tags color="bg_white" fontColor="blue">
								Видеонаблюдение
							</Tags>
							<Tags color="bg_white" fontColor="blue">
								Novicam
							</Tags>
						</div>
						<HTag tag="h1" color="white">
							ПРЕЗЕНТАЦИИ
						</HTag>
						<HTag tag="h4_medium" color="white">
							Ознакомьтесь с презентациями, чтобы понять какие проблемы мы поможем вам решить
						</HTag>
					</div>
					<Button appearance="primary" onClick={scrollToPage} />
				</div>
				<div className={styles.presentationsBlocks}>
					<ContentBlock color="white" size="large" className={styles.blockHead}>
						<HTag tag="h3_light" color="black">
							.PDF
						</HTag>
						<div>
							<HTag tag="h3_medium" color="black">
								Как следить за порядком в подёезде?
							</HTag>
							<Image src="/download_blue.svg" alt="downloadB" width={40} height={40} />
						</div>
					</ContentBlock>
					<div className={styles.blocksDown}>
						<ContentBlock color="blue" size="large" className={styles.block}>
							<HTag tag="h3_light" color="white">
								.PDF
							</HTag>
							<div>
								<HTag tag="h3_medium" color="white">
									Видеонаблюдение во дворе
								</HTag>
								<Image src="/download_white.svg" alt="downloadW" width={40} height={40} />
							</div>
						</ContentBlock>
						<ContentBlock color="white" size="large" className={styles.block}>
							<HTag tag="h3_light" color="black">
								.PDF
							</HTag>
							<div>
								<HTag tag="h3_medium" color="black">
									Домофония novicam
								</HTag>
								<Image src="/download_blue.svg" alt="downloadB" width={40} height={40} />
							</div>
						</ContentBlock>
					</div>
				</div>
			</ContentBlock>
			{children}
		</div>
	);
};
