import { Link, useNavigate } from 'react-router-dom';
import { Button, Tag } from '../components/ds';
import { ProjectCard } from '../components/ProjectCard';
import { portraitPath, projects, skills } from '../data/site';

export function Home() {
  const navigate = useNavigate();

  return (
    <>
      <section className="hero">
        <div className="hero__copy">
          <div className="maho-label hero__eyebrow">FULL STACK SOFTWARE DEVELOPER</div>
          <h1 className="hero__title">Mark Damics</h1>
          <p className="hero__lede">
            I build frontends with React, TypeScript, and JavaScript, and ship the projects
            behind them on GitHub.
          </p>
          <div className="hero__actions">
            <Button variant="primary" iconAfter="arrow-right" onClick={() => navigate('/projects')}>
              View projects
            </Button>
            <Button variant="ghost" onClick={() => navigate('/contact')}>
              Get in touch
            </Button>
          </div>
        </div>
        <div className="hero__portrait-wrap">
          <img className="hero__portrait" src={portraitPath} alt="Mark Damics" />
        </div>
      </section>

      <section className="section section--first">
        <div className="maho-label" style={{ marginBottom: 'var(--space-5)' }}>
          SKILLS
        </div>
        <div className="tag-row">
          {skills.map((skill) => (
            <Tag key={skill}>{skill}</Tag>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section__head">
          <div className="maho-label">SELECTED PROJECTS</div>
          <Link to="/projects">All projects &#8594;</Link>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
