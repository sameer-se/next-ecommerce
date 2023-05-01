import InfoNavbar from '@/components/infonavbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  
  return (
  <><InfoNavbar />
  <Component {...pageProps} />
  </>
  )
}
