"use client";
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import RecommendedSection from "@/components/RecommendedSection";

const Page = () => {
  const [query, setQuery] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    setQuery(formData.get("query")?.toString() || "");
  }

  return (
    <>
  <HeroSection query={query} onSubmit={handleSearch} setQuery={setQuery} />
      <RecommendedSection query={query} />
    </>
  );
};

export default Page;