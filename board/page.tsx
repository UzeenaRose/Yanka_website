import { Header } from "@/components/board/Header";
import { LeadershipHero } from "@/components/board/Hero";
import { BoardOfDirectors } from "@/components/board/BOD";
import { ExecutiveTeam } from "@/components/board/ExecTeam";
import { Footer } from "@/components/board/Footer";

export default function LeadershipPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#080c18]">
      <Header />
      <main className="flex-grow">
        <LeadershipHero />
        <BoardOfDirectors />
        <ExecutiveTeam />
      </main>
      <Footer />
    </div>
  );
}