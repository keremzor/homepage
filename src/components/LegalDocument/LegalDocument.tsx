import React from 'react';
import styles from './LegalDocument.module.scss';
import { renderInline } from './renderInline';
import type { LegalBlock, LegalContent, LegalSection } from './types';

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case 'h2':
      return <h2 className="ff-700">{block.text}</h2>;
    case 'h3':
      return <h3 className="ff-700">{block.text}</h3>;
    case 'ul':
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{renderInline(item)}</li>
          ))}
        </ul>
      );
    default:
      return <p>{renderInline(block.text)}</p>;
  }
}

function Section({ section, id }: { section: LegalSection; id?: string }) {
  return (
    <section id={id} lang={section.lang} className={styles.section}>
      <h1 className="ff-700 fs-32 text-accent">{section.title}</h1>
      {section.blocks.map((block, index) => (
        <Block key={index} block={block} />
      ))}
    </section>
  );
}

export function LegalDocument({ content }: { content: LegalContent }) {
  return (
    <article className={`${styles.document} ff-400 fs-14-16 text-accent`}>
      <p className={styles.switcher}>
        Türkçe ·{' '}
        <a href="#english" lang="en">
          {content.switchToEnglish}
        </a>
      </p>
      <Section section={content.tr} />
      <hr />
      <Section section={content.en} id="english" />
    </article>
  );
}
