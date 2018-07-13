import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Box } from 'grid-styled'

export default class SideBar extends React.Component {
  static propTypes = {
    routes: PropTypes.arrayOf(
      PropTypes.shape({
        path: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired
  }

  render () {
    const { routes } = this.props

    return (
      <Box
      >
        <ul>
          {routes.map(route => (
            <li key={route.path}>
              <Link href={route.path}>
                <a>
                  {route.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </Box>
    )
  }
}
