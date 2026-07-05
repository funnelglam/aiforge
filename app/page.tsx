import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/landing/Hero";
import CommandBox from "@/components/landing/CommandBox";
import Categories from "@/components/landing/Categories";
import WorkflowGrid from "@/components/landing/WorkflowGrid";
import WhyForge from "@/components/landing/WhyForge";
import Features from "@/components/landing/Features";
import Trusted from "@/components/landing/Trusted";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <CommandBox />

      <Categories />

      <WorkflowGrid />

      <WhyForge />

      <Features />

      <Trusted />

      <Pricing />

      <FAQ />

      <Footer />
    </>
  );
}