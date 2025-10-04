import { StartupCards } from "./StartupCardsComponent";

export interface Author {
	_id: string;
	name: string;
	username?: string;
	email?: string;
	image?: string;
	bio?: string;
}

export interface StartupCard {
	_id: string;
	_createdAt: string;
	title: string;
	slug: {
		current: string;
	};
	author: Author | string;
	views: number;
	description: string;
	category: string;
	image: string;
	pitch: string;

	id?: number;
	date?: string;
	mail?: string;
	avatar?: string;
	desc?: string;
	main?: string;
	level?: string;
	highlight?: boolean;
}


export const defaultStartupCards: StartupCard[] = [
	{
		id: 1,
		title: "EcoTrack",
		author: "Steven Smith",
		views: 232,
		image: "/des1.png",
		date: "01 October, 2025",
		mail: "@stevensmith12",
		avatar: "/avator1.png", 
		description: "Track your eco footprint and join a community making a difference for the planet.",
		main: "EcoCart is an innovative e-commerce platform designed for eco-conscious shoppers looking to make a positive environmental impact with their purchases.Our platform not only helps users find ethically sourced and environmentally responsible products but also offers features like carbon offset tracking, green certifications, and personalized sustainability goals.",
		level: "Senior level",
		highlight: true,
	},
	{
		id: 2,
		title: "The Smith's Class Of Genius",
		author: "Smith Rowe",
		views: 625,
		description: "An online platform connecting creative minds to collaborate and innovate together.",
		image: "/des2.png",
		date: "10 May, 2025",
		mail: "@smithrowe02",
		avatar: "/avator2.png",
		main: "EcoCart is an innovative e-commerce platform designed for eco-conscious shoppers looking to make a positive environmental impact with their purchases.Our platform not only helps users find ethically sourced and environmentally responsible products but also offers features like carbon offset tracking, green certifications, and personalized sustainability goals.",
		level: "Management",
		highlight: true,
	},
	{
		id: 3,
		title: "CoderTech Class",
		author: "CoderTech",
		views: 402,
		description: "Learn coding with interactive lessons and real-world projects for all skill levels.",
		image: "/des3.png",
		date: "10 December, 2024",
		mail: "@codertech",
		avatar: "/avator3.png",
		main: "EcoCart is an innovative e-commerce platform designed for eco-conscious shoppers looking to make a positive environmental impact with their purchases.Our platform not only helps users find ethically sourced and environmentally responsible products but also offers features like carbon offset tracking, green certifications, and personalized sustainability goals.",
		level: "Technology",
		highlight: true,
	},
	{
		id: 4,
		title: "Cakes Mastery Class",
		author: "Victoria Cakes",
		views: 425,
		description: "Master the art of baking with step-by-step video tutorials and expert tips.",
		image: "/des4.png",
		date: "20 August, 2024",
		mail: "@victoriacakes14",
		avatar: "/avator4.png",
		main: "EcoCart is an innovative e-commerce platform designed for eco-conscious shoppers looking to make a positive environmental impact with their purchases.Our platform not only helps users find ethically sourced and environmentally responsible products but also offers features like carbon offset tracking, green certifications, and personalized sustainability goals.",
		level: "Culinary",
		highlight: true,
	},
	{
		id: 5,
		title: "Jake's Mastery Class",
		author: "Jack Paul",
		views: 892,
		description: "Unlock your potential with personalized coaching and hands-on workshops.",
		image: "/des5.png",
		date: "30 June, 2023",
		mail: "@jackpaul124",
		avatar: "/avator1.png",
		main: "EcoCart is an innovative e-commerce platform designed for eco-conscious shoppers looking to make a positive environmental impact with their purchases.Our platform not only helps users find ethically sourced and environmentally responsible products but also offers features like carbon offset tracking, green certifications, and personalized sustainability goals.",
		level: "Personal Development",
		highlight: true,
	},
	{
		id: 6,
		title: "Evans Special Class",
		author: "Evans Da Web Dev",
		views: 502,
		description: "Advance your web development skills with live sessions and mentorship.",
		image: "/des6.png",
		date: "02 May, 2023",
		mail: "@evanswebdev",
		avatar: "/avator2.png",
		main: "EcoCart is an innovative e-commerce platform designed for eco-conscious shoppers looking to make a positive environmental impact with their purchases.Our platform not only helps users find ethically sourced and environmentally responsible products but also offers features like carbon offset tracking, green certifications, and personalized sustainability goals.",
		level: "Technology",
		highlight: true,
	},
	{
		id: 7,
		title: "Ahcid Da Designer's Mastery Class",
		author: "Ahcid Da Designer",
		views: 70,
		description: "Design like a pro with exclusive resources and a supportive creative community.",
		image: "/des7.png",
		date: "05 April, 2023",
		mail: "@dadesigner04",
		avatar: "/avator3.png",
		main: "EcoCart is an innovative e-commerce platform designed for eco-conscious shoppers looking to make a positive environmental impact with their purchases.Our platform not only helps users find ethically sourced and environmentally responsible products but also offers features like carbon offset tracking, green certifications, and personalized sustainability goals.",
		level: "Design",
		highlight: true,
	},
	{
		id: 8,
		title: "RichDev Mastery Class",
		author: "Rich Dev",
		views: 1040,
		description: "Grow your tech career with expert-led masterclasses and networking events.",
		image: "/des8.png",
		date: "28 September, 2022",
		mail: "@richdev11",
		avatar: "/avator4.png",
		main: "EcoCart is an innovative e-commerce platform designed for eco-conscious shoppers looking to make a positive environmental impact with their purchases.Our platform not only helps users find ethically sourced and environmentally responsible products but also offers features like carbon offset tracking, green certifications, and personalized sustainability goals.",
		level: "Senior level",
		highlight: true,
	},
];