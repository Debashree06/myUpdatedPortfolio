import { About, HeroSection, Portfolio, Resume, Services } from "@/components";
import PublicLayout from "@/layouts/public";

export default function Home() {
  return (
    <PublicLayout title="Growing Mind">
      <HeroSection />
      <About />
      <Services />
      <Resume />
      <Portfolio />
    </PublicLayout>
  );
}
