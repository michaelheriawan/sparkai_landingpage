import BlogSection from "@/components/BlogSection";
import CompanySection from "@/components/CompanySection";
import CTASection from "@/components/CtaSection";
import DefSection from "@/components/DefSection";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavbarFixed from "@/components/NavbarFixed";

export default function Home() {
  return (
    <>
      <NavbarFixed />
      <Header />
      <CompanySection />
      <DefSection />
      <FeatureSection />
      <CTASection />
      <BlogSection />
      <Footer />
    </>
  );
}
