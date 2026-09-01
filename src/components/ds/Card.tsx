import type { HTMLAttributes, ReactNode } from 'react';

type Variant = 'default' | 'raised' | 'quiet' | 'glow';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
  eyebrow?: ReactNode;
  title?: ReactNode;
  actions?: ReactNode;
  interactive?: boolean;
}

/** Bounded surface: hairline border, generous padding, no heavy shadow. */
export function Card({
  variant = 'default',
  eyebrow,
  title,
  actions,
  interactive,
  children,
  className = '',
  ...rest
}: CardProps) {
  const cls = [
    'maho-card',
    variant !== 'default' && `maho-card--${variant}`,
    interactive && 'maho-card--interactive',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <div className={cls} {...rest}>
      {eyebrow && <div className="maho-card__eyebrow">{eyebrow}</div>}
      {(title || actions) && (
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: 'var(--space-5)',
            marginBottom: children ? 'var(--space-5)' : 0,
          }}
        >
          {title && <h4 className="maho-card__title">{title}</h4>}
          {actions}
        </div>
      )}
      {children}
    </div>
  );
}
