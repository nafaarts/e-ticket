import Categories from "@/components/Categories";
import CreateEventCTA from "@/components/CreateEventCTA";
import ExploreCTA from "@/components/ExploreCTA";
import { FrequentlyAskedQuestion } from "@/components/FAQ";
import HeroImage from "@/components/HeroImage";
import PopularEvent from "@/components/PopularEvent";
import SuggestedEvent from "@/components/SuggestedEvent";
import ThisWeek from "@/components/ThisWeek";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
      <div className="space-y-3 md:space-y-8">
        <HeroImage />
        <Categories />
        <PopularEvent />
        <SuggestedEvent />
        <ThisWeek />
        <ExploreCTA />
        <CreateEventCTA />
        <FrequentlyAskedQuestion />
      </div>
    </main>
  );
}
