import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'grid-styled'
import SideBar from './SideBar'
import Header from './Header'
import Pagination from './Pagination'

const Container = props =>
  <Box
    {...props}
    mx='auto'
    px={3}
    py={4}
    css={{
      maxWidth: '768px',
    }}
  />

export default class extends React.Component {
  static propTypes = {
    routes: PropTypes.arrayOf(
      PropTypes.shape({
        path: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
    Header: PropTypes.func.isRequired,
    SideBar: PropTypes.func.isRequired,
    Pagination: PropTypes.func.isRequired,
    Container: PropTypes.func.isRequired,
  }

  static defaultProps = {
    Header,
    SideBar,
    Pagination,
    Container,
    routes: [],
    title: 'create-docs',
  }

  state = {
    menu: false
  }

  toggleMenu = () => {
    this.setState(state => ({ menu: !state.menu }))
  }

  render () {
    const {
      children,
      routes = [],
      Header,
      SideBar,
      Container,
    } = this.props
    const { menu } = this.state

    return (
      <>
        <Header
          {...this.props}
          {...this.state}
          toggleMenu={this.toggleMenu}
        />
        <Flex>
          <Box
            width={320}
            flex='none'
            bg='lightgray'
            css={{
              height: 'calc(100vh - 48px)',
              overflowY: 'auto'
            }}
          >
            <SideBar {...this.props} />
          </Box>
          <Box width={1}>
            <Container>
              {children}
              <Pagination {...this.props} />
            </Container>
          </Box>
        </Flex>
      </>
    )
  }
}
