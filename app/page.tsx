// Server component — no client JS at the root level.
// ProgramTabs is the only "use client" component on the page.

import SiteHeader from "@/components/SiteHeader"
import HeroSection from "@/components/HeroSection"
import ProgramTabs from "@/components/ProgramTabs"
import UpdatesSection from "@/components/UpdatesSection"
import VideosSection from "@/components/VideosSection"
import ContactFooter from "@/components/ContactFooter"

export default function AdmissionsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ProgramTabs />
<UpdatesSection />
        <VideosSection />
        <ContactFooter />
      </main>
    </>
  )
}
