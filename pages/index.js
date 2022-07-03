import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/header';
import Top from '../components/top';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>NK Web Studio</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Header />
      <Top />
      <Footer />
    </>
  );
}