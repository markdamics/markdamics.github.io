import type { HTMLAttributes } from 'react';
import { Icon } from './Icon';

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  selected?: boolean;
  onRemove?: () => void;
}

/** Pill for user-supplied metadata: filters, topics, recipients. */
export function Tag({ selected, onRemove, children, className = '', ...rest }: TagProps) {
  return (
    <span className={['maho-tag', selected && 'maho-tag--selected', className].filter(Boolean).join(' ')} {...rest}>
      {children}
      {onRemove && (
        <button type="button" aria-label="Remove" onClick={onRemove}>
          <Icon name="x" size={11} />
        </button>
      )}
    </span>
  );
}
