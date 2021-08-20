import Router from 'next/router'
import NProgress from 'nprogress'
import Layout from '@components/Layout'
import 'nprogress/nprogress.css'
import '../styles/globals.css'
import '../styles/utils.css'

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return (
    <Layout frontData={pageProps.frontData}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
