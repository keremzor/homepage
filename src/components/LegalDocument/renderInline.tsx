import React from 'react';
import Link from 'next/link';

const INLINE_PATTERN = /(\*\*.+?\*\*|\[[^\]]+\]\([^)]+\))/g;
const LINK_PATTERN = /^\[([^\]]+)\]\(([^)]+)\)$/;

export function renderInline(text: string): React.ReactNode[] {
  return text.split(INLINE_PATTERN).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{renderInline(part.slice(2, -2))}</strong>;
    }

    const link = LINK_PATTERN.exec(part);
    if (link) {
      const [, label, href] = link;
      if (href.startsWith('/')) {
        return (
          <Link key={index} href={href}>
            {label}
          </Link>
        );
      }
      return (
        <a key={index} href={href} rel="noopener noreferrer">
          {label}
        </a>
      );
    }

    return part;
  });
}
