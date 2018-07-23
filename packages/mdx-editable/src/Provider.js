import React from 'react'
import { MDXProvider } from '@mdx-js/tag'
import editable from './components'

export default ({
  components = {},
  children,
  ...props
}) => (
  <MDXProvider
    {...props}
    components={{
      ...editable,
      ...components
    }}>
    <React.Fragment>
      {children}
    </React.Fragment>
  </MDXProvider>
)

