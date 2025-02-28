/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Adesh's Portfolio",
  description:
    "Successfully migrated a large-scale application from Angular to React, significantly reducing load times and enhancing usability for over 500 concurrent users. Resolved 300+ security vulnerabilities in a microservices-based Angular and Spring MVC environment, ensuring system integrity and robustness. Developed a Shopify storefront using Next.js for the front end and Shopify Storefront API (GraphQL) for backend communication, achieving a 37.5% improvement in API response times. Streamlined over 1.6M data points into 300K and designed a dynamic traffic heatmap using Tableau, D3.js, and JavaScript, enabling data-driven decisions with an intuitive, interactive dashboard.",
  og: {
    title: "Adesh Bhosale Portfolio",
    type: "website",
  },
};

//Home Page
const greeting = {
  title: "Adesh Bhosale",
  logo_name: "AdeshBhosale",
  subTitle:
    "Migrating a large-scale application from Angular to React, reducing load times and improving usability for 500+ users. Resolved 300+ security vulnerabilities in an Angular and Spring MVC microservices environment. Built a NodeJS web app with React, Express, and MongoDB, cutting API response time by 37.5% and enhancing user experience. Integrated Stripe API for secure payments under 60 seconds, reducing cart abandonment. Streamlined 1.6M data points into 300K and created a traffic heatmap with Tableau and D3.js for data-driven decisions.",
  resumeLink:
    "https://drive.google.com/file/d/17lhZaxaHlijInS7brjK8gcMjOwpJ1689/view?usp=sharing",
  portfolio_repository: "https://github.com/adesh1998/Adesh-Portfolio",
  githubProfile: "https://github.com/adesh1998",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/adesh1998",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/adesh15298/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:badesh15298@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing an E-commerce website, utilizing Spring and React technologies, ensuring seamless integration between frontend and backend systems ",
        "⚡ Building responsive website front end using React-Redux",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        // {
        //   skillName: "Sass",
        //   fontAwesomeClassname: "simple-icons:sass",
        //   style: {
        //     color: "#CC6699",
        //   },
        // },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Spring",
          fontAwesomeClassname: "logos:spring-icon",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "devicon:java-wordmark",
          style: {
            color: "#CB3837",
          },
        },
        // {
        //   skillName: "Yarn",
        //   fontAwesomeClassname: "simple-icons:yarn",
        //   style: {
        //     color: "#2C8EBB",
        //   },
        // },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production-ready models for diverse deep learning and statistical applications",
        "⚡ Experience in quantitative modeling techniques for dynamic forecasting and time series analysis, utilizing Python, R, and deep learning frameworks to tackle real-world challenges ",
      ],
      softwareSkills: [
        // {
        //   skillName: "Tensorflow",
        //   fontAwesomeClassname: "logos-tensorflow",
        //   style: {
        //     backgroundColor: "transparent",
        //   },
        // },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on AWS cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Collaborate with cross-functional teams to design and implement robust database architectures",
      ],
      softwareSkills: [
        // {
        //   skillName: "GCP",
        //   fontAwesomeClassname: "simple-icons:googlecloud",
        //   style: {
        //     color: "#4285F4",
        //   },
        // },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        // {
        //   skillName: "Azure",
        //   fontAwesomeClassname: "simple-icons:microsoftazure",
        //   style: {
        //     color: "#0089D6",
        //   },
        // },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        // {
        //   skillName: "Kubernetes",
        //   fontAwesomeClassname: "simple-icons:kubernetes",
        //   style: {
        //     color: "#326CE5",
        //   },
        // },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/adesh15298/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/aadesh_15298",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Clemson University",
      subtitle: "M.S. in Computer Science",
      logo_path: "Clemson.png",
      alt_name: "Indiana University Bloomington",
      duration: "2022 - 2024",
      descriptions: [
        "⚡ I have pursued a diverse range of courses spanning Data Science and Software Development domains, including but not limited to Database Management Systems (DBMS), Machine Learning, Data Mining, Data Analysis, and Foundations of Software Engineering.",
        "⚡ Throughout my university tenure, I actively participated in a Cultural group where we organized and delivered over 10 programs focused on fostering diversity, personal growth, and academic excellence, positively influencing a cohort of over 100 students.",
      ],
      website_link: "https://www.clemson.edu/index.html",
    },
    {
      title: "Savitribai Phule Pune University",
      subtitle: "B.E. in Computer Engineering",
      logo_path: "SPPU.png",
      alt_name: "IIITDM Kurnool",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Furthermore, I construct a full-stack website utilizing the Python Django framework, integrating machine learning algorithms to forecast diseases accurately.",
      ],
      website_link: "http://www.unipune.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Stripe Certified Professional Developer",
      subtitle: "-Stripe",
      logo_path: "stripe.png",
      certificate_link:
        " https://stripecertifications.credential.net/050792d3-7fcf-4d3f-96eb-ceaf31f96004#gs.ee08h4",
      alt_name: "Stripe ",
      color_code: "purple",
    },
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/JKDZR55G5YGY",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Structuring Machine Learning Projects",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/YWXHCT2RPQD4",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: " Spring Framework In Easy Steps",
      subtitle: "- Bharath Thippireddy",
      logo_path: "Udemy.png",
      certificate_link:
        " https://www.udemy.com/certificate/UC-3530c8a1-a031-4972-bd4e-17ff00d9dc5e/",
      alt_name: "Udemy ",
      color_code: "#8C151599",
    },
    {
      title: "SQL for Beginners",
      subtitle: "- Tim Buchalka's",
      logo_path: "Udemy.png",
      certificate_link:
        " https://www.udemy.com/certificate/UC-bb5ae699-e069-4064-b5eb-ac11ed6836e7/",
      alt_name: "Udemy ",
      color_code: "#8C151599",
    },
    {
      title: "Java Database Connection: JDBC and MySQL",
      subtitle: "-  Chad Darby",
      logo_path: "Udemy.png",
      certificate_link: " https://www.udemy.com/certificate/UC-NUM3YKWB/",
      alt_name: "Udemy ",
      color_code: "#8C151599",
    },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with evolving Company as Software Devloper. I love organising events and that is why I was also involved with cultural organization at Clemson University.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Frontend Web Developer",
          company: "Disaster Accountability Project	.",
          company_url: "http://www.disasteraccountability.org",
          logo_path: "disaster.jpeg",
          duration: "May 2024 - Present",
          location: "Rocksville, MD, USA",
          description: `
          •	Led the migration of a web application from Angular to React using TypeScript, achieving a 30% improvement in scalability, maintainability, and performance
          •	Ensured WCAG compliance and cross-browser compatibility by rewriting 30+ components and validating Figma designs, resulting in enhanced accessibility and a seamless user experience through collaboration with UI/UX teams
          •	Enhanced state management with Redux and increased performance for 500+ concurrent users through Lighthouse audits
          •	Increased product quality by identifying and resolving 61 bugs using Cypress and JUnit testing, achieving 100% test coverage and reducing code review time by 20%
          •	Streamlined data integration with AWS Amplify and GraphQL, writing 20+ efficient queries to handle large data volumes and enhance responsiveness
              `,
          color: "#000000",
        },
        {
          title: "Software Engineer",
          company: "Cognizant Technology Solutions.",
          company_url: "https://www.cognizant.com/us/en",
          logo_path: "Cognizant.png",
          duration: "Dec 2019 - Jun 2022",
          location: "United States",
          description: `
          •	Implemented payment gateway with Java-Spring Boot for 1000+ merchants, adhering to architecture guidelines
          •	Reduced technical debt by addressing over 300 security vulnerabilities in a microservices-based Angular (TypeScript)/Spring MVC environment, reducing bug reports by 30% and improving system stability
          •	Spearheaded root cause analysis for 25+ Agile projects, ensuring adherence to SDLC and driving collaboration across cross-functional teams using Git for version control, while automating CI/CD pipelines with Jenkins
          •	Integrated third-party APIs for email-based two-factor authentication, strengthening security and enhancing user authentication
          •	Engineered a secure login system using Java, OAuth2, and JWT tokens, reducing login time to under 2 seconds 
          •	Conducted code reviews using SonarQube, addressing code smells and reducing redundancy by 70%
          •	Leveraged Postman to test and debug REST API endpoints, ensuring seamless data flow and improving API reliability by reducing troubleshooting time
              `,
          color: "#000000",
        },
        //     {
        //       title: "Android and ML Developer",
        //       company: "Muffito Incorporation",
        //       company_url: "https://www.linkedin.com/company/muffito-inc/about/",
        //       logo_path: "muffito_logo.png",
        //       duration: "May 2018 - Oct 2018",
        //       location: "Pune, Maharashtra",
        //       description:
        //         "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
        //       color: "#9b1578",
        //     },
        //     {
        //       title: "Android Developer",
        //       company: "FreeCopy Pvt. Ltd.",
        //       company_url: "https://www.linkedin.com/company/freecopy/about/",
        //       logo_path: "freecopy_logo.png",
        //       duration: "Nov 2017 - Dec 2017",
        //       location: "Ahmedabad, Gujarat",
        //       description:
        //         "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
        //       color: "#fc1f20",
        //     },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "Machine Learning Intern",
    //       company: "TikTok Inc.",
    //       company_url: "https://www.tiktok.com/en/",
    //       logo_path: "tiktok_logo.png",
    //       duration: "May 2022 - Aug 2022",
    //       location: "San Francisco, USA",
    //       description:
    //         "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Data Science Research Intern",
    //       company: "Delhivery Pvt. Ltd.",
    //       company_url: "https://www.delhivery.com/",
    //       logo_path: "delhivery_logo.png",
    //       duration: "May 2019 - Sept 2019",
    //       location: "Gurgaon, Haryana",
    //       description:
    //         "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
    //       color: "#ee3c26",
    //     },
    //     {
    //       title: "Data Science Intern",
    //       company: "Intel Indexer LLC",
    //       company_url:
    //         "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
    //       logo_path: "intel_logo.jpg",
    //       duration: "Nov 2018 - Dec 2018",
    //       location: "Work From Home",
    //       description:
    //         "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
    //       color: "#0071C5",
    //     },
    //   ],
    // },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Event Coordinator",
          company: "CISA CLEMSON",
          company_url: "http://cu-cisa.org/",
          logo_path: "CISA.png",
          duration: "Dec 2022 - Dec 2023",
          location: "Clemson, SC",
          description:
            "Orchestrated and delivered 10+ programs on diversity, personal development, and academic performance, impacting 100+ students. Led engaging hall programs on critical issues and cultural celebrations.",
          color: "#4285F4",
        },
        //         {
        //           title: "Microsoft Student Partner",
        //           company: "Microsoft",
        //           company_url: "https://www.microsoft.com/",
        //           logo_path: "microsoft_logo.png",
        //           duration: "Aug 2019 - May 2020",
        //           location: "Hyderabad, Telangana",
        //           description:
        //             "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
        //           color: "#D83B01",
        //         },
        //         {
        //           title: "Mozilla Campus Captain",
        //           company: "Mozilla",
        //           company_url: "https://www.mozilla.org/",
        //           logo_path: "mozilla_logo.png",
        //           duration: "Oct 2019 - May 2020",
        //           location: "Kurnool, Andhra Pradesh",
        //           description:
        //             "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
        //           color: "#000000",
        //         },
        //         {
        //           title: "Developer Students Club Member",
        //           company: "DSC IIITDM Kurnool",
        //           company_url:
        //             "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //           logo_path: "dsc_logo.png",
        //           duration: "Jan 2018 - May 2020",
        //           location: "Kurnool, Andhra Pradesh",
        //           description:
        //             "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //           color: "#0C9D58",
        //         },
        //         {
        //           title: "Developer Program Member",
        //           company: "Github",
        //           company_url: "https://github.com/",
        //           logo_path: "github_logo.png",
        //           duration: "July 2019 - PRESENT",
        //           location: "Work From Home",
        //           description:
        //             "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //           color: "#181717",
        //         },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// const publicationsHeader = {
//   title: "Publications",
//   description: "Some of my published Articles, Blogs and Research.",
//   avatar_image_path: "projects_image.svg",
// };

// const publications = {
//   data: [
//     {
//       id: "neuro-symbolic-sudoku-solver",
//       name: "Neuro-Symbolic Sudoku Solver",
//       createdAt: "2023-07-02T00:00:00Z",
//       description: "Paper published in KDD KiML 2023",
//       url: "https://arxiv.org/abs/2307.00653",
//     },
//     {
//       id: "mdp-diffusion",
//       name: "MDP-Diffusion",
//       createdAt: "2023-09-19T00:00:00Z",
//       description: "Blog published in Paperspace",
//       url: "https://blog.paperspace.com/mdp-diffusion/",
//     },
//     {
//       id: "consistency-models",
//       name: "Consistency Models",
//       createdAt: "2023-10-12T00:00:00Z",
//       description: "Blog published in Paperspace",
//       url: "https://blog.paperspace.com/consistency-models/",
//     },
//   ],
// };

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile-pic (1).png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  // publicationsHeader,
  // publications,
  contactPageData,
};
