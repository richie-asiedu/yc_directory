import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";

import React from "react";

const SearchForm = ({ query = "", onSubmit, setQuery }: { query?: string, onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void, setQuery?: (q: string) => void }) => {
    function handleReset(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        if (setQuery) setQuery("");
    }

    return (
        <form className="w-full max-w-2xl mx-auto search-form" onSubmit={onSubmit} autoComplete="off">
            <div className="flex items-center bg-white rounded-full shadow-lg border-4 border-black px-6 py-3">
                <input
                    type="text"
                    name="query"
                    value={query}
                    onChange={e => setQuery && setQuery(e.target.value)}
                    placeholder="SEARCH STARTUP"
                    className="flex-1 text-xl font-bold font-sans outline-none bg-transparent placeholder-black"
                />
                {query && (
                    <span onClick={handleReset} className="search-reset-btn ml-2 cursor-pointer flex items-center">
                        <SearchFormReset />
                    </span>
                )}
                <button type="submit" className="ml-[-80px] bg-black rounded-full p-2 flex items-center justify-center cursor-pointer search-btn text-white">
                    <Search className="h-7 w-7 text-white" />
                </button>
            </div>
        </form>
    );
};

export default SearchForm;
