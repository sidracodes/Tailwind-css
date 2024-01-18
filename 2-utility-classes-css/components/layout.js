import Head from 'next/head';
import Link from 'next/link';

const name = 'Sidra Khalid';
export const siteTitle = 'Sample Website';

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
       
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        {home ? (
          <>
           
            <h1>{name}</h1>
          </>
        ) : (
          <>
            <h2>
              <Link href="/">
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
     
    </div>
  );
}