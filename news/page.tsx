import { Header } from "@/Header";
import { NewsHero } from "@/components/NewsHero";
import { NewsGrid } from "@/components/NewsGrid";
import { NewsCTA } from "@/components/NewsCTA";
import { NewsFooter } from "@/components/NewsFooter";

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NewsHeader />
      <main className="flex-grow">
        <NewsHero />
        <NewsGrid />
        <NewsCTA />
      </main>
      <NewsFooter />
    </div>
  );
}