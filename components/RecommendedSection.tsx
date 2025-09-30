"use client";
import { StartupCards } from "./StartupCardsComponent";
import { StartupCard, defaultStartupCards } from "./StartupCards";

export default function RecommendedSection({ query, startups }: { query: string; startups: StartupCard[] }) {
  const sourceCards = (Array.isArray(startups) && startups.length > 0) ? startups : (defaultStartupCards as unknown as StartupCard[]);
  const filteredCards = sourceCards.filter(card => {
	const q = query.toLowerCase();
	const title = (card as any).title ? String((card as any).title).toLowerCase() : "";
	const desc = (card as any).desc ? String((card as any).desc).toLowerCase() : "";
	const authorValue = (card as any).author;
	const author = typeof authorValue === "string"
	  ? authorValue.toLowerCase()
	  : authorValue && typeof authorValue === "object" && "name" in authorValue
	    ? String((authorValue as any).name).toLowerCase()
	    : "";

	return (
	  title.includes(q) ||
	  desc.includes(q) ||
	  author.includes(q)
	);
  });

  return (
	<section className="w-full bg-[#F7F7F7] py-12 px-2 md:px-8">
	  {query ? (
		<h1 className="text-black font-sans text-[30px] mb-[15px]">Search results for "{query}"</h1>
	  ) : (
		<h1 className="text-black font-sans text-[30px] mb-[15px]">All Startups</h1>
	  )}
	  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 font-sans">
		<StartupCards startups={filteredCards} />
	  </div>
	</section>
  );
}
