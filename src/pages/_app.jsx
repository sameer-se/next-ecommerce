import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import FooterEnd from "@/components/footerend";
import ClientOnly from "@/components/ClientOnly";
import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { useEffect } from "react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  // Force a client-side render to ensure Redux store is properly hydrated
  useEffect(() => {
    // This empty useEffect ensures the component re-renders on the client
  }, []);

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
        <NavBar />
        <Component {...pageProps} />
        <Footer />
        <FooterEnd />
      </ClientOnly>
    </Provider>
  );
}
