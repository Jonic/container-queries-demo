import Container from './Container'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ children, title }) => {
  return (
    <Container>
      <header className="header">
        <h1 className="header__title">{title}</h1>
        {children && (<p className="header__description">{children}</p>)}
      </header>
    </Container>
  )
}

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.object,
  ]),
  title: PropTypes.string.isRequired,
}

export default Header
