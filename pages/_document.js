import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
       <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                if (!document.documentElement.classList.contains('dark')) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
