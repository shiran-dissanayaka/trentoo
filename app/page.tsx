import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { UniRAG } from "@/components/UniRAG";
import { SelectedWork } from "@/components/SelectedWork";
import { Approach } from "@/components/Approach";
import { Team } from "@/components/Team";
import { TechnicalServices } from "@/components/TechnicalServices";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <UniRAG />
      <SelectedWork />
      <Approach />
      <Team />
      {/* Local / on-site offering — kept low so it doesn't dilute the
          premium studio positioning above. */}
      <TechnicalServices />
      <Contact />
    </>
  );
}
