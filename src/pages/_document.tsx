import { Html, Head, Main, NextScript } from 'next/document';
import type { DocumentProps } from 'next/document';

const TURKISH_PAGE_PREFIX = '/lutf';

export default function Document({ __NEXT_DATA__ }: DocumentProps) {
  const isTurkishPage = __NEXT_DATA__.page.startsWith(TURKISH_PAGE_PREFIX);

  return (
    <Html lang={isTurkishPage ? 'tr' : 'en'}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
