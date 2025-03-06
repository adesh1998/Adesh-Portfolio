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
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },

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
      ],
    },
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
      ],
    },
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
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile-pic (1).png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Cloud and Opensource Development.",
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
  contactPageData,
};
