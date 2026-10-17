import Head from 'next/head';
import { LegalDocument } from '@/components/LegalDocument';
import { support } from '@/content/lutf/support';

export default function Support() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Lutf — Yardım ve iletişim / Help and contact</title>
        <meta
          name="description"
          content="Lutf uygulaması için yardım ve iletişim. Help and contact for the Lutf app."
        />
        <meta name="author" content="Kerem Zor" />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content="Lutf — Yardım ve iletişim / Help and contact" />
        <meta
          property="og:description"
          content="Lutf uygulaması için yardım ve iletişim. Help and contact for the Lutf app."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://keremzor.com/lutf" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#050505" />
        <link rel="canonical" href="https://keremzor.com/lutf" />
      </Head>
      <LegalDocument content={support} />
    </>
  );
}
