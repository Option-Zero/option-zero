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
        <meta property="og:image" content="https://optionzero.co/logo.png" />
        <meta property="og:image:alt" content="Option Zero Logo" />
        <meta property="og:description" content="Software Consultants for Climate Tech" />
        <script defer data-domain="optionzero.co" src="https://plausible.io/js/plausible.outbound-links.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}