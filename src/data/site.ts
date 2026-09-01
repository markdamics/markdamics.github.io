export interface Project {
  name: string;
  desc: string;
  url: string;
  tech: string[];
}

export const skills: string[] = ['Java', 'Spring Boot', 'JavaFX', 'TypeScript', 'JavaScript', 'React', 'PostgreSQL', 'MSSQL', 'Microservices', 'Websockets', 'APIs', 'Kafka', 'Shell Script', 'Rust', 'Linux', 'Docker', 'DevOps', 'CI/CD', 'AI tools'];

export const projects: Project[] = [
  {
    name: 'Logic',
    desc: 'A full-stack log analyzer for registering log sources and inspecting their content in real time, with durable search indexing, alerting, and a desktop build.',
    url: 'https://github.com/markdamics/Logic',
    tech: ['Java', 'Spring Boot', 'Apache Lucene', 'TypeScript', 'React', 'Docker'],
  },
  {
    name: 'DevScribe',
    desc: 'A lightweight code editor built in Rust.',
    url: 'https://github.com/markdamics/DevScribe',
    tech: ['Rust'],
  },
];

export const contact = {
  email: 'damicsmark78@gmail.com',
  github: 'https://github.com/markdamics',
  githubLabel: 'github.com/markdamics',
  linkedin: 'https://www.linkedin.com/in/márk-dámics-23a42a183',
  linkedinLabel: 'linkedin.com/in/márk-dámics-23a42a183',
};

export const cvPdfPath = `${import.meta.env.BASE_URL}cv/CV_Mark_Damics.pdf`;
export const cvDownloadName = 'CV_Mark_Damics.pdf';
export const portraitPath = `${import.meta.env.BASE_URL}photo.png`;
export const logoIconPath = `${import.meta.env.BASE_URL}icons/icon-index.svg`;
