import { NatureHero } from "@/components/NatureHero";
import { RegenerativeIntro } from "@/components/RegenerativeIntro";
import { NatureStatement } from "@/components/NatureStatement";
import { ProtectNature } from "@/components/ProtectNature";
import { NaturePositive } from "@/components/NaturePositive";
import { ForestCarbon } from "@/components/ForestCarbon";
import { RegenerativeCarbon } from "@/components/RegenerativeCarbon";
import { NatureContact } from "@/components/NatureContact";

export default function SustainabilityNaturePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <NatureHero />
      <RegenerativeIntro />
      <NatureStatement />
      <ProtectNature />
      <NaturePositive />
      <ForestCarbon />
      <RegenerativeCarbon />
      <NatureContact />
    </main>
  );
}