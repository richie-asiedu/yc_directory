"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { StartupCard } from "./StartupCards";
import { client } from "@/lib/sanity";
import { getAllStartupsQuery, searchStartupsQuery } from "@/lib/queries";
import { createStartup, createAuthor, updateStartupViews } from "@/lib/mutations";

interface StartupCardContextType {
  startups: StartupCard[];
  loading: boolean;
  error: string | null;
  addStartup: (startupData: {
    title: string;
    description: string;
    category: string;
    image: string;
    pitch: string;
    authorName?: string;
    authorEmail?: string;
  }) => Promise<void>;
  searchStartups: (query: string) => Promise<void>;
  refreshStartups: () => Promise<void>;
  incrementViews: (startupId: string) => Promise<void>;
}

const StartupCardContext = createContext<StartupCardContextType | undefined>(undefined);

export function StartupCardProvider({ children }: { children: ReactNode }) {
  const [startups, setStartups] = useState<StartupCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch startups from Sanity
  const fetchStartups = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await client.fetch(getAllStartupsQuery);
      setStartups(data);
    } catch (err) {
      console.error('Error fetching startups:', err);
      setError('Failed to fetch startups');
    } finally {
      setLoading(false);
    }
  };

  // Search startups
  const searchStartups = async (query: string) => {
    try {
      setLoading(true);
      setError(null);
      if (!query.trim()) {
        await fetchStartups();
        return;
      }
      const data = await client.fetch(searchStartupsQuery, { query: `*${query}*` } as any);
      setStartups(data);
    } catch (err) {
      console.error('Error searching startups:', err);
      setError('Failed to search startups');
    } finally {
      setLoading(false);
    }
  };

  // Add new startup
  const addStartup = async (startupData: {
    title: string;
    description: string;
    category: string;
    image: string;
    pitch: string;
    authorName?: string;
    authorEmail?: string;
  }) => {
    try {
      setError(null);
      
      // Create author if provided
      let authorId: string | undefined;
      if (startupData.authorName) {
        const authorResult = await createAuthor({
          name: startupData.authorName,
          email: startupData.authorEmail,
          image: '/avator1.png', // Default avatar
        });
        authorId = authorResult._id;
      }

      // Create startup
      const result = await createStartup({
        ...startupData,
        authorId,
      });

      // Refresh the list
      await fetchStartups();
    } catch (err) {
      console.error('Error adding startup:', err);
      setError('Failed to add startup');
      throw err;
    }
  };

  // Increment views
  const incrementViews = async (startupId: string) => {
    try {
      await updateStartupViews(startupId);
      // Update local state
      setStartups(prev => 
        prev.map(startup => 
          startup._id === startupId 
            ? { ...startup, views: startup.views + 1 }
            : startup
        )
      );
    } catch (err) {
      console.error('Error incrementing views:', err);
    }
  };

  // Refresh startups
  const refreshStartups = async () => {
    await fetchStartups();
  };

  // Load startups on mount
  useEffect(() => {
    fetchStartups();
  }, []);

  return (
    <StartupCardContext.Provider value={{ 
      startups, 
      loading, 
      error, 
      addStartup, 
      searchStartups, 
      refreshStartups,
      incrementViews,
    }}>
      {children}
    </StartupCardContext.Provider>
  );
}
export function useStartupCards() {
  const context = useContext(StartupCardContext);
  if (!context) throw new Error("useStartupCards must be used within a StartupCardProvider");
  return context;
}


