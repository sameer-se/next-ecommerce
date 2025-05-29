import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import FooterEnd from "@/components/footerend";
import ClientOnly from "@/components/ClientOnly";
import LoadingSpinner from "@/components/LoadingSpinner";
import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  // Handle loading state based on router events
  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Next.js E-commerce - Shop for the best furniture and home decor"
        />
        <title>Hekto - Modern Furniture Store</title>
      </Head>
      <ClientOnly>
        {loading && <LoadingSpinner />}
        <NavBar />
        <Component {...pageProps} />
        <Footer />
        <FooterEnd />
      </ClientOnly>
    </Provider>
  );
}
