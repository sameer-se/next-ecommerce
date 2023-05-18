import InfoNavbar from "@/components/infonavbar";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import FooterEnd from "@/components/footerend";
import "@/styles/globals.css";
import { Lato } from "next/font/google";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }) {
  // const LatoFont = Lato({ subsets: ["latin"] });

  return (
    <div>
      <InfoNavbar />
      <NavBar />
      <Component {...pageProps} />
      <Footer />
      <FooterEnd />
    </div>
  );
}
