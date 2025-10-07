import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
	subsets: ["latin", "cyrillic"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-inter"
});

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
		<html lang="ru" className={inter.variable}>
			<body>{children}</body>
		</html>
	);
}
