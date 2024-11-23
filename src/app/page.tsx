import { NavHeader } from "@/components/nav-header"
import { WelcomeSection } from "@/components/welcome-section"
import { DatesSection } from "@/components/dates-section"
import { SponsorsSection } from "@/components/sponsers-section"
import { AboutSection } from "@/components/about-section"
import { OrganizersSection } from "@/components/organizers-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50">
      <NavHeader />
      <WelcomeSection />
      <DatesSection />
      <AboutSection/>
      <OrganizersSection/>
      <SponsorsSection />
      <Footer/>
    </main>
  )
}

