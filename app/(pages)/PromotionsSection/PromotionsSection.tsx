import { HTag } from "@/app/components/HTag/HTag";
import { Tags } from "@/app/components/Tags/Tags";
import styles from "./PromotionsSection.module.css";
import { PromotionsSectionProps } from "./PromotionsSection.props";
import { ContentBlock } from "@/app/components/ContentBlock/ContentBlock";
import Image from "next/image";
import IconFrame1 from "./icon_frame_1.svg";
import IconFrame2 from "./icon_frame_2.svg";

export const PromotionsSection = ({ children, ...props }: PromotionsSectionProps) => {
	return (
		<div {...props}>
			<ContentBlock color="white" size="large" className={styles.promotionsSection}>
				<div className={styles.promotionsHead}>
					<HTag tag="h1" color="black">
						АКЦИИ
					</HTag>
					<HTag tag="h3_medium" color="black">
						Предложения с ещё большей выгодой для вас
					</HTag>
				</div>
				<div className={styles.promotionsBlocks}>
					<ContentBlock color="blue" size="small" className={styles.block}>
						<Image src={IconFrame2} alt="IconFrame2" width={160} height={160} />
						<Tags color="bg_white" fontColor="blue">
							Бесплатно
						</Tags>
						<HTag tag="h2_medium" color="white">
							Каждая <span>четвертая</span> камера бесплатно
						</HTag>
					</ContentBlock>
					<ContentBlock color="blue" size="small" className={styles.block}>
						<Image src={IconFrame1} alt="IconFrame1" width={160} height={160} />
						<div className={styles.promotionsTags}>
							<Tags color="bg_white" fontColor="blue">
								20%
							</Tags>
							<Tags color="bg_white" fontColor="blue">
								Домофоны Novicam
							</Tags>
						</div>
						<HTag tag="h2_medium" color="white">
							<span>Скидка 20%</span> при покупке от 10000 руб. на <span>домофоны Novicam</span>
						</HTag>
					</ContentBlock>
				</div>
			</ContentBlock>
			{children}
		</div>
	);
};
