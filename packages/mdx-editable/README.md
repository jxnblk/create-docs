
# mdx-editable

Render fenced code blocks as live editable previews in MDX.

```sh
npm i mdx-editable
```

## Getting Started

Use the [MDXProvider][] component to provide custom `pre` and `code` components to your MDX document.

```jsx
import React from 'react'
import { MDXProvider } from '@mdx-js/tag'
import { code, pre } from 'mdx-editable'
import Doc from './Doc.mdx'

const components = {
  code,
  pre
}

export default props =>
  <MDXProvider components={components}>
    <Doc />
  </MDXProvider>
```

In your MDX file, fenced code blocks with the `.jsx` language attribute will render with a live code editor built with [react-live][]

[MDXProvider]: https://github.com/mdx-js/mdx
[react-live]: https://github.com/FormidableLabs/react-live

