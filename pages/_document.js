import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}


// import { Html, Head, Main, NextScript } from 'next/document';

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head>
//         {/* Add Google Fonts here for global use */}
//         <link
//           href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap"
//           rel="stylesheet"
//         />
//       </Head>
//       <body className="bg-gray-950 text-white">
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }
