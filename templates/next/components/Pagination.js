import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'next/router'
import Link from 'next/link'
import { Flex, Box } from 'grid-styled'

export default withRouter(class Pagination extends React.Component {
  render () {
    const { routes, router } = this.props
    const index = routes.findIndex(r => r.path === router.route)
    const previous = routes[index - 1]
    const next = routes[index + 1]

    return (
      <Flex
        py={4}
        alignItems='center'>
        {previous && (
          <Box>
            <Link href={previous.path}>
              <a>
                {previous.name}
              </a>
            </Link>
          </Box>
        )}
        <Box mx='auto' />
        {next && (
          <Box>
            <Link href={next.path}>
              <a>
                {next.name}
              </a>
            </Link>
          </Box>
        )}
      </Flex>
    )
  }
})
