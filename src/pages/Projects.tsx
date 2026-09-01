import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/site';

export function Projects() {
  return (
    <section className="section section--first">
      <div className="maho-label" style={{ marginBottom: 'var(--space-4)' }}>
        PROJECTS
      </div>
      <h2 className="section__title">Things I have built.</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
