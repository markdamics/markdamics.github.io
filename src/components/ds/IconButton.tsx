import type { ButtonHTMLAttributes } from 'react';
import { Icon } from './Icon';

type Size = 'sm' | 'md' | 'lg';
type Variant = 'ghost' | 'outline';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  label: string;
  size?: Size;
  variant?: Variant;
}

/** Square, label-less control for toolbars and card corners. */
export function IconButton({
  icon,
  label,
  size = 'md',
  variant = 'ghost',
  className = '',
  ...rest
}: IconButtonProps) {
  const cls = [
    'maho-iconbtn',
    size !== 'md' && `maho-iconbtn--${size}`,
    variant === 'outline' && 'maho-iconbtn--outline',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <button className={cls} aria-label={label} title={label} {...rest}>
      <Icon name={icon} size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} />
    </button>
  );
}
