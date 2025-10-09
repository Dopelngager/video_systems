import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Системы видеонаблюдения",
	description: "Установка и продажа систем видеонаблюдения"
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<head>
				<link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon.ico`} />
			</head>
			<body>{children}</body>
		</html>
	);
}
