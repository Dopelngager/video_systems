import { HTag } from "@/app/components/HTag/HTag";
import { Tags } from "@/app/components/Tags/Tags";
import styles from "./GuaranteeSection.module.css";
import { GuaranteeSectionProps } from "./GuaranteeSection.props";
import { ContentBlock } from "@/app/components/ContentBlock/ContentBlock";
import Image from "next/image";

export const GuaranteeSection = ({ children, ...props }: GuaranteeSectionProps) => {
	return (
		<div className={styles.guaranteeSection} {...props}>
			<ContentBlock color="white" size="large" className={styles.guaranteeSectionContent}>
				<div>
					<div className={styles.guaranteeSectionTags}>
						<Tags color="gray" fontColor="font_white">
							3 года
						</Tags>
						<Tags color="gray" fontColor="font_white">
							1 год
						</Tags>
					</div>
					<HTag tag="h1" color="black" className={styles.guaranteeSectionHead}>
						Гарантия
					</HTag>
					<HTag tag="h4_medium" color="black" className={styles.guaranteeSectionText}>
						Компания <span>ARSHIN TECH</span> является региональным партнёром <span>Novicam</span> по
						поставке, монтажу и сервисному обслуживанию оборудования
					</HTag>
				</div>
				<></>
				<div className={styles.guaranteeSectionContentBlocks}>
					<ContentBlock color="blue" size="large" className={styles.guaranteeBlock}>
						<Image src="./icon1.svg" alt="Icon1" width={35} height={35} />
						<div>
							<span>3 года</span>
							<p>на оборудование</p>
						</div>
					</ContentBlock>
					<ContentBlock color="blue" size="large" className={styles.guaranteeBlock}>
						<Image src="./icon2.svg" alt="Icon2" width={35} height={35} />
						<div>
							<span>1 год</span>
							<p>на обслуживание системы</p>
						</div>
					</ContentBlock>
				</div>
			</ContentBlock>
			<ContentBlock color="blue" size="large" className={styles.guaranteeSectionContentImg}>
				<Image
					src="/sert.png"
					alt="sert"
					width={0}
					height={0}
					sizes="100vw"
					style={{ width: "auto", height: "100%" }}
				/>
			</ContentBlock>
			{children}
		</div>
	);
};
