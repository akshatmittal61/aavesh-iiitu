import { GitHub, Instagram, Linkedin, Mail } from "react-feather";

const socials = [
	{
		link: "https://www.instagram.com/force.iiitu/",
		icon: <Instagram />,
		text: "Instagram",
		username: "force.iiitu",
		linkText: "instagram.com/force.iiitu",
	},
	{
		link: "https://www.linkedin.com/company/force-iiitu/",
		icon: <Linkedin />,
		text: "LinkedIn",
		username: "force-iiitu",
		linkText: "linkedin.com/company/force-iiitu",
	},
	{
		link: "https://github.com/iiitu-force",
		icon: <GitHub />,
		text: "GitHub",
		username: "iiitu-force",
		linkText: "github.com/iiitu-force",
	},
	{
		link: "mailto:clubforce@iiitu.ac.in",
		icon: <Mail />,
		text: "Email",
		username: "clubforce@iiitu.ac.in",
		linkText: "clubforce@iiitu.ac.in",
	},
];

export default socials;
