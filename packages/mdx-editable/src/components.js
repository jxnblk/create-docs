import React from 'react'
import LiveEditor from './LiveEditor'
import LivePreview from './LivePreview'

export const pre = props => props.children

export const code = ({
  children,
  className = '',
  scope,
  ...props
}) => {
  const lang = className.replace(/^language\-/, '')
  const type = lang.charAt(0)
  const code = React.Children.toArray(children).join('\n')

  switch (type) {
    case '.':
      return <LiveEditor code={code} scope={scope} />
    case '!':
      return <LivePreview code={code} scope={scope} />
    default:
      return (
        <pre
          {...props}
          className={className}
          children={children}
        />
      )
  }
}

export default {
  pre,
  code
}
