import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

/**
 * Interface representing a LinkedIn profile
 * CUSTOMIZE THIS: Replace the mock data with your own information
 */
export interface LinkedinProfile {
  firstName: string;        // Your first name
  lastName: string;         // Your last name
  headline: string;         // Professional headline/title
  profilePicture: string;   // URL to profile picture (can be local assets/images/profile.jpg)
  summary: string;          // Professional summary/bio
  skills: string[];         // Array of skills
  experience: Experience[]; // Work experience
  education: Education[];   // Educational background
  certifications?: Certification[]; // Optional certifications
  achievements?: string[];  // Optional achievements
  projects?: Project[];     // Optional projects
  contact?: ContactInfo;    // Contact information
}

/**
 * Interface representing contact information
 */
export interface ContactInfo {
  email: string;            // Email address
  phone?: string;           // Phone number (optional)
  linkedin: string;         // LinkedIn profile URL
  github: string;           // GitHub profile URL
  kaggle?: string;          // Kaggle profile URL (optional)
  location?: string;        // Location information (optional)
}

/**
 * Interface representing a work experience entry
 */
export interface Experience {
  title: string;            // Job title
  company: string;          // Company name
  location: string;         // Job location
  startDate: string;        // Start date (YYYY-MM format)
  endDate: string;          // End date (YYYY-MM format) or 'Present'
  description: string;      // Job description
  skills: string[];         // Skills used in this role
}

/**
 * Interface representing an education entry
 */
export interface Education {
  school: string;           // School/university name
  degree: string;           // Degree type
  field: string;            // Field of study
  startDate: string;        // Start date (YYYY-MM format)
  endDate: string;          // End date (YYYY-MM format)
  description: string;      // Description of studies
  location?: string;        // School location (optional)
  gpa?: string;             // GPA or academic performance (optional)
}

/**
 * Interface representing a certification
 */
export interface Certification {
  name: string;             // Certification name
  issuer: string;           // Issuing organization
  issueDate: string;        // Issue date (YYYY-MM format)
  expirationDate: string;   // Expiration date (YYYY-MM format)
  credentialId: string;     // Credential ID (if any)
  credentialURL: string;    // URL to verify credential
}

/**
 * Interface representing a project
 */
export interface Project {
  title: string;            // Project title
  description: string;      // Project description
  technologies: string[];   // Technologies used
  date: string;             // Project date/timeframe
}

/**
 * Service responsible for providing LinkedIn profile data
 * In a real application, this would connect to LinkedIn API
 * For this portfolio, it uses mock data that you should replace with your information
 */
@Injectable({
  providedIn: 'root'
})
export class LinkedinService {
  // Note: LinkedIn API requires OAuth and server-side implementation
  // For this portfolio, we use mock data that should be replaced with your information
  
  private profileSubject = new BehaviorSubject<LinkedinProfile | null>(null);
  
