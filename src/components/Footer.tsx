import { contact } from '../data/site';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <span>© 2026 Mark Damics</span>
        <div className="site-footer__links">
          <a href={contact.github} target="_blank" rel="noopener">
            GitHub
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
