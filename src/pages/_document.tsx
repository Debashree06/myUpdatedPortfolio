import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>The Growing Mind</title>
        <meta property="og:title" content="Growing Mind" />
        <meta
          name="description"
          content="Growing Mind, is dedicated to empower children with Autism Spectrum Disorders and other behavioral and developmental disorder. !"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://growingminddev.vercel.app/" />
        <meta property="og:image" content="/og.jpeg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
