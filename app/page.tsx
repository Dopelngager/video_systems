import { RunLine } from "./components/RunLine/RunLine";
import styles from "./page.module.css";
import { MainSection } from "./pages/MainSection/MainSection";
import { AdvantagesSection } from "./pages/AdvantagesSection/AdvantagesSection";
import { ServicesSection } from "./pages/ServicesSection/ServicesSection";
import { WorkSection } from "./pages/WorkSection/WorkSection";
import { GuaranteeSection } from "./pages/GuaranteeSection/GuaranteeSection";
import { PresentationsSection } from "./pages/PresentationsSection/PresentationsSection";
import { PromotionsSection } from "./pages/PromotionsSection/PromotionsSection";
import { LeaveRequestSection } from "./pages/LeaveRequestSection/LeaveRequestSection";
import { Footer } from "./pages/FooterSection/FooterSection";
import { Header } from "./pages/HeaderSection/HeaderSection";

const sections = [
	<Header key="header" id="header" />,
	<MainSection key="main" id="main" />,
	<RunLine key="runline" id="runline" />,
	<AdvantagesSection key="advantages" id="advantages" />,
	<ServicesSection key="services" id="services" />,
	<WorkSection key="work" id="work" />,
	<GuaranteeSection key="guarantee" id="guarantee" />,
	<PresentationsSection key="presentations" id="presentations" />,
	<PromotionsSection key="promotions" id="promotions" />,
	<LeaveRequestSection key="leaverequest" id="leaverequest" />,
	<Footer key="footer" id="footer" />
];

export default function Main() {
	return (
		<div className={styles.main}>
			{sections.map((section, index) =>
				section.type === RunLine ? (
					section
				) : (
					<div key={index} className={styles.container}>
						{section}
					</div>
				)
			)}
		</div>
	);
}
