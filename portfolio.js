import emoji from "react-easy-emoji";

export const greetings = {
    name: "Ibrahim Mustapha",
    title: "Hi all, I'm Mustapha",
    description:
    `I'm a passionate Full Stack web developer with years of experience in both frontend and backend development.
    I majorly use PHP, Laravel, CodeIgniter, React and MySQL in my day-to-day coding session but I do have
    some experience in nodejs, expressjs and vuejs.`,
    resumeLink:
    "https://drive.google.com/file/d/1Jj4QvvMMhRZQrxngrvlhmuTLhgcisaAp/view?usp=sharing",
};

export const openSource = {
    githubUserName: "1hanzla100",
};

export const contact = {};

export const socialLinks = {
    /* instagram: "https://www.instagram.com/1hanzla100",
	twitter: "https://twitter.com/Mustapha_Tg?t=NR-bIKgjK9oCdOX1_U4qoA&s=09", */
    github: "https://github.com/mustaphatg",
    linkedin: "https://www.linkedin.com/in/mustaphatg/",
    facebook: "https://www.facebook.com/profile.php?id=100055541510379"

};

export const skillsSection = {
    title: "What I do",
    subTitle:
    "PASSIONATE FULL STACK DEVELOPER WHO CONSTANTLY LEARN SO AS TO BE RELEVANT",
    data: [{
        title: "Full Stack Development",
        lottieAnimationFile: "/lottie/skills/fullstack.json",
        // Path of Lottie Animaion JSON File
        skills: [
            emoji(
                "⚡ Building responsive Single-Page-Apps (SPA)  in Reactjs"
            ),
            emoji("⚡ Building responsive dynnamic ebsites using  PHP and Laravel  "),
            emoji(
                "⚡ Building RESTful APIs in  CodeIgniter & Laravel REST Framework"
            ),
        ],
        softwareSkills: [{
            skillName: "HTML-5",
            fontAwesomeClassname: "vscode-icons:file-type-html",
        },
            {
                skillName: "CSS-3",
                fontAwesomeClassname: "vscode-icons:file-type-css",
            },
            {
                skillName: "JavaScript",
                fontAwesomeClassname: "logos:javascript",
            },
            {
                skillName: "Reactjs",
                fontAwesomeClassname: "vscode-icons:file-type-reactjs",
            },
            {
                skillName: "Laravel",
                fontAwesomeClassname: "simple-icons:laravel",
            },
            {
                skillName: "CodeIgniter",
                fontAwesomeClassname: "logos:codeigniter-icon",
            },
            {
                skillName: "MySQL",
                fontAwesomeClassname: "logos:mysql",
            },

            {
                skillName: "Redux",
                fontAwesomeClassname: "logos:redux",
            },
            {
                skillName: "NPM",
                fontAwesomeClassname: "logos:npm-icon",
            },
            {
                skillName: "Yarn",
                fontAwesomeClassname: "logos:yarn",
            },
        ],
    },
        /*{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on multiple cloud platforms"),
				emoji(
					"⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
				),
				emoji(
					"⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
				),
			],
			softwareSkills: [
				// ? Check README To get icon details
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				{
					skillName: "Azure",
					fontAwesomeClassname: "logos:microsoft-azure",
				},
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				{
					skillName: "PostgreSQL",
					fontAwesomeClassname: "logos:postgresql",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
				{
					skillName: "Github Actions",
					fontAwesomeClassname: "logos:github-actions",
				},
				{
					skillName: "Cloudinary",
					fontAwesomeClassname: "logos:cloudinary",
				},
				{
					skillName: "Nginx",
					fontAwesomeClassname: "logos:nginx",
				},
				{
					skillName: "Sentry",
					fontAwesomeClassname: "logos:sentry-icon",
				},
			],
		},
		{
			title: "Blockchain",
			lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Experience in developing Smart Contract using Solidity & Ethereum"
				),
				emoji(
					"⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura"
				),
				emoji(
					"⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles"
				),
				emoji(
					"⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"
				),
				emoji(
					"⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS"
				),
			],
			softwareSkills: [
				{
					skillName: "Ethereum",
					fontAwesomeClassname: "logos:ethereum",
				},
				{
					skillName: "Solidity",
					fontAwesomeClassname: "logos:solidity",
				},
				{
					skillName: "Web3js",
					fontAwesomeClassname: "logos:web3js",
				},
				{
					skillName: "Metamask",
					fontAwesomeClassname: "logos:metamask-icon",
				},
				{
					skillName: "Ganache",
					fontAwesomeClassname: "logos:ganache-icon",
				},
			],
		},*/
    ],
};

export const SkillBars = [{
    Stack: "HML",
    //Insert stack or technology you have experience in
    progressPercentage: "75",
    //Insert relative proficiency in percentage
},
    {
        Stack: "CSS",
        //Insert stack or technology you have experience in
        progressPercentage: "75",
        //Insert relative proficiency in percentage
    },
    {
        Stack: "JavaScript",
        //Insert stack or technology you have experience in
        progressPercentage: "70",
        //Insert relative proficiency in percentage
    },
    {
        Stack: "PHP",
        //Insert stack or technology you have experience in
        progressPercentage: "80",
        //Insert relative proficiency in percentage
    },
    {
        Stack: "Laravel",
        progressPercentage: "80",
    },
    {
        Stack: "MySQL",
        progressPercentage: "70",
    },
];

export const educationInfo = [{
    schoolName: "Osun State College of Technology ,  Esa - Oke",
    subHeader: "National Diploma  in Urban and Regional Planning",
    duration: "September 2017 - April 2019",
    desc: "Studied how urban cities are being planned and developed",
    descBullets: [
        //"Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
        //"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ],
},
];

export const experience = [{
    role: "Backend Developer",
    company: "Dropflo inc.",
    companylogo: "/img/icons/common/dusecaSoftware.jpg",
    date: "Ang 29, 2021 – Nov 24 2021",
    desc: "I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
},
    /*	{
		role: "Full Stack Developer",
		company: "Bleed-AI",
		companylogo: "/img/icons/common/bleedAI.jpg",
		date: "Sept 2021 - Oct 2021",
		desc: "Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.",
	},
	{
		role: "Backend Developer",
		company: "Wapidu",
		companylogo: "/img/icons/common/wapidu.jpg",
		date: "Sept 2021",
		desc: "Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.",
	}, */
];

export const projects = [{
    name: "Vidd Call",
    desc: "A Video Call Web Application That Does Not Require You to Register Before You Can Connect To Your Loved Ones. Created With Laravel And WebRTC.",
    //desc: "With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.",
    link: "https://vidd-call.herokuapp.com/",
},
    {
        name: "Nairaland 2.0 ",
        desc: "A Reactjs Web Application That Utilizes Scraping to Display the Content of a Web Forum (https://nairaland.com) in a nice and intrusive UI. PHP/Laravel was used in Scraping the Content and also in developing the API while React and Materialize was used for the Frontend. ",
        link: "https://nairaland-v2.netlify.app/",
    },
    /* {
        name: "Shopaza (Ecommerce)",
        desc: "Now your reach to all your favorite entertainment and luxury items is just one touch apart",
        link: "https://shopaza.herokuapp.com/",
    } */
];

export const feedbacks = [{
    name: "Shan-Marie Osbourne",
    feedback:
    `His work is excellent. He does a wonderful job and is very knowledgeable about code.
    He has successfully been able to customize my software to fits exactly what I wanted. When I have a problem, he has always found a solution.
    I beyond recommend him. He is very talented. (https://www.upwork.com/freelancers/~01ff0950e3820f322a) `


}];