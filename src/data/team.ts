interface TeamMember {
	name: string;
	role: string;
	department: string;
	joined: string;
	image: string;
    portfolio_link: string;
}

const team: TeamMember[] = [
	{
		name: "Julian Macato",
		role: "Software Engineer",
		department: "Operations",
		joined: "Jan 30, 2023",
		image: "/team/julian.png",
        portfolio_link: "https://julianmacato.vercel.app"
	},
	{
		name: "Jameson Gelarman",
		role: "Software Engineer",
		department: "Operations",
		joined: "Feb 15, 2023",
		image: "/team/jameson.png",
        portfolio_link: ""
	},
	{
		name: "Vicente Lepardo",
		role: "Software Engineer",
		department: "Operations",
		joined: "March 10, 2023",
		image: "/team/vicente.jpg",
        portfolio_link: ""
	},


];

export default team;
