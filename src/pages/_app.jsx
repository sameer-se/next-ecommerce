import InfoNavbar from "@/components/infonavbar";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import FooterEnd from "@/components/footerend";
import "@/styles/globals.css";
import { Lato } from "next/font/google";

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
