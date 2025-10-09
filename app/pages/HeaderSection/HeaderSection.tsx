import styles from "./HeaderSection.module.css";
import { HeaderSectionProps } from "./HeaderSection.props";
import { ContentBlock } from "@/app/components/ContentBlock/ContentBlock";
import Image from "next/image";
import { Navbar } from "@/app/components/Navbar/Navbar";

export const Header = ({ children, ...props }: HeaderSectionProps) => {
	return (
		<div {...props}>
			<ContentBlock color="white" size="large" className={styles.headerSection}>
				<div>
					<Image src="/arsh_head.svg" alt="IconFrame" width={93} height={40} />
					<Navbar />
				</div>
				<p>+7 (843) 253-22-81</p>
			</ContentBlock>
			{children}
		</div>
	);
};
