import '../styles/globals.css'

// this is our root component that nextJS will render.
// the <Component> tag below will become our actual page content of our different pages (this changes when navigating from page A to page B, etc.)
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
