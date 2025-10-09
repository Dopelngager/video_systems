"use client";

import { HTag } from "@/app/components/HTag/HTag";
import styles from "./LeaveRequestSection.module.css";
import { LeaveRequestSectionProps } from "./LeaveRequestSection.props";
import { ContentBlock } from "@/app/components/ContentBlock/ContentBlock";
import Image from "next/image";
import { Input } from "@/app/components/Input/Input";
import { Checkbox } from "@/app/components/Checkbox/Checkbox";
import { Button } from "@/app/components/Button/Button";
import { Controller, useForm } from "react-hook-form";
import { ILeaveRequestForm } from "./LeaveRequestSection.interface";
import { Select } from "@/app/components/Select/Select";
import { Textarea } from "@/app/components/Textarea/Textarea";

export const LeaveRequestSection = ({ children, ...props }: LeaveRequestSectionProps) => {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors }
	} = useForm<ILeaveRequestForm>();

	const onSubmit = (data: ILeaveRequestForm) => {
		console.log(data);
	};

	return (
		<div className={styles.leaveRequestSection} {...props}>
			<ContentBlock color="white" size="large" className={styles.head}>
				<HTag tag="h1" color="black">
					Заявка на подбор оборудования
				</HTag>
				<ContentBlock color="blue" size="small" className={styles.headBlock}>
					<Image src="icon.svg" alt="downloadB" width={37} height={37} />
					<HTag tag="h3_medium" color="white">
						Заполните заявку на бесплатный расчёт
					</HTag>
				</ContentBlock>
				<ContentBlock color="blue" size="small" className={styles.headBlock}>
					<Image src="icon.svg" alt="downloadB" width={37} height={37} />
					<HTag tag="h3_medium" color="white">
						Мы сформируем оптимальный список требуемого
					</HTag>
				</ContentBlock>
			</ContentBlock>
			<form onSubmit={handleSubmit(onSubmit)}>
				<ContentBlock color="white" size="large" className={styles.reqAll}>
					<ContentBlock color="gray" size="large">
						<div className={styles.headReq}>
							<HTag tag="h4_bold" color="white">
								Шаг 1.
							</HTag>
							<HTag tag="h4_medium" color="white">
								Ваши контактные данные
							</HTag>
						</div>
						<div className={styles.person}>
							<div>
								<Input
									{...register("fio", { required: { value: true, message: "Заполните ФИО" } })}
									name="fio"
									placeholder="ФИО"
									error={errors.fio}
								/>
								<Input
									{...register("companyName", {
										required: { value: true, message: "Заполните название компании" }
									})}
									name="companyName"
									placeholder="Компания"
									error={errors.companyName}
								/>
								<Input
									{...register("city", { required: { value: true, message: "Заполните город" } })}
									name="city"
									placeholder="Город"
									error={errors.city}
								/>
							</div>
							<div>
								<Input
									{...register("email", { required: { value: true, message: "Заполните email" } })}
									name="email"
									placeholder="email"
									error={errors.email}
								/>
								<Input
									{...register("phone", { required: { value: true, message: "Заполните телефон" } })}
									name="phone"
									placeholder="Номер телефона"
									error={errors.phone}
								/>
							</div>
						</div>
					</ContentBlock>
					<div className={styles.reqColumns}>
						<div className={styles.reqRows}>
							<ContentBlock color="gray" size="large">
								<div className={styles.headReq}>
									<HTag tag="h4_bold" color="white">
										Шаг 2.
									</HTag>
									<HTag tag="h4_medium" color="white">
										Объект наблюдения
									</HTag>
								</div>
								<div>
									<Controller
										name="objectType"
										control={control}
										rules={{ required: "Выберите объект" }}
										render={({ field }) => (
											<div
												className={`${styles.objects} ${errors.objectType ? styles.error : ""}`}
											>
												<div>
													<Checkbox
														checked={field.value === "apartment"}
														onChange={() => field.onChange("apartment")}
														label="Квартира"
													/>
													<Checkbox
														checked={field.value === "home"}
														onChange={() => field.onChange("home")}
														label="Дом"
													/>
													<Checkbox
														checked={field.value === "garage"}
														onChange={() => field.onChange("garage")}
														label="Гараж"
													/>
													<Checkbox
														checked={field.value === "office"}
														onChange={() => field.onChange("office")}
														label="Офис"
													/>
												</div>
												<div>
													<Checkbox
														checked={field.value === "shop"}
														onChange={() => field.onChange("shop")}
														label="Магазин"
													/>
													<Checkbox
														checked={field.value === "warehouse"}
														onChange={() => field.onChange("warehouse")}
														label="Склад"
													/>
													<Checkbox
														checked={field.value === "manufacture"}
														onChange={() => field.onChange("manufacture")}
														label="Производственное помещение"
													/>
													<Checkbox
														checked={field.value === "education"}
														onChange={() => field.onChange("education")}
														label="Учебное заведение"
													/>
												</div>
												{errors.objectType && (
													<span className={styles.errorText}>
														{errors.objectType.message}
													</span>
												)}
											</div>
										)}
									/>
								</div>
							</ContentBlock>
							<ContentBlock color="gray" size="large">
								<div className={styles.headReq}>
									<HTag tag="h4_bold" color="white">
										Шаг 4.
									</HTag>
									<HTag tag="h4_medium" color="white">
										Разрешение видео
									</HTag>
								</div>
								<div>
									<Controller
										name="qualityType"
										control={control}
										rules={{ required: "Выберите качество" }}
										render={({ field }) => (
											<div
												className={`${styles.objects} ${
													errors.qualityType ? styles.error : ""
												}`}
											>
												<div>
													<Checkbox
														checked={field.value === "low"}
														onChange={() => field.onChange("low")}
														label="Низкое"
													/>
													<Checkbox
														checked={field.value === "medium"}
														onChange={() => field.onChange("medium")}
														label="Среднее"
													/>
												</div>
												<div>
													<Checkbox
														checked={field.value === "high"}
														onChange={() => field.onChange("high")}
														label="Высокое"
													/>
													<Checkbox
														checked={field.value === "fullhd"}
														onChange={() => field.onChange("fullhd")}
														label="FullHD"
													/>
												</div>
												{errors.qualityType && (
													<span className={styles.errorText}>
														{errors.qualityType.message}
													</span>
												)}
											</div>
										)}
									/>
								</div>
							</ContentBlock>
							<ContentBlock color="gray" size="large">
								<div className={styles.headReq}>
									<HTag tag="h4_bold" color="white">
										Шаг 6.
									</HTag>
									<HTag tag="h4_medium" color="white">
										Расстояние от камер до видеорегистратора
									</HTag>
								</div>
								<div>
									<Controller
										name="distanceCameras"
										control={control}
										rules={{ required: "Укажите расстояние" }}
										render={({ field }) => (
											<div
												className={`${styles.objects} ${
													errors.distanceCameras ? styles.error : ""
												}`}
											>
												<div>
													<Checkbox
														checked={field.value === "upTo100Meters"}
														onChange={() => field.onChange("upTo100Meters")}
														label="Менее 100м"
													/>
													<Checkbox
														checked={field.value === "from100To300Meters"}
														onChange={() => field.onChange("from100To300Meters")}
														label="100 - 300м"
													/>
												</div>
												<div>
													<Checkbox
														checked={field.value === "from300To1000Meters"}
														onChange={() => field.onChange("from300To1000Meters")}
														label="300 - 1000м"
													/>
													<Checkbox
														checked={field.value === "MoreThan1000Meters"}
														onChange={() => field.onChange("MoreThan1000Meters")}
														label="Более 1000м"
													/>
												</div>
												{errors.distanceCameras && (
													<span className={styles.errorText}>
														{errors.distanceCameras.message}
													</span>
												)}
											</div>
										)}
									/>
								</div>
							</ContentBlock>
							<ContentBlock color="gray" size="large">
								<div className={styles.headReq}>
									<HTag tag="h4_bold" color="white">
										Шаг 8.
									</HTag>
									<HTag tag="h4_medium" color="white">
										Назначение камер
									</HTag>
								</div>
								<div className={styles.objectsSelect}>
									<Select
										{...register("purpose", {
											required: { value: true, message: "Заполните назначение камер" }
										})}
										error={errors.purpose}
										defaultValue=""
									>
										<option value="" hidden disabled>
											Выберите назначение камер
										</option>
										<option value="Уличные камеры">Уличные камеры</option>
										<option value="Камеры длы помещения">Камеры длы помещения</option>
										<option value="Промзона">Промзона</option>
										<option value="Распознавание лиц">Распознавание лиц</option>
									</Select>
								</div>
							</ContentBlock>
						</div>
						<div className={styles.reqRows}>
							<ContentBlock color="gray" size="large">
								<div className={styles.headReq}>
									<HTag tag="h4_bold" color="white">
										Шаг 3.
									</HTag>
									<HTag tag="h4_medium" color="white">
										Размер помещения
									</HTag>
								</div>
								<div>
									<Controller
										name="roomSize"
										control={control}
										rules={{ required: "Укажите расстояние" }}
										render={({ field }) => (
											<div className={`${styles.objects} ${errors.roomSize ? styles.error : ""}`}>
												<div>
													<Checkbox
														checked={field.value === "upTo20Meters"}
														onChange={() => field.onChange("upTo20Meters")}
														label="Менее 20м"
													/>
													<Checkbox
														checked={field.value === "from20To50Meters"}
														onChange={() => field.onChange("from20To50Meters")}
														label="20 - 50м"
													/>
												</div>
												<div>
													<Checkbox
														checked={field.value === "from50To100Meters"}
														onChange={() => field.onChange("from50To100Meters")}
														label="50 - 100м"
													/>
													<Checkbox
														checked={field.value === "MoreThan100Meters"}
														onChange={() => field.onChange("MoreThan100Meters")}
														label="Более 100м"
													/>
												</div>
												{errors.roomSize && (
													<span className={styles.errorText}>{errors.roomSize.message}</span>
												)}
											</div>
										)}
									/>
								</div>
							</ContentBlock>
							<ContentBlock color="gray" size="large">
								<div className={styles.headReq}>
									<HTag tag="h4_bold" color="white">
										Шаг 5.
									</HTag>
									<HTag tag="h4_medium" color="white">
										Объем видеоархива
									</HTag>
								</div>
								<div>
									<Controller
										name="archiveSize"
										control={control}
										rules={{ required: "Укажите размер архива" }}
										render={({ field }) => (
											<div
												className={`${styles.objects} ${
													errors.archiveSize ? styles.error : ""
												}`}
											>
												<div>
													<Checkbox
														checked={field.value === "threeDays"}
														onChange={() => field.onChange("threeDays")}
														label="до 3-х дней"
													/>
													<Checkbox
														checked={field.value === "sevenDays"}
														onChange={() => field.onChange("sevenDays")}
														label="до 7-ми дней"
													/>
													<Checkbox
														checked={field.value === "fourteenDays"}
														onChange={() => field.onChange("fourteenDays")}
														label="до 14-ти дней"
													/>
												</div>
												<div>
													<Checkbox
														checked={field.value === "month"}
														onChange={() => field.onChange("month")}
														label="1 месяц"
													/>
													<Checkbox
														checked={field.value === "moreThanMonth"}
														onChange={() => field.onChange("moreThanMonth")}
														label="Более 1 месяца"
													/>
												</div>
												{errors.archiveSize && (
													<span className={styles.errorText}>
														{errors.archiveSize.message}
													</span>
												)}
											</div>
										)}
									/>
								</div>
							</ContentBlock>
							<ContentBlock color="gray" size="large">
								<div className={styles.headReq}>
									<HTag tag="h4_bold" color="white">
										Шаг 7.
									</HTag>
									<HTag tag="h4_medium" color="white">
										Расстояние от камер до источника питания
									</HTag>
								</div>
								<div>
									<Controller
										name="distanceSupply"
										control={control}
										rules={{ required: "Укажите расстояние" }}
										render={({ field }) => (
											<div
												className={`${styles.objects} ${
													errors.distanceSupply ? styles.error : ""
												}`}
											>
												<div>
													<Checkbox
														checked={field.value === "upTo10Meters"}
														onChange={() => field.onChange("upTo10Meters")}
														label="Менее 10м"
													/>
													<Checkbox
														checked={field.value === "from10To30Meters"}
														onChange={() => field.onChange("from10To30Meters")}
														label="10 - 30м"
													/>
												</div>
												<div>
													<Checkbox
														checked={field.value === "from30To50Meters"}
														onChange={() => field.onChange("from30To50Meters")}
														label="30 - 50м"
													/>
													<Checkbox
														checked={field.value === "MoreThan50Meters"}
														onChange={() => field.onChange("MoreThan50Meters")}
														label="Более 50м"
													/>
												</div>
												{errors.distanceSupply && (
													<span className={styles.errorText}>
														{errors.distanceSupply.message}
													</span>
												)}
											</div>
										)}
									/>
								</div>
							</ContentBlock>
							<ContentBlock color="gray" size="large">
								<div className={styles.headReq}>
									<HTag tag="h4_bold" color="white">
										Шаг 9.
									</HTag>
									<HTag tag="h4_medium" color="white">
										Количество камер
									</HTag>
								</div>
								<div className={styles.person}>
									<div>
										<Input
											{...register("numberCameras", {
												required: { value: true, message: "Введите количество камер" }
											})}
											name="numberCameras"
											placeholder="Количество камер"
											error={errors.numberCameras}
										/>
									</div>
								</div>
							</ContentBlock>
						</div>
					</div>
					<ContentBlock color="gray" size="large">
						<div className={styles.headReq}>
							<HTag tag="h4_bold" color="white">
								Шаг 10.
							</HTag>
							<HTag tag="h4_medium" color="white">
								Ваши пожелания и замечания
							</HTag>
						</div>
						<div className={styles.textarea}>
							<Textarea {...register("comment")} placeholder="Введите текст..." />
							<Button appearance="primary" />
						</div>
					</ContentBlock>
				</ContentBlock>
			</form>
			{children}
		</div>
	);
};
