/**
 * Inline text supports two bits of markup: **bold** and [label](url).
 * Urls starting with "/" are rendered as internal links.
 */
export type LegalBlock =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] };

export type LegalSection = {
  lang: string;
  title: string;
  blocks: LegalBlock[];
};

export type LegalContent = {
  tr: LegalSection;
  en: LegalSection;
  /** Label of the link that jumps to the English section. */
  switchToEnglish: string;
};
