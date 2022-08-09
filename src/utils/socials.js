import { Facebook, GitHub, Instagram, Linkedin, Mail } from "react-feather";

const socials = [
	{
		link: "https://www.instagram.com/teamaavesh/",
		icon: <Instagram />,
		text: "Instagram",
		username: "teamaavesh",
		linkText: "instagram.com/teamaavesh",
	},
	{
		link: "https://www.facebook.com/TeamAAVESH/",
		icon: <Facebook />,
		text: "Facebook",
		username: "TeamAAVESH",
		linkText: "instagram.com/TeamAAVESH",
	},
	{
		link: "https://www.linkedin.com/company/aavesh-iiitu/",
		icon: <Linkedin />,
		text: "LinkedIn",
		username: "aavesh-iiitu",
		linkText: "linkedin.com/company/aavesh-iiitu",
	},
	{
		link: "https://github.com/aavesh-iiitu",
		icon: <GitHub />,
		text: "GitHub",
		username: "aavesh-iiitu",
		linkText: "github.com/aavesh-iiitu",
	},
	{
		link: "mailto:aavesh@iiitu.ac.in",
		icon: <Mail />,
		text: "Email",
		username: "aavesh@iiitu.ac.in",
		linkText: "aavesh@iiitu.ac.in",
	},
];

export default socials;
