"use client";

import Link from "next/link";
import { X } from "lucide-react";

const SearchFormReset = () => {
    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement;
        if (form) form.reset();
    };

    return (
        <button type="reset" onClick={reset} className="ml-[-125px] bg-black rounded-full p-2 flex items-center justify-center cursor-pointer text-white">
            <Link href="/">
                <X className="size-4" />
            </Link>
        </button>
    );
};

export default SearchFormReset;
