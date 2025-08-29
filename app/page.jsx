
import { AboutPreview } from "@/components/sections/about-preview";
import ContactCTA from "@/components/sections/contact-cta";
import { Hero } from "@/components/sections/hero";
import { ProjectsShowcase } from "@/components/sections/projects-showcase";
import { ServicesOverview } from "@/components/sections/services-overview";
import GallerySection, { Gallery } from "@/components/sections/gallery";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesOverview />
      <AboutPreview />
      <ProjectsShowcase />
      <Gallery />
      <ContactCTA />
    </div>
  );
}
