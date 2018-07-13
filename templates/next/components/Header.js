import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'grid-styled'

export default class SideBar extends React.Component {
  static propTypes = {
    logo: PropTypes.func,
    title: PropTypes.string
  }

  static defaultProps = {
  }

  render () {
    const {
      title,
      logo,
    } = this.props

    return (
      <Flex
        px={2}
        py={1}
        alignItems='center'
        css={{
          height: '48px'
        }}>
        <div>{title}</div>
        <Box mx='auto' />
      </Flex>
    )
  }
}
