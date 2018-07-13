import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

const BaseCSS = ({ css }) =>
  <style
    dangerouslySetInnerHTML={{
      __html: css
    }}
  />

BaseCSS.defaultProps = {
  css: '*{box-sizing:border-box}body{margin:0}'
}

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => (
      sheet.collectStyles(<App {...props} />)
    ))
    const styles = sheet.getStyleElement()
    return { ...page, styles }
  }

  render () {
    const { styles } = this.props

    return (
      <html>
        <Head>
          <BaseCSS />
          {styles}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
