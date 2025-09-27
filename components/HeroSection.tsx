import SearchForm from "./SearchForm";
import React from "react";

interface HeroSectionProps {
	query: string;
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	setQuery: (q: string) => void;
}

export default function HeroSection({ query, onSubmit, setQuery }: HeroSectionProps) {
	return (
		<section
			className="relative w-full min-h-[531px] flex flex-col items-center justify-center overflow-hidden py-20"
			style={{
				backgroundColor: '#EE2B69',
				backgroundImage:
					'repeating-linear-gradient(to right, transparent, transparent 44px, rgba(255, 255, 255, 0.37) 44px, rgba(255, 255, 255, 0.37) 48px)',
			}}
		>
			<div className="relative z-10 flex flex-col items-center w-full px-4">
				<div className="mb-8 flex justify-center w-full">
					<div className="relative inline-block bg-[#fbe843] px-8 py-5 rounded-1xl shadow-md min-w-[271px] md:min-w-[600px]">
						<span
							className="absolute top-2 left-2 w-8 h-8 bg-black"
							style={{
								clipPath: 'polygon(0 0, 0 100%, 100% 0)',
								borderTopLeftRadius: '0.15rem',
							}}
						></span>
						<span
							className="absolute bottom-2 right-2 w-8 h-8 bg-black"
							style={{
								clipPath: 'polygon(100% 100%, 0 100%, 100% 0)',
								borderBottomRightRadius: '0.15rem',
							}}
						></span>
						<span className="block text-2xl md:text-4xl font-extrabold tracking-wide text-black text-center relative z-10">
							PITCH, VOTE, AND GROW
						</span>

					</div>
				</div>

				<h1 className="text-4xl md:text-6xl font-extrabold font-sans text-white text-center bg-black px-6 py-4 rounded-md mb-4 leading-tight shadow-lg">
					PITCH YOUR STARTUP,<br />CONNECT WITH ENTREPRENEURS
				</h1>

				<p className="text-white text-lg md:text-xl mb-8 text-center">
					Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
				</p>

				<div className="w-full max-w-2xl mx-auto">
					<SearchForm query={query} onSubmit={onSubmit} setQuery={setQuery} />
				</div>
			</div>
		</section>
	);
}
