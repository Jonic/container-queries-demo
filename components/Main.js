import PropTypes from 'prop-types'
import React from 'react'

const Main = ({ children }) => {
  return (
    <main className="main">{children}</main>
  )
}

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.object,
  ]),
}

export default Main
