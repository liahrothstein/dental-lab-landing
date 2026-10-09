import './RevealSection.scss';

import { useReveal } from '@hooks';
import type { ReactNode } from 'react';

interface RevealSectionProps {
  id: string;
  className: string;
  children: ReactNode;
}

export function RevealSection({ id, className, children }: RevealSectionProps) {
  useReveal();
  return (
    <section id={id} className={className} data-reveal>
      {children}
    </section>
  );
}