import { HTag } from "@/app/components/HTag/HTag";
import { Tags } from "@/app/components/Tags/Tags";
import styles from "./WorkSection.module.css";
import { WorkSectionProps } from "./WorkSection.props";
import { ContentBlock } from "@/app/components/ContentBlock/ContentBlock";

export const WorkSection = ({ children, ...props }: WorkSectionProps) => {
	return (
		<div {...props}>
			<ContentBlock color="blue" size="large" className={styles.workSection}>
				<div className={styles.workSectionHeader}>
					<HTag color="white" tag="h1">
						КАК МЫ РАБОТАЕМ
					</HTag>
					<div className={styles.workSectionTags}>
						<Tags color="bg_white" fontColor="blue">
							Выезд
						</Tags>
						<Tags color="bg_white" fontColor="blue">
							Рассчет стоимости
						</Tags>
						<Tags color="bg_white" fontColor="blue">
							Согласование
						</Tags>
						<Tags color="bg_white" fontColor="blue">
							Договор
						</Tags>
						<Tags color="bg_white" fontColor="blue">
							Приступаем к работе
						</Tags>
					</div>
				</div>
				<div className={styles.workSectionContent}>
					<div className={styles.circleBlock}>
						<HTag tag="h2_bold" color="white">
							Бесплатный
						</HTag>
						<HTag tag="h2_medium" color="white">
							и обязательный выезд специалиста на объект.
						</HTag>
					</div>
					<div className={styles.circleBlock}>
						<HTag tag="h2_bold" color="white">
							Рассчитываем и согласовываем
						</HTag>
						<HTag tag="h2_medium" color="white">
							перечень оборудования, требуемых работ и сроков выполнения заказа.
						</HTag>
					</div>
					<div className={styles.circleBlock}>
						<HTag tag="h2_bold" color="white">
							Подписываем договор
						</HTag>
						<HTag tag="h2_medium" color="white">
							и приступаем к работе в течении 24 часов
						</HTag>
					</div>
				</div>
			</ContentBlock>
			{children}
		</div>
	);
};
