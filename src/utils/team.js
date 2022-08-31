import { colors } from ".";
import allPeople from "./people";

let team = [];

let parsedTeam = allPeople;

parsedTeam.forEach((e) => {
	let parsedObj = {
		name: e["Name"],
		email: e["Email Address"],
		mail: e["Personal Email"],
		tel: e["Phone No."],
		image: e["Profile Photo (preferably focused on face)"],
		title: e["Designation(E.g:- Web Developer, Graphic Designer, CP, etc)"],
		status: e[
			"A one liner to describe yourself.(E.g:- I am an avid learner, always on the hunt for new experiences)"
		],
		insta: e["Instagram username"],
		linkedin: e["LinkedIn Username"],
		twitter: e["Twitter Username"],
		roll: e["Roll No."],
	};
	let obj = {
		name: parsedObj.name,
		image:
			"https://drive.google.com/uc?export=view&id=" +
			parsedObj.image.slice(33, parsedObj.image.length),
		title: parsedObj.title,
		status: parsedObj.status,
		email: parsedObj.email,
		socials: [
			{
				service: "Linkedin",
				username: parsedObj.linkedin,
			},
			{
				service: "Instagram",
				username: parsedObj.insta,
			},
			{
				service: "Phone",
				username: parsedObj.tel,
			},
			{
				service: "Mail",
				username: parsedObj.mail,
			},
			{
				service: "Twitter",
				username: parsedObj.twitter,
			},
		],
		color: colors[Math.floor(Math.random() * 15)],
	};
	team = [...team, obj];
});

let cooridnators = [];
let volunteers = [];
let mentors = [];
let office = [];

team.forEach((member) => {
	if (member.email.slice(0, 2) === "19") mentors = [...mentors, member];
	else if (member.email.slice(0, 2) === "20")
		cooridnators = [...cooridnators, member];
	else if (member.email.slice(0, 2) === "21")
		volunteers = [...volunteers, member];
	if (
		member.email === "19331@iiitu.ac.in" ||
		member.email === "19137@iiitu.ac.in" ||
		member.email === "19307@iiitu.ac.in"
	)
		office = [...office, member];
});
let faculty = [
	{
		image: "https://raw.githubusercontent.com/akshatmittal61/skillabhyudaya-team-8/master/team/director.jpg",
		name: "Dr. S Selvakumar",
		title: "Director IIIT Una",
	},
	{
		image: "https://raw.githubusercontent.com/akshatmittal61/skillabhyudaya-team-8/master/team/vikram.jpg",
		name: "Dr. Vikram Kumar",
		title: "Faculty Coordinator",
	},
	{
		image: "https://raw.githubusercontent.com/akshatmittal61/skillabhyudaya-team-8/master/team/ishitavaidya.jpg",
		name: "Ms. Ishita Vaidya",
		title: "Faculty Coordinator",
	},
];

export { cooridnators, volunteers, mentors, office, faculty };

team = [
	{
		title: "Faculty Coordinators",
		members: faculty,
	},
	{
		title: "Office Bearers",
		members: office,
	},
	{
		title: "Mentors",
		members: mentors,
	},
	{
		title: "Coordinators",
		members: cooridnators,
	},
	{
		title: "Volunteers",
		members: volunteers,
	},
];

export default team;
