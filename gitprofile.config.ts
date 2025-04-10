// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'arozgithub',
  },
  base: '/', // change to '/portfolio/' if using subpath

  projects: {
    github: {
      display: true,
      header: 'GitHub Projects',
      mode: 'manual',
      manual: {
        projects: [
  'arozgithub/automated-sql-generation-openai',
  'arozgithub/MedFast-main',
  'arozgithub/Remote-sensing-imaging-U-NET--segmentation',
],

    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'MedFast AI Tumor Detection & Chatbot',
          description: 'React-based app with MRI tumor detection using YOLO + RAG + LLMs.',
          imageUrl: 'https://github.com/arozgithub/arozgithub.github.io/blob/main/Home%20(1).png',
          link: 'https://github.com/arozgithub/MedFast-main',
        },
        {
          title: 'Automated SQL Generator (OpenAI)',
          description: 'Converts natural language queries to optimized SQL using OpenAI API.',
          imageUrl: 'https://github.com/arozgithub/arozgithub.github.io/blob/main/openai.png',
          link: 'https://github.com/arozgithub/automated-sql-generation-openai',
        },
      ],
    },
  },

  seo: {
    title: 'Aroz Imran | Data Scientist | AI & Cloud Enthusiast',
    description: 'Portfolio of Aroz Imran - AI/ML Engineer with expertise in LLMs, CV, NLP, and Cloud.',
    imageURL: '',
  },

  social: {
    linkedin: 'aroz-imran-5828b024b',
    github: 'arozgithub',
    email: 'arozimran18@gmail.com',
    website: '',
  },

  resume: {
    fileUrl: 'https://github.com/arozgithub/arozgithub.github.io/blob/main/Aroz%20Imran.pdf',
  },

  skills: [
    'Python', 'C++', 'JavaScript', 'React.js', 'MERN', 'LLM', 'Hugging Face', 'AWS Cloud', 'LangChain',
    'YOLO', 'U-Net', 'Numpy', 'Pandas', 'TensorFlow', 'Sklearn', 'NLTK', 'OpenCV', 'PySpark',
    'Flask', 'FastAPI', 'Media Pipe', 'Assembly Language'
  ],

  experiences: [
    {
      company: 'OnyxTec',
      position: 'Artificial Intelligence Engineer',
      from: 'Jan 2025',
      to: 'Present',
      companyLink: 'https://onyxtec.co/',
    },
    {
      company: 'Virtual Force',
      position: 'Data Science & ML Intern',
      from: 'Jun 2024',
      to: 'Oct 2024',
      companyLink: 'https://virtualforce.io/',
    },
    {
      company: 'Glowing Soft',
      position: 'Data Science Intern',
      from: 'Jun 2023',
      to: 'Aug 2023',
      companyLink: 'https://glowingsoft.com/',
    },
  ],

  certifications: [
    {
      name: 'AWS Academy Cloud Foundations',
      body: 'Amazon Web Services',
      year: '2024',
      link: 'https://www.credly.com/badges/8f4ce0c7-a01d-4db6-add7-2da23f6c9807/linked_in_profile',
    },
    {
      name: 'Data Analytics & BI',
      body: 'Digiskills',
      year: '2023',
      link: '',
    },
  ],

  educations: [
    {
      institution: 'NUCES-FAST, Lahore',
      degree: 'BS in Data Science',
      from: '2021',
      to: '2025',
    },
    {
      institution: 'Unique College Lahore',
      degree: 'F.Sc - Pre Engineering',
      from: '',
      to: '',
    },
  ],

  publications: [],

  blog: {
    source: '', // Add 'dev' or 'medium' and username if you want to show blog posts
    username: '',
    limit: 2,
  },

  googleAnalytics: {
    id: '',
  },

  hotjar: {
    id: '',
    snippetVersion: 6,
  },

  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light', 'dark', 'lofi', 'dracula', 'cyberpunk', 'sunset', 'nord', 'night', 'winter',
    ],
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  footer: `Made with <a class="text-primary" href="https://github.com/arifszn/gitprofile" target="_blank" rel="noreferrer">GitProfile</a> and ❤️`,

  enablePWA: true,
}

export default CONFIG;
