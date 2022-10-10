import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=IBM Plex Sans:600,100,300,500&display=swap" rel="stylesheet" type="text/css"></link>
        {/* <link href="https://fonts.googleapis.com/css?family=Inconsolata:100,500,700,900&display=optional" rel="stylesheet" type="text/css"></link> */}
        <meta property="og:title" content="Option Zero" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://optionzero.co" />
        <meta property="og:image" content="https://optionzero.co/logo.png" />
        <meta property="og:image:alt" content="Option Zero Logo" />
        <meta
          property="og:description"
          content="Software Consultants for Climate Tech. Option Zero is a climate-focused software consultancy. We provide software strategy, implementation, data foundations, and team-building for companies making a difference on climate change."
        />
        <script defer data-domain="optionzero.co" src="https://plausible.io/js/plausible.outbound-links.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}