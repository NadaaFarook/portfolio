import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(props) {
  return (
    <Html lang="en">
      <Head>
      <script async src="https://cdn.splitbee.io/sb.js"></script>
        <link
          rel="preload"
          href="/fonts/ibm-plex-sans-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link href="/NF.svg" rel="shortcut icon" />
        <link href="/static/favicons/site.webmanifest" rel="manifest" />
        <link href="/NF.svg" rel="apple-touch-icon" sizes="180x180" />
        <link href="/NF.svg" rel="icon" sizes="32x32" type="image/png" />
        <link href="/NF.svg" rel="icon" sizes="16x16" type="image/png" />
        <link
          color="#4a9885"
          href="/static/favicons/safari-pinned-tab.svg"
          rel="mask-icon"
        />
        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta
          content="/static/favicons/browserconfig.xml"
          name="msapplication-config"
        />
        <meta content="14d2e73487fa6c71" name="yandex-verification" />
        <meta
          content="eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw"
          name="google-site-verification"
        />
        <meta
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          name="robots"
        />
        <script async src="https://cdn.splitbee.io/sb.js"></script>
      </Head>
      <body className="bg-white dark:bg-black text-white dark:text-black">
      <script async src="https://cdn.splitbee.io/sb.js"></script>
       <Main />
        <NextScript />
        <script async src="https://cdn.splitbee.io/sb.js"></script>
      </body>
    </Html>
  );
}