  constructor() {
    // Sayantan Pal's profile data
    this.profileSubject.next({
      firstName: 'Sayantan',
      lastName: 'Pal',
      headline: 'Backend Intern at Prismforce | Data Science & FPGA Design Researcher | ECE Student',
      // IMPORTANT: Replace with your own profile picture
      // Option 1: Use a URL - 'https://example.com/your-photo.jpg'
      // Option 2: Use local file - 'assets/images/profile.jpg'
      profilePicture: 'assets/images/profile.jpeg',
      summary: 'Electronics and Communication Engineering student with expertise in Data Science, Machine Learning, FPGA design, and web development. Currently gaining experience as a Backend Intern at Prismforce, working with Angular, TypeScript, and Node.js. Experienced in implementing various ML algorithms, statistical analysis, and hardware design using Verilog. Passionate about leveraging technology to solve complex problems and drive innovation.',
      skills: [
        'Python', 'Machine Learning', 'Data Science', 'Verilog', 'FPGA Design', 
        'Statistical Analysis', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 
        'PyTorch', 'C', 'C++', 'System Verilog', 'Vivado', 'Git', 'SQL', 
        'HTML', 'CSS', 'JavaScript', 'Angular', 'TypeScript', 'Node.js', 
        'Backend Development', 'RTL', 'UVM', 'Xilinx Design Constraints',
        'Matplotlib', 'Seaborn', 'NLTK', 'Flask', 'Django', 'Bootstrap',
        'Docker', 'Postman'
      ],
      experience: [
        {
          title: 'Backend Intern',
          company: 'Prismforce',
          location: 'Remote',
          startDate: '2025-02-17',
          endDate: '2025-06-30',
          description: 'Currently working as a backend intern at Prismforce, focusing on learning and implementing Angular, JavaScript, and Node.js technologies. Developing skills in full-stack web development through hands-on projects and mentorship.',
          skills: ['Angular', 'JavaScript', 'Node.js', 'Backend Development', 'Full-stack Development']
        },
        {
          title: 'Data Science Intern',
          company: 'Celebul Technolopes',
          location: 'Jalpaiguri, West Bengal, India',
          startDate: '2021-11',
          endDate: '2025-05',
          description: 'Implemented various ML algorithms including Linear/Logistic Regression, Random Forest, and clustering techniques (K-Means, DBSCAN). Applied advanced statistical concepts including hypothesis testing, Bayesian inference, and probability distributions. Performed comprehensive data preprocessing: cleaning, normalization, feature selection, and dimensionality reduction. Utilized ensemble methods (Bagging, Boosting, Stacking) and regularization techniques (L1, L2, ElasticNet) for model optimization. Conducted statistical analysis to identify trends in customer behavior and collaborated on team projects.',
          skills: ['Python', 'Machine Learning', 'Data Science', 'Statistical Analysis', 'Pandas', 'NumPy', 'Scikit-learn']
        },
        {
          title: 'FPGA Design Research Intern',
          company: 'University of Calcutta',
          location: 'Kolkata, West Bengal, India',
          startDate: '2024-06',
          endDate: '2024-08',
          description: 'Wrote Verilog code for ZYNQ-7020 using Vivado 2024.1. Developed testbenches and ran simulations in Vivado. Created XDC constraint files for bitstream generation. Uploaded code to ZYNQ-7020 development board and verified pulse width on CRO. Used it to regulate MOSFETs, driving a pump for a Cold Collision Experiment at the Chemistry Lab.',
          skills: ['Verilog', 'FPGA', 'ZYNQ-7020', 'Vivado', 'XDC', 'Hardware Design']
        },
        {
          title: 'Data Analytics Intern',
          company: 'AICTE VOIS and Vodafone Idea Foundation',
          location: 'Remote',
          startDate: '2024-10',
          endDate: '2024-11',
          description: 'Mastered data analytics fundamentals in Linux environment using AI-LLM. Applied advanced libraries for data analytics such as Matplotlib, Pandas and Seaborn on projects. Built a project on Superstore Data where profit vs revenue analysis was done using various plots for business decision-making. Built a project on Healthcare Analytics for Doctor Visit.',
          skills: ['Data Analytics', 'Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Linux', 'AI-LLM']
        }
      ],
      education: [
        {
          school: 'Jalpaiguri Government Engineering College',
          degree: 'Bachelor of Technology',
          field: 'Electronics and Communication Engineering',
          startDate: '2021-08',
          endDate: '2025-05',
          description: 'Currently pursuing B.Tech in Electronics and Communication Engineering. Focusing on FPGA design, data science, and machine learning applications.',
          location: 'Jalpaiguri, West Bengal, India, Pin: 735102',
          gpa: 'YGPA: 7.647/10.0'
        }
      ],
      certifications: [
        {
          name: 'Designing Single Port RAM and Simulating using Testbench in Xilinx Vivado',
          issuer: 'Live Project',
          issueDate: '2021-04',
          expirationDate: '2024-05',
          credentialId: '',
          credentialURL: ''
        },
        {
          name: 'Automated Weather Data with Apache Airflow on AWS',
          issuer: 'Live Project',
          issueDate: '2024-11',
          expirationDate: '2024-11',
          credentialId: '',
          credentialURL: ''
        },
        {
          name: 'Titanic-Machine Learning from Disaster',
          issuer: 'Kaggle',
          issueDate: '2024-06',
          expirationDate: '2024-06',
          credentialId: '',
          credentialURL: 'https://www.kaggle.com/sayantan007pol'
        }
      ],
      achievements: [
        'Achieved 5th position in JGEC X AGORA, Hack With Agora Hackathon by making Hospital-Management Website in the first year of college',
        'Ex-Lead of Alguzenith JGEC chapter',
        'Contributed and successfully merged 4 PRs in Hacktoberfest 2023',
        'Contributed to Quira Quest 15 and built a stylish calculator using Cyclops UI to win 50 dollars'
      ],
      projects: [
        {
          title: 'Designing Single Port RAM and Simulating using Testbench in Xilinx Vivado',
          description: 'Designed RAM and ROM using System Verilog. Developed and simulated a dual port RAM design using System Verilog. Designed and simulated ROM using SystemVerilog.',
          technologies: ['System Verilog', 'Xilinx Vivado', 'RTL', 'Hardware Design'],
          date: '2021-04 to 2024-05'
        },
        {
          title: 'Automated Weather Data with Apache Airflow on AWS',
          description: 'Developed an ETL pipeline using Apache Airflow on AWS EC2 to automate data extraction from OpenWeatherMap API, transformation, and loading into an S3 bucket. Scheduled Apache Airflow DAGs, leveraging operators and sensors for efficient data orchestration and monitoring. Gained hands-on experience with workflow orchestration and data engineering best practices in a cloud environment.',
          technologies: ['Python', 'Apache Airflow', 'AWS', 'API', 'Pandas'],
          date: '2024-11'
        },
        {
          title: 'Titanic-Machine Learning from Disaster',
          description: 'Developed predictive models to determine passenger survival probabilities. Conducted data cleaning, feature engineering, and EDA, and achieved 77.03% accuracy.',
          technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
          date: '2024-06'
        }
      ],
      contact: {
        email: 'sayantanpal100@gmail.com',
        linkedin: 'https://www.linkedin.com/in/sayantan-pal-056996125',
        github: 'https://github.com/sayantan007pal',
        kaggle: 'https://www.kaggle.com/sayantan007pol',
        location: 'Jalpaiguri, West Bengal, India'
      }
    });
  }

  /**
   * Get the LinkedIn profile data
   * @returns Observable of the LinkedIn profile data
   */
  getProfile(): Observable<LinkedinProfile | null> {
    return this.profileSubject.asObservable();
  }

  /**
   * Update the LinkedIn profile data
   * @param profile - The new profile data
   */
  updateProfile(profile: LinkedinProfile): void {
    this.profileSubject.next(profile);
  }
}