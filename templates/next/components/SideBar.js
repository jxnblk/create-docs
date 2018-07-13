import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Box } from 'grid-styled'

const Root = ({ open, ...props }) =>
  <Box
    {...props}
    width={320}
    flex='none'
    bg='white'
    css={{
      position: 'fixed',
      top: '48px',
      left: 0,
      bottom: 0,
      boxShadow: '1px 0 0 0 rgba(0, 0, 0, .125)',
      height: 'calc(100vh - 48px)',
      overflowY: 'auto',
      transition: 'transform .2s ease-out',
      '@media screen and (max-width: 40em)': {
        transform: `translateX(${open ? '0' : '-100%'})`
      }
    }}
  />

const Overlay = props =>
  <Box
    {...props}
    bg='tomato'
    css={{
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    }}
  />

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
    const {
      menu,
      toggleMenu,
      routes
    } = this.props

    return (
      <React.Fragment>
        {menu && <Overlay onClick={toggleMenu} />}
        <Root>
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
        </Root>
      </React.Fragment>
    )
  }
}
