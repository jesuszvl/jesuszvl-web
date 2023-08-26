import ProfileHero from "../src/components/ProfileHero/ProfileHero";
import Experience from "../src/components/Experience/Experience";
import Portfolio from "../src/components/Portfolio/Portfolio";
import PageContainer from "../src/components/PageContainer/PageContainer";
import Skills from "../src/components/Skills/Skills";

export default function Index() {
  return (
    <PageContainer title="Jesús Zavala | Home">
      <ProfileHero />
      <Portfolio />
      <Skills />
      <Experience />
    </PageContainer>
  );
}
