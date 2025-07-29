import { type AppTextType } from "./types";

const APP_TEXT: AppTextType = {
  fra: {
    lefter: {
      jobTitle: 'Développeur Full Stack',
      summary: 'Conception et réalisation d\'applications web full stack',
      contactBtn: 'Contactez-moi',
      cv: 'CV_fr.pdf'
    },
    persProf: `Dans le milieu du dévelopment web depuis plusieurs années,
                je souhaite vous apporter
                mes compétences et mon sens du design pour vous
                aider dans la réalisation de vos projets.`,
    work: {
      title: 'Expériences professionelles',
      content: [
        {
          job: 'Développeur full stack',
          period: 'Octobre 2022 - Décembre 2024 (Alternance) | Janvier 2025 - Juin 2025 (CDI)',
          company: 'L\'Agence WAM',
          summary: 'Travail sur l\'outil interne de search listening SEO benhur',
          tasks: [
            'Participation à la conception de l\'application',
            'Réalisation de l\'interface front-end (React/Redux/Recharts/Material UI)',
            'Mise en place de l\'API back-end (Python/FastAPI/PostGreSQL)',
            `Maintenance et évolution de l'ETL (lecture de fichiers CSV et APIs
            externes)`,
            'Déploiement sur l\'écosystème Google Cloud à l\'aide de Docker',
            'Travail en équipe avec la méthode Agile et partage du code sur GitLab',
            'Maintenance de la documentation de production'
          ]
        }
      ]
    },
    school: {
      title: 'Formations et diplômes',
      content: [
        {
          job: 'Formation Concepteur Développeur d\'Applications',
          period: 'Novembre 2023 - Décembre 2024',
          company: '3W Academy - RNCP niveau 6 / Bac +3/4',
          summary: '',
          tasks: [
            'UML/Merise',
            'React/NodeJS',
            'Introduction à la Cybersécurité',
            'Introduction au DevOps',
            'Production d\'un mémoire sur le projet d\'entreprise',
          ]
        },
        {
          job: 'Formation Full Stack Développeur',
          period: 'Octobre 2022 - Novembre 2023',
          company: '3W Academy - RNCP niveau 5 / Bac +2',
          summary: '',
          tasks: [
            'HTML / CSS / JavaScript',
            'React/NodeJS',
            'Introduction à UML/Merise',
            'Production d\'un projet de fin d\'année',
          ]
        },
        {
          job: 'Front-End Engineer Career Path Certification',
          period: 'Juin 2021 - Octobre 2021',
          company: 'Codecademy.com - Certification en ligne',
          summary: '',
          tasks: [
            'HTML / CSS / JavaScript',
            'React/Redux',
            'Git et GitHub',
            'Tests unitaires',
          ]
        }
      ]
    },
    projects: {
      title: 'Projets',
      content: [
        {
          title: 'benhur',
          img: 'benhur_1.jpg',
          summary: `Outil interne destiné à améliorer la performance des équipes
                    en facilitant la récupération des données SEO des clients
                    et en les restituant sous forme de graphiques et tableaux.`,
          tech: [
            'React',
            'Redux',
            'Material UI',
            'Recharts',
            'FastAPI',
            'SQlAlchemy',
            'postGreSQL',
            'Apache airflow',
            'Docker'
          ]
        }
      ]
    }
  },
  eng: {
    lefter: {
      jobTitle: 'Full Stack Developer',
      summary: 'I design and build full stack web applications',
      contactBtn: 'Contact me',
      cv: 'CV_en.pdf'
    },
    persProf: `Working in web development for several years,
    I can help you bring your projects to life using my skills and my sense of design`,
    work: {
      title: 'Work experiences',
      content: [
        {
          job: 'Full stack developer',
          period: 'October 2022 - December 2024 (Apprenticeship) | January 2025 - June 2025 (full time)',
          company: 'L\'Agence WAM',
          summary: 'I worked on an internal SEO search listening tool called benhur',
          tasks: [
            'Helped design the application',
            'Built the front-end interface (React/Redux/Recharts/Material UI)',
            'Updated our back-end to fit application needs(Python/FastAPI/PostGreSQL)',
            `Maintained and updated our ETL (reading CSV files and calling external APIs)`,
            'Deployed production code on the Google Cloud ecosystem with Docker',
            'Worked in a team following Agile principles using GitLab',
            'Maintained project documentation'
          ]
        }
      ]
    },
    school: {
      title: 'Diplomas',
      content: [
        {
          job: 'Application Design and Development Formation',
          period: 'November 2023 - December 2024',
          company: '3W Academy - RNCP level 6 / Bac +3/4',
          summary: '',
          tasks: [
            'UML/Merise',
            'React/NodeJS',
            'Introduction to Cybersecurity',
            'Introduction to DevOps',
            'Production of a dissertation on the company project',
          ]
        },
        {
          job: 'Full Stack Developer Formation',
          period: 'October 2022 - November 2023',
          company: '3W Academy - RNCP level 5 / Bac +2',
          summary: '',
          tasks: [
            'HTML / CSS / JavaScript',
            'React/NodeJS',
            'Introduction to UML/Merise',
            'Production of a project as final evaluation',
          ]
        },
        {
          job: 'Front-End Engineer Career Path Certification',
          period: 'June 2021 - October 2021',
          company: 'Codecademy.com - Online certification',
          summary: '',
          tasks: [
            'HTML / CSS / JavaScript',
            'React/Redux',
            'Git and GitHub',
            'unit tests',
          ]
        }
      ]
    },
    projects: {
      title: 'Projects',
      content: [
        {
          title: 'benhur',
          img: 'benhur_1.jpg',
          summary: `Internal tool made to boost team productivity by speeding up
                    the gathering of SEO data for clients and outputting it as charts and datagrids`,
          tech: [
            'React',
            'Redux',
            'Material UI',
            'Recharts',
            'FastAPI',
            'SQlAlchemy',
            'postGreSQL',
            'Apache airflow',
            'Docker'
          ]
        }
      ]
    }
  },
}

export default APP_TEXT;
