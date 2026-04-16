"use client"

import { Suspense } from "react"
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
      <main className="flex flex-col">
        <HeroSection />
        <UpdatesSection />
        <Suspense fallback={null}>
          <ProgramTabs />
        </Suspense>
        <VideosSection />
        <ContactFooter />
      </main>
    </>
  )
}