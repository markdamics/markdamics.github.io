import type { CSSProperties, HTMLAttributes } from 'react';

const CDN = 'https://unpkg.com/lucide-static@0.427.0/icons/';

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  name: string;
  size?: number;
  label?: string;
}

/** Monochrome glyph from the Lucide static set, masked so it inherits currentColor. */
export function Icon({ name, size = 16, label, className = '', style, ...rest }: IconProps) {
  const url = `url("${CDN}${name}.svg")`;
  const maskStyle: CSSProperties = {
    width: size,
    height: size,
    WebkitMaskImage: url,
    maskImage: url,
    ...style,
  };
  return (
    <span
      className={['maho-icon', className].filter(Boolean).join(' ')}
      role={label ? 'img' : 'presentation'}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      style={maskStyle}
      {...rest}
    />
  );
}
