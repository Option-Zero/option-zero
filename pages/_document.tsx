import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=IBM Plex Sans:100,200,300,400,500,600,900&display=optional" rel="stylesheet" type="text/css"></link>
        <link href="https://fonts.googleapis.com/css?family=Inconsolata:900&display=optional" rel="stylesheet" type="text/css"></link>
        <meta property="og:title" content="Option Zero" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://optionzero.co" />
        <meta property="og:image" content="https://optionzero.co/logo.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}