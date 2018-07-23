import React from 'react'
import PropTypes from 'prop-types'
import {
  LiveProvider,
  LivePreview,
  LiveError
} from 'react-live'
import { withMDXComponents } from '@mdx-js/tag/dist/mdx-provider'

const transformCode = str => `<React.Fragment>${str}</React.Fragment>`

export default withMDXComponents(class extends React.Component {
  static displayName = 'LivePreview'

  static propTypes = {
    code: PropTypes.string.isRequired,
    scope: PropTypes.object,
    components: PropTypes.object,
    render: PropTypes.func,
    previewProps: PropTypes.object,
    errorProps: PropTypes.object,
  }

  render () {
    const {
      code,
      scope,
      components,
      errorProps,
      ...props
    } = this.props

    return (
      <LiveProvider
        {...props}
        code={code}
        scope={{ ...components, ...scope }}
        mountStylesheet={false}
        transformCode={transformCode}>
        <LivePreview {...previewProps} />
        <LiveError {...errorProps} />
      </LiveProvider>
    )
  }
})
