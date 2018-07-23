import React from 'react'
import PropTypes from 'prop-types'
import {
  LiveProvider,
  LivePreview,
  LiveEditor,
  LiveError
} from 'react-live'
import { withMDXComponents } from '@mdx-js/tag/dist/mdx-provider'

const transformCode = src => `<React.Fragment>${src}</React.Fragment>`

export default withMDXComponents(class extends React.Component {
  static displayName = 'LiveEditor'

  static propTypes = {
    code: PropTypes.string.isRequired,
    scope: PropTypes.object,
    components: PropTypes.object,
    previewProps: PropTypes.object,
    editorProps: PropTypes.object,
    errorProps: PropTypes.object,
  }

  render () {
    const {
      code,
      scope,
      components,
      previewProps,
      editorProps,
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
        <LiveEditor {...editorProps} />
        <LiveError {...errorProps} />
      </LiveProvider>
    )
  }
})
