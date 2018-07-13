import React from 'react'
import App, { Container } from 'next/app'
import { MDXProvider } from '@mdx-js/tag'
import {
  pre,
  code
} from '@rebass/mdx'
import { ThemeProvider, Layout } from '../components'

const components = {
  pre,
  code
}

const routes = [
  { name: 'Home', path: '/' },
  { name: 'Getting Started', path: '/getting-started' },
  { name: 'Components', path: '/components' },
  { name: 'Button', path: '/components/Button' },
]

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props
    // doesn't appear to be a way to automatically get routes array...
    // console.log(this.props, pageProps)

    return (
      <MDXProvider components={components}>
        <ThemeProvider>
          <Container>
            <Layout
              {...this.props}
              routes={routes}
              page={pageProps}>
              <Component {...pageProps} />
            </Layout>
          </Container>
        </ThemeProvider>
      </MDXProvider>
    )
  }
}
