import React from 'react'
import { create as render } from 'react-test-renderer'
import {
  code,
  pre,
  LivePreview,
  LiveEditor
} from './src'

const renderJSON = el => render(el).toJSON()

describe('mdx-editable', () => {
  test('LiveEditor renders', () => {
    const json = renderJSON(<LiveEditor code='<h1>hi</h1>' />)
    expect(json).toMatchSnapshot()
  })

  test('LivePreview renders', () => {
    const json = renderJSON(<LivePreview code='<h1>hi</h1>' />)
    expect(json).toMatchSnapshot()
  })

  test('code renders', () => {
    const json = renderJSON(React.createElement(code, {
      className: 'language-.jsx'
    }, 'hi'))
    expect(json).toMatchSnapshot()
  })
})
