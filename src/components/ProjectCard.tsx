import { Card, Icon, Tag } from './ds';
import type { Project } from '../data/site';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card interactive title={project.name}>
      <p className="project-card__desc">{project.desc}</p>
      <div className="project-card__tech">
        {project.tech.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
      <a className="project-card__link" href={project.url} target="_blank" rel="noopener">
        <Icon name="github" size={14} />
        View on GitHub
      </a>
    </Card>
  );
}
