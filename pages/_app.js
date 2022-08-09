// import our components & styles needed for the site
import '../styles/globals.css'
import Layout from '../components/layout/Layout'

// this is our root component that nextJS will render.
// the <Component> tag below will become our actual page content of our different pages (this changes when navigating from page A to page B, etc.)
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
