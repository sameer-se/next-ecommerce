import InfoNavbar from '@/components/infonavbar'
import NavBar from '@/components/navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  
  return (
  <>
  <InfoNavbar />
  <NavBar/>
  <Component {...pageProps} />
  </>
  )
}
