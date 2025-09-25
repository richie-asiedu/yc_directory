import Image from "next/image";
const cards = [
	{
		id: 1,
		date: "20 May, 2023",
		views: 232,
		author: "Steven Smith",
		avatar: "/avator1.png", 
		title: "EcoTrack",
		desc: "A mobile app that helps users track and reduce their carbo and...",
		image: "/des1.png",
		level: "Senior level",
		highlight: true,
	},
	{
		id: 2,
		date: "20 May, 2023",
		views: 232,
		author: "Steven Smith",
		avatar: "/avator2.png",
		title: "EcoTrack",
		desc: "A mobile app that helps users track and reduce their carbo and...",
		image: "/des2.png",
		level: "Senior level",
		highlight: true,
	},
	{
		id: 3,
		date: "20 May, 2023",
		views: 232,
		author: "Steven Smith",
		avatar: "/avator3.png",
		title: "EcoTrack",
		desc: "A mobile app that helps users track and reduce their carbo and...",
		image: "/des3.png",
		level: "Senior level",
		highlight: true,
	},
	{
		id: 4,
		date: "20 May, 2023",
		views: 232,
		author: "Steven Smith",
		avatar: "/avator4.png",
		title: "EcoTrack",
		desc: "A mobile app that helps users track and reduce their carbo and...",
		image: "/des4.png",
		level: "Senior level",
		highlight: true,
	},
	{
		id: 5,
		date: "20 May, 2023",
		views: 232,
		author: "Steven Smith",
		avatar: "/avator1.png",
		title: "EcoTrack",
		desc: "A mobile app that helps users track and reduce their carbo and...",
		image: "/des1.png",
		level: "Senior level",
		highlight: true,
	},
	{
		id: 6,
		date: "20 May, 2023",
		views: 232,
		author: "Steven Smith",
		avatar: "/avator2.png",
		title: "EcoTrack",
		desc: "A mobile app that helps users track and reduce their carbo and...",
		image: "/des2.png",
		level: "Senior level",
		highlight: true,
	},
	{
		id: 7,
		date: "20 May, 2023",
		views: 232,
		author: "Steven Smith",
		avatar: "/avator3.png",
		title: "EcoTrack",
		desc: "A mobile app that helps users track and reduce their carbo and...",
		image: "/des3.png",
		level: "Senior level",
		highlight: true,
	},
	{
		id: 8,
		date: "20 May, 2023",
		views: 232,
		author: "Steven Smith",
		avatar: "/avator4.png",
		title: "EcoTrack",
		desc: "A mobile app that helps users track and reduce their carbo and...",
		image: "/des4.png",
		level: "Senior level",
		highlight: true,
	},

];

export default function RecommendedSection() {
	return (
		<section className="w-full bg-[#F7F7F7] py-12 px-2 md:px-8">
            <h1 className="text-black font-sans text-[30px] mb-[15px]">Recommended startups</h1>
			<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
				   {cards.map((card, idx) => (
					<div
						key={idx}
						className={`bg-white rounded-[2rem] shadow-6xl p-6 flex flex-col h-full relative border-8 border-black transition-colors duration-200 hover:border-[#EE2B69] ${card.highlight ? "border-black-500" : ""}`}
						style={{ minHeight: 420 }}
					>
						<div className="flex justify-between items-center mb-5 border-black">
							<span className="bg-pink-100 text-black text-base font-semibold px-3 py-2 rounded-full">
								{card.date}
							</span>
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
								<Image
								  src={card.avatar}
								  alt="avatar"
								  width={48}
								  height={48}
								  className="w-12 h-12 rounded-full object-cover border-2 border-white ml-2"
								  priority
								/>
						</div>
						<div className="text-[#333333] text-[16px] mb-3 leading-snug line-clamp-2 font-sans">
							{card.desc}
						</div>
						<div className="w-full aspect-[2/1] rounded-xl overflow-hidden mb-4 bg-gray-100 flex items-center justify-center border border-gray-200">
							<Image
								src={card.image}
								alt="project"
								width={400}
								height={200}
								className="object-cover w-full h-full"
								priority
							 />
						</div>
						<div className="flex justify-between items-center mt-auto pt-2">
							<span className="text-[20px] text-black font-medium font-sans">{card.level}</span>
							<button className="bg-black text-white px-5 py-2 rounded-full font-sans font-semibold text-lg shadow hover:bg-[#EE2B69] transition-colors cursor-pointer">Details</button>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
