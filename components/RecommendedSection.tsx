"use client";
import { StartupCards } from "./StartupCardsComponent";
import { StartupCard, defaultStartupCards } from "./StartupCards";

export default function RecommendedSection({ query, startups, loading, error }: { query: string; startups: StartupCard[]; loading?: boolean; error?: string | null }) {
  const sourceCards: StartupCard[] =
    Array.isArray(startups) && startups.length > 0 ? startups : (defaultStartupCards as StartupCard[]);

	const q = query.toLowerCase();
  const filteredCards = sourceCards.filter((card) => {
    const title = (card.title ?? "").toLowerCase();
    const desc = (card.desc ?? card.description ?? "").toLowerCase();
    const author = typeof card.author === "string"
      ? card.author.toLowerCase()
      : (card.author?.name ?? "").toLowerCase();
    return title.includes(q) || desc.includes(q) || author.includes(q);
  });

  return (
	<section className="w-full bg-[#F7F7F7] py-12 px-2 md:px-8">
	  {query ? (
        <h1 className="text-black font-sans text-[30px] mb-[15px]">Search results for &quot;{query}&quot;</h1>
	  ) : (
		<h1 className="text-black font-sans text-[30px] mb-[15px]">All Startups</h1>
	  )}
	  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 font-sans">
		<StartupCards startups={filteredCards} loading={loading}  />
	  </div>
	</section>
  );
}
