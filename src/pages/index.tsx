import Head from 'next/head';
import { Layout } from '@/layout';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Kerem Zor</title>
        <meta
          name="description"
          content="I specialize in UI development, web applications, design systems, and animations for corporate projects and products."
        />

        <meta name="author" content="Kerem Zor" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Kerem Zor" />
        <meta
          property="og:description"
          content="I specialize in UI development, web applications, design systems, and animations for corporate projects and products."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://keremzor.com" />
        <meta property="og:image" content="https://keremzor.com/og-img.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kerem Zor" />
        <meta
          name="twitter:description"
          content="I specialize in UI development, web applications, design systems, and animations for corporate projects and products."
        />
        <meta name="twitter:image" content="https://keremzor.com/og-img.jpg" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta name="theme-color" content="#050505" />
        <link rel="canonical" href="https://keremzor.com" />
      </Head>
      <Layout />
    </>
  );
}
