import Navbar from "@/components/Navbar"
import Image from "next/image";
import Link from "next/link";

const cards = [
	{
		date: "20 May, 2023",
		views: 232,
		author: "Steven Smith",
		avatar: "/avator2.png",
		title: "Geovaine",
		desc: "A mobile app that helps users track and reduce their carbo and...",
		image: "/card.png",
		level: "Senior level",
	},
	{
		date: "21 May, 2023",
		views: 120,
		author: "Jane Doe",
		avatar: "/avator3.png",
		title: "EcoTrack",
		desc: "Track your eco footprint and shop greener.",
		image: "/des1.png",
		level: "Intermediate",
	},
	{
		date: "22 May, 2023",
		views: 98,
		author: "John Smith",
		avatar: "/avator4.png",
		title: "GreenCart",
		desc: "Marketplace for sustainable products.",
		image: "/des2.png",
		level: "Beginner",
	},
];

export default function DetailsPage() {
	return (
		<>
		 <Navbar />
			<div className="w-full bg-[#EE2B69] min-h-[380px] mb-8 mt-[3%] relative overflow-hidden">
				<div className="absolute inset-0 pointer-events-none" style={{ background: "repeating-linear-gradient(90deg,rgba(255, 255, 255, 0.37) 0 3px,transparent 8px 70px)" }} />
				<div className="mb-8 flex justify-center w-full">
					<div className="relative inline-block bg-[#fbe843] px-3 py-3 mt-[10%] sm:mt-[4%] rounded-1xl shadow-md min-w-[80px] md:min-w-[80px]">
						<span
							className="absolute top-2 left-2 w-3 h-3 bg-black"
							style={{
								clipPath: 'polygon(0 0, 0 100%, 100% 0)',
								borderTopLeftRadius: '0.15rem',
							}}
						></span>
						<span
							className="absolute bottom-2 right-2 w-3 h-3 bg-black"
							style={{
								clipPath: 'polygon(100% 100%, 0 100%, 100% 0)',
								borderBottomRightRadius: '0.15rem',
							}}
						></span>
						<span className="block text-[20px] md:text-2xl font-extrabold tracking-wide text-black text-center relative z-10">
							OCTOBER 5, 2024
						</span>

					</div>
				</div>
				<h1 className="relative z-10 text-4xl md:text-[55px] font-extrabold text-white text-center tracking-wide">
					<span className="flex justify-center text-center bg-black px-15 py-5 rounded shadow-lg inline-block font-sans font-extrabold">JSM ACADEMY MASTERCLASS</span>
				</h1>
				<div className="flex justify-center w-full">
					<p className="text-white  text-[20px] text-center mt-4 w-full max-w-[60%]">An online platform offering project-based learning for web developers, aimed at leveling up junior to mid-level developers by focusing on real-world applications.</p>
				</div>
			</div>

			<main className="min-h-screen">
				<section className="max-w-4xl mx-auto mt-10">
					<Image src="/DI.png" alt="JSM Academy Masterclass" width={800} height={400} className="w-full h-auto rounded-lg shadow-md" />
					<div className="mt-8 flex items-center gap-4">
						<Image src="/avator1.png" alt="Adrian Hajdin" width={48} height={48} className="rounded-full" />
						<div>
							<div className="font-extrabold text-[30px] font-sans">Adrian Hajdin - JS Mastery</div>
							<div className="text-black text-[20px] font-sans">@adrianhajdin</div>
						</div>
						<span className="bg-[#ffe8f0] text-black font-bold px-6 py-2 rounded-full font-sans ml-auto">Education</span>
					</div>

					<div className="mt-6 font-sans">
						<h3 className="font-bold text-[30px] mb-2">Pitch details</h3>
						<div className="text-black text-base leading-relaxed">
							<p><strong>EcoCart</strong> is an innovative e-commerce platform designed for eco-conscious shoppers looking to make a <strong>positive environmental</strong> impact with their purchases.</p>
							<p className="mt-2">We connect users with local businesses that offer <strong>eco-friendly</strong>, sustainable products across categories like home goods, fashion, beauty, and more.</p>
							<p className="mt-2">By partnering with small and medium-sized enterprises committed to sustainability, we aim to reduce carbon footprints and <strong>promote greener consumer choices</strong>.</p>
							<p className="mt-2">Our platform not only helps users find <strong>ethically</strong> sourced and <strong>environmentally responsible</strong> products but also offers features like carbon offset tracking, <strong>green certifications</strong>, and <strong>personalized sustainability goals</strong>.</p>
							<p className="mt-2">EcoCart is built to <strong>encourage mindful shopping</strong>, making it easier for people to reduce waste, support local communities, and contribute to a more <strong>sustainable future</strong>.</p>
							<p className="mt-2">Our mission is simple: <strong>Shop better, live better, and create a greener world—one purchase at a time.</strong></p>
						</div>
					</div>

					<hr className="my-10 border-gray-300" />
					<div className="mb-10">
						<h3 className="font-bold text-[30px] font-sans mb-4">Similar startups</h3>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 font-sans">
							{cards.map((card, idx) => (
								<div key={idx} className="bg-white rounded-[2rem] shadow-6xl p-6 flex flex-col h-full relative border-8 border-black transition-colors duration-200 hover:border-[#EE2B69]" style={{ minHeight: 420 }}>
									<div className="flex justify-between items-center mb-5 border-black">
										<span className="bg-pink-100 text-black text-base font-semibold px-3 py-2 rounded-full">{card.date}</span>
										<span className="flex items-center gap-1 text-black text-lg font-semibold">
											<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 color-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
											</svg>
											{card.views}
										</span>
									</div>
									<div className="flex items-center justify-between mb-1">
										<div>
											<div className="text-base font-semibold text-black leading-tight mb-4">{card.author}</div>
											<div className="text-[26px] font-extrabold text-black leading-tight font-sans">{card.title}</div>
										</div>
										<Image src={card.avatar} alt="avatar" width={48} height={48} className="w-12 h-12 rounded-full object-cover border-2 border-white ml-2" priority />
									</div>
									<div className="text-[#333333] text-[16px] mb-3 leading-snug line-clamp-2 font-sans">{card.desc}</div>
									<div className="w-full aspect-[2/1] rounded-xl overflow-hidden mb-4 bg-gray-100 flex items-center justify-center border border-gray-200">
										<Image src={card.image} alt="project" width={400} height={200} className="object-cover w-full h-full" priority />
									</div>
									<div className="flex justify-between items-center mt-auto pt-2">
										<span className="text-[20px] text-black font-medium font-sans">{card.level}</span>
										<Link href="/details" className="bg-black text-white px-5 py-2 rounded-full font-sans font-semibold text-lg shadow hover:bg-[#EE2B69] transition-colors cursor-pointer">Details</Link>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
