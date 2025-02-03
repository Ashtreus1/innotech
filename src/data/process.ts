import { ClipboardList, Brush, FileCog, MonitorCog, TabletSmartphone, SearchCode } from "lucide-react";

const processes = [
	{
		title: "Planning",
		description: "Planning and conceptualization of the website's structure and functionality.",
		contents: ["Goals, target audience and website purpose.", "Functional requirements."],
		icon: ClipboardList,
	},
	{
		title: "Design",
		description: "Designing the layout and visual elements of the website.",
		contents: ["Develop UI/UX", "Design responsive layouts"],
		icon: Brush,
	},
	{
		title: "Development",
		description: "Building and implementing the website.",
		contents: ["Develop front-end", "Develop back-end"],
		icon: FileCog,
	},
	{
		title: "Testing",
		description: "Product testing and debugging to ensure smooth and bug-free functionality.",
		contents: ["Ensure mobile responsiveness.", "Fix Bugs and improve peroformance."],
		icon: MonitorCog,
	},
	{
		title: "Review",
		description: "Reviewing the website's performance and user experience.",
		contents: ["Finalize all design and functionality elements.", "Make necessary revisions based on feedback."],
		icon: SearchCode,
	},
	{
		title: "Deployment",
		description: "Deploying the website to a live server or hosting service.",
		contents: ["Publish website", "Conduct final cross-browser testing"],
		icon: TabletSmartphone,
	},
];

export default processes;
