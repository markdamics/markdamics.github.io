import { Card, Icon } from '../components/ds';
import { contact } from '../data/site';

export function Contact() {
  return (
    <section className="section section--narrow section--first">
      <div className="maho-label" style={{ marginBottom: 'var(--space-4)' }}>
        CONTACT
      </div>
      <h2 className="section__title" style={{ marginBottom: 'var(--space-6)' }}>
        Get in touch.
      </h2>
      <p className="about__lede about__lede--last">The fastest way to reach me is email.</p>
      <div className="contact-list">
        <Card interactive>
          <a className="contact-list__link" href={`mailto:${contact.email}`}>
            <Icon name="mail" size={18} />
            {contact.email}
          </a>
        </Card>
        <Card interactive>
          <a className="contact-list__link" href={contact.github} target="_blank" rel="noopener">
            <Icon name="github" size={18} />
            {contact.githubLabel}
          </a>
        </Card>
        <Card interactive>
          <a className="contact-list__link" href={contact.linkedin} target="_blank" rel="noopener">
            <Icon name="linkedin" size={18} />
            {contact.linkedinLabel}
          </a>
        </Card>
      </div>
    </section>
  );
}
