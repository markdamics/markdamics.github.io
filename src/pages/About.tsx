import { Button, Card, Tag } from '../components/ds';
import { cvDownloadName, cvPdfPath, skills } from '../data/site';

export function About() {
  return (
    <section className="section section--narrow section--first">
      <div className="maho-label" style={{ marginBottom: 'var(--space-4)' }}>
        ABOUT
      </div>
      <h2 className="section__title" style={{ marginBottom: 'var(--space-6)' }}>
        Mark Damics
      </h2>
      <p className="about__lede">
        I am a full stack software developer. I li
      </p>
      <p className="about__lede about__lede--last">
        My projects, including Logic and DevScribe, are on GitHub. I keep building and shipping
        small tools I use myself.
      </p>

      <div className="maho-label" style={{ marginBottom: 'var(--space-4)' }}>
        SKILLS
      </div>
      <div className="tag-row tag-row--spaced">
        {skills.map((skill) => (
          <Tag key={skill}>{skill}</Tag>
        ))}
      </div>

      <Card eyebrow="CV">
        <div className="cv-card__head">
          <p className="cv-card__note">Full CV, viewable below or as a download.</p>
          <Button as="a" variant="secondary" size="sm" icon="download" href={cvPdfPath} download={cvDownloadName}>
            Download CV
          </Button>
        </div>
        <iframe className="cv-card__frame" src={cvPdfPath} title="CV" />
      </Card>
    </section>
  );
}
