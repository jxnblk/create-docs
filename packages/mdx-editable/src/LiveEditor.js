import React from 'react'
import PropTypes from 'prop-types'
import {
  LiveProvider,
  LivePreview,
  LiveEditor,
  LiveError
} from 'react-live'
import { withMDXComponents } from '@mdx-js/tag/dist/mdx-provider'
import { Box } from 'grid-styled'
import { color, borderColor } from 'styled-system'

const transformCode = src => `<React.Fragment>${src}</React.Fragment>`

const Preview = props =>
  <Box
    {...props}
    is={LivePreview}
    css={{
      padding: '16px',
      border: '1px solid',
      borderColor: 'lightgray',
      borderRadius: '2px 2px 0 0',
    }}
  />

const Editor = props =>
  <Box
    {...props}
    is={LiveEditor}
    bg='lightgray'
    css={{
      fontFamily: 'Menlo, monospace',
      fontSize: '13px',
      margin: 0,
      padding: '16px',
      borderRadius: '0 0 2px 2px',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: 'lightgray',
      '&:focus': {
        outline: 'none',
      }
    }}
  />

const Err = props =>
  <Box
    {...props}
    css={{
      fontFamily: 'Menlo, monospace',
      fontSize: '13px',
      padding: '8px',
      color: 'white',
      backgroundColor: 'red'
    }}
  />

export default withMDXComponents(class extends React.Component {
  static displayName = 'LiveEditor'

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
      components,
      render,
      previewProps,
      editorProps,
      errorProps,
    } = this.props
    return (
      <Box my={3}>
        <LiveProvider
          code={code}
          scope={{ ...components, ...scope }}
          mountStylesheet={false}
          transformCode={transformCode}>
          {typeof render === 'function' ? (
            render({
              code,
              scope: {
                ...components,
                ...scope
              }
            })
          ) : (
            <React.Fragment>
              <Preview {...previewProps} />
              <Editor {...editorProps} />
              <Err {...errorProps} />
            </React.Fragment>
          )}
        </LiveProvider>
      </Box>
    )
  }
})
