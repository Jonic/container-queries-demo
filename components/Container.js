import PropTypes from 'prop-types'
import React from 'react'
import cx from 'bem-classnames'

const Container = ({ children, size }) => {
  const bemClasses = { name: 'container', modifiers: ['size'] }
  const classNames = cx(bemClasses, { size })

  return (
    <section className={classNames}>
      {children}
    </section>
  )
}

Container.propTypes = {
  size: PropTypes.string,
}

export default Container
