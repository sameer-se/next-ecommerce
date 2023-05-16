import InfoNavbar from "@/components/infonavbar";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import FooterEnd from "@/components/footerend";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <InfoNavbar />
      <NavBar />
      <Component {...pageProps} />
      <Footer />
      <FooterEnd />
    </>
  );
}
