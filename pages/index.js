import ProfileHero from "../src/components/ProfileHero/ProfileHero";
import Experience from "../src/components/Experience/Experience";
import About from "../src/components/About/About";
import Portfolio from "../src/components/Portfolio/Portfolio";
import { trackPageView } from "../src/utils/analytics";
import PageContainer from "../src/components/PageContainer/PageContainer";

trackPageView("/");

export default function Index() {
  return (
    <PageContainer title="Jesus ZVL | Software Engineer">
      <ProfileHero />
      <About />
      <Portfolio />
      <Experience />
    </PageContainer>
  );
}
