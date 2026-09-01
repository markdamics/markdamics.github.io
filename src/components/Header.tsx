import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IconButton } from './ds';
import { logoIconPath } from '../data/site';
import type { Theme } from '../hooks/useTheme';

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <button className="site-logo" onClick={() => navigate('/')}>
          <span
            className="site-logo__icon"
            aria-hidden="true"
            style={{ WebkitMaskImage: `url("${logoIconPath}")`, maskImage: `url("${logoIconPath}")` }}
          />
          Mark Damics
        </button>
        <nav className="site-nav">
          {NAV_ITEMS.map((item) => (
            <Link key={item.to} to={item.to} data-active={location.pathname === item.to}>
              {item.label}
            </Link>
          ))}
        </nav>
        <IconButton
          icon={theme === 'dark' ? 'sun' : 'moon-star'}
          label="Switch theme"
          onClick={onToggleTheme}
        />
      </div>
    </header>
  );
}
