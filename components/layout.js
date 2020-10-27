import Head from "next/head";

export default function Layout({ children }) {
  // Returns all the required metadata for the site.
  const metadata = () => {
    return (
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no"
        />

        <title>Morgan Gallant</title>
        <meta name="title" content="Morgan Gallant" />
        <meta name="description" content="Morgan's home on the internet." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://morgangallant.com/" />
        <meta property="og:title" content="Morgan Gallant" />
        <meta
          property="og:description"
          content="Morgan's home on the internet."
        />
        <meta
          property="og:image"
          content="https://morgangallant.com/images/profile.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://morgangallant.com/" />
        <meta property="twitter:title" content="Morgan Gallant" />
        <meta
          property="twitter:description"
          content="Morgan's home on the internet."
        />
        <meta
          property="twitter:image"
          content="https://morgangallant.com/images/profile.jpg"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff" />

        {/* Realtime Analytics */}
        <script
          async
          defer
          data-domain="morgangallant.com"
          src="https://stats.morgangallant.com/js/index.js"
        ></script>
      </Head>
    );
  };

  // The actual underlying layout for each page.
  return (
    <div className="container">
      {metadata()}
      <main>{children}</main>
    </div>
  );
}
