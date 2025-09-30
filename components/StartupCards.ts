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
		date: "20 May, 2023",
		views: 232,
		author: "Steven Smith",
		mail: "@stevensmith12",
		avatar: "/avator1.png", 
		title: "EcoTrack",
		desc: "Track your eco footprint and join a community making a difference for the planet.",
		image: "/des1.png",
		main: "EcoCart is an innovative e-commerce platform designed for eco-conscious shoppers looking to make a positive environmental impact with their purchases.Our platform not only helps users find ethically sourced and environmentally responsible products but also offers features like carbon offset tracking, green certifications, and personalized sustainability goals.",
		level: "Senior level",
		highlight: true,
	},
	{
		id: 2,
		date: "20 June, 2022",
		views: 625,
		author: "Smith Rowe",
		mail: "@smithrowe02",
		avatar: "/avator2.png",
		title: "The Smith's Class Of Genius",
		desc: "An online platform connecting creative minds to collaborate and innovate together.",
		image: "/des2.png",
		main: "EcoCart is an innovative e-commerce platform designed for eco-conscious shoppers looking to make a positive environmental impact with their purchases.Our platform not only helps users find ethically sourced and environmentally responsible products but also offers features like carbon offset tracking, green certifications, and personalized sustainability goals.",
		level: "Senior level",
		highlight: true,
	},
	{
		id: 3,
		date: "10 December, 2023",
		views: 402,
		author: "CoderTech",
		mail: "@codertech",
		avatar: "/avator3.png",
		title: "CoderTech Class",
		desc: "Learn coding with interactive lessons and real-world projects for all skill levels.",
		image: "/des3.png",
		main: "EcoCart is an innovative e-commerce platform designed for eco-conscious shoppers looking to make a positive environmental impact with their purchases.Our platform not only helps users find ethically sourced and environmentally responsible products but also offers features like carbon offset tracking, green certifications, and personalized sustainability goals.",
		level: "Mid level",
		highlight: true,
	},
	{
		id: 4,
		date: "20 January, 2023",
		views: 425,
		author: "Victoria Cakes",
		mail: "@victoriacakes14",
		avatar: "/avator4.png",
		title: "Cakes Mastery Class",
		desc: "Master the art of baking with step-by-step video tutorials and expert tips.",
		image: "/des4.png",
		main: "EcoCart is an innovative e-commerce platform designed for eco-conscious shoppers looking to make a positive environmental impact with their purchases.Our platform not only helps users find ethically sourced and environmentally responsible products but also offers features like carbon offset tracking, green certifications, and personalized sustainability goals.",
		level: "Beginner level",
		highlight: true,
	},
	{
		id: 5,
		date: "30 August, 2021",
		views: 892,
		author: "Jack Paul",
		mail: "@jackpaul124",
		avatar: "/avator1.png",
		title: "Jake's Mastery Class",
		desc: "Unlock your potential with personalized coaching and hands-on workshops.",
		image: "/des5.png",
		main: "EcoCart is an innovative e-commerce platform designed for eco-conscious shoppers looking to make a positive environmental impact with their purchases.Our platform not only helps users find ethically sourced and environmentally responsible products but also offers features like carbon offset tracking, green certifications, and personalized sustainability goals.",
		level: "Mid level",
		highlight: true,
	},
	{
		id: 6,
		date: "20 May, 2024",
		views: 502,
		author: "Evans Da Web Dev",
		mail: "@evanswebdev",
		avatar: "/avator2.png",
		title: "Evans Special Class",
		desc: "Advance your web development skills with live sessions and mentorship.",
		image: "/des6.png",
		main: "EcoCart is an innovative e-commerce platform designed for eco-conscious shoppers looking to make a positive environmental impact with their purchases.Our platform not only helps users find ethically sourced and environmentally responsible products but also offers features like carbon offset tracking, green certifications, and personalized sustainability goals.",
		level: "Senior level",
		highlight: true,
	},
	{
		id: 7,
		date: "20 June, 2025",
		views: 70,
		author: "Ahcid Da Designer",
		mail: "@ahciddadesigner04",
		avatar: "/avator3.png",
		title: "Ahcid Da Designer's Mastery Class",
		desc: "Design like a pro with exclusive resources and a supportive creative community.",
		image: "/des7.png",
		main: "EcoCart is an innovative e-commerce platform designed for eco-conscious shoppers looking to make a positive environmental impact with their purchases.Our platform not only helps users find ethically sourced and environmentally responsible products but also offers features like carbon offset tracking, green certifications, and personalized sustainability goals.",
		level: "Senior level",
		highlight: true,
	},
	{
		id: 8,
		date: "28 September, 2022",
		views: 1040,
		author: "Rich Dev",
		mail: "@richdev11",
		avatar: "/avator4.png",
		title: "RichDev Mastery Class",
		desc: "Grow your tech career with expert-led masterclasses and networking events.",
		image: "/des8.png",
		main: "EcoCart is an innovative e-commerce platform designed for eco-conscious shoppers looking to make a positive environmental impact with their purchases.Our platform not only helps users find ethically sourced and environmentally responsible products but also offers features like carbon offset tracking, green certifications, and personalized sustainability goals.",
		level: "Senior level",
		highlight: true,
	},
	{
		id: 9,
		date: "28 March, 2022",
		views: 350,
		author: "Rich Smith",
		mail: "@richsmith09",
		avatar: "/avator2.png",
		title: "Smith's Mastery Class",
		desc: "Achieve mastery in your field with immersive learning and practical experience.",
		image: "/des9.png",
		main: "EcoCart is an innovative e-commerce platform designed for eco-conscious shoppers looking to make a positive environmental impact with their purchases.Our platform not only helps users find ethically sourced and environmentally responsible products but also offers features like carbon offset tracking, green certifications, and personalized sustainability goals.",
		level: "Mid level",
		highlight: true,
	},
	{
		id: 10,
		date: "1 November, 2024",
		views: 350,
		author: "Lamine Yamal",
		mail: "@lamineyamal10",
		avatar: "/avator1.png",
		title: "Lamine's Class Of Genius",
		desc: "Kickstart your journey with beginner-friendly courses and community support.",
		image: "/des10.png",
		main: "EcoCart is an innovative e-commerce platform designed for eco-conscious shoppers looking to make a positive environmental impact with their purchases.Our platform not only helps users find ethically sourced and environmentally responsible products but also offers features like carbon offset tracking, green certifications, and personalized sustainability goals.",
		level: "Beginner level",
		highlight: true,
	},
];