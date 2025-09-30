"use client";
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import RecommendedSection from "@/components/RecommendedSection";
import { StartupCardProvider, useStartupCards } from "@/components/StartupCardContext";

function Page() {
  const [query, setQuery] = useState("");
  const { startups, loading, error, searchStartups } = useStartupCards();

  async function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const searchQuery = formData.get("query")?.toString() || "";
    setQuery(searchQuery);
    await searchStartups(searchQuery);
  }

  return (
    <>
      <HeroSection query={query} onSubmit={handleSearch} setQuery={setQuery} />
      <RecommendedSection 
        query={query} 
        startups={startups} 
        loading={loading}
        error={error}
      />
    </>
  );
}

export default function MainPageWrapper() {
  return (
    <StartupCardProvider>
      <Page />
    </StartupCardProvider>
  );
}