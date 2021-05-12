import PropTypes from 'prop-types'
import React from 'react'

const Grid = ({ children }) => {
  return (
    <div class="grid">
      {React.Children.map(children, (child, index) => (
        <div class="grid__cell" key={`card--${index}`}>
          <child.type {...child.props} />
        </div>
      ))}
    </div>
  )
}

Grid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.object,
  ]),
}

export default Grid
