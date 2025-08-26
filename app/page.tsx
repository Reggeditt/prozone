import { Hero } from '@/components/sections/hero';
import { ServicesOverview } from '@/components/sections/services-overview';
import { AboutPreview } from '@/components/sections/about-preview';
import { ProjectsShowcase } from '@/components/sections/projects-showcase';
import { ContactCTA } from '@/components/sections/contact-cta';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesOverview />
      <AboutPreview />
      <ProjectsShowcase />
      <ContactCTA />
    </div>
  );
}
