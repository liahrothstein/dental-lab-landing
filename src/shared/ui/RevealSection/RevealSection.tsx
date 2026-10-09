import './RevealSection.scss';

import type { ReactNode } from 'react';

import { useReveal } from '../../lib/hooks';

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