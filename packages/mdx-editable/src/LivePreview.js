import React from 'react'
import PropTypes from 'prop-types'
import {
  LiveProvider,
  LivePreview,
  LiveError
} from 'react-live'
import { withMDXComponents } from '@mdx-js/tag/dist/mdx-provider'
import { Box } from 'grid-styled'

const transformCode = str => `<React.Fragment>${str}</React.Fragment>`

export default withMDXComponents(class extends React.Component {
  static displayName = 'LivePreview'

  static propTypes = {
    code: PropTypes.string.isRequired,
    scope: PropTypes.object,
    components: PropTypes.object,
    render: PropTypes.func,
    previewProps: PropTypes.object,
    editorProps: PropTypes.object,
    errorProps: PropTypes.object,
  }

  render () {
    const {
      code,
      scope,
      components
    } = this.props

    return (
      <Box my={3}>
        <LiveProvider
          code={code}
          scope={{ ...components, ...scope }}
          mountStylesheet={false}
          transformCode={transformCode}>
          <LivePreview />
          <LiveError />
        </LiveProvider>
      </Box>
    )
  }
})
