export default function HeroSection() {
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

				<form className="w-full max-w-2xl mx-auto">
					<div className="flex items-center bg-white rounded-full shadow-lg border-4 border-black px-6 py-3">
						<input
							type="text"
							placeholder="SEARCH STARTUP"
							className="flex-1 text-xl font-bold outline-none bg-transparent placeholder-black"
						/>
						<button type="submit" className="ml-4 bg-black rounded-full p-2 flex items-center justify-center cursor-pointer">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
							</svg>
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}
