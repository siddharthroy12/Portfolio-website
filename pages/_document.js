import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500&display=swap"
            rel="stylesheet"
          />
					<link rel="icon" href="/favicon.ico" />
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script dangerouslySetInnerHTML={`
            if (window.netlifyIdentity) {
              window.netlifyIdentity.on("init", user => {
                if (!user) {
                  window.netlifyIdentity.on("login", () => {
                    document.location.href = "/admin/";
                  });
                }
              });
            }
          `}>
          </script>
        </body>
      </Html>
    )
  }
}

export default MyDocument