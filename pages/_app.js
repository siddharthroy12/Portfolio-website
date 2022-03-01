import Head from 'next/head';
import Layout from '@components/Layout';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import '@styles/globals.css';

//Binding events.
NProgress.settings.showSpinner = false;
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Siddharth Roy - Frontend Developer</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
