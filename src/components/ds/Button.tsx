import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { Icon } from './Icon';

type Variant = 'primary' | 'secondary' | 'ghost' | 'seal';
type Size = 'sm' | 'md' | 'lg';

interface CommonProps {
  variant?: Variant;
  size?: Size;
  icon?: string;
  iconAfter?: string;
  block?: boolean;
  children?: ReactNode;
  className?: string;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' };
type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

/** Primary action control. One primary per view; seal variant is reserved for irreversible moments. */
export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    icon,
    iconAfter,
    block,
    as = 'button',
    children,
    className = '',
    ...rest
  } = props;
  const Tag = as as 'button' | 'a';
  const cls = [
    'maho-btn',
    `maho-btn--${variant}`,
    size !== 'md' && `maho-btn--${size}`,
    block && 'maho-btn--block',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  const glyph = size === 'lg' ? 16 : 14;
  return (
    <Tag className={cls} {...(rest as Record<string, unknown>)}>
      {icon && <Icon name={icon} size={glyph} />}
      {children}
      {iconAfter && <Icon name={iconAfter} size={glyph} />}
    </Tag>
  );
}
