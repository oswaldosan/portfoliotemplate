import Head from "next/head";

const SEOcomponent = ({ title, description, image }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:image" content={image} />
      <link
        rel="icon"
        href="/favicon.ico"
        sizes="any"
        //type="image/svg+xml"
      />
      <link
        rel="preload"
        href="/fonts/HKGrotesk-Regular.otf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/HKGrotesk-Bold.otf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Metropolis-Bold.otf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Metropolis-Regular.otf"
        as="font"
        crossOrigin=""
      />
    </Head>
  );
};

export default SEOcomponent;
