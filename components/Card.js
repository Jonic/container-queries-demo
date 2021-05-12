import PropTypes from 'prop-types'
import React from 'react'

const Card = ({ category, comments, date, description, title, url }) => {
  const commentsText = comments === 1 ? 'comment' : 'comments'
  const commentsUrl = `${url}#comments`

  return (
    <div className="card">
      <div className="card__summary">
        <h2 className="card__heading">
          <a href={url}>{title}</a>
        </h2>

        <span className="card__category">{category}</span>

        <p className="card__description">{description}</p>

        <footer className="card__footer">
          <time>{date}</time>

          <p>
            <a href={commentsUrl}>
              <span className="sr-only">This post has</span>
              {comments} {commentsText}
            </a>
          </p>
        </footer>
      </div>

      <figure className="card__figure">
        <img
          alt="estefannie at her desk in colourful hoodie"
          height="1707"
          loading="lazy"
          src="https://www.raspberrypi.org/app/uploads/2021/04/IMG_4696-scaled.jpg"
          width="2560"
        />
      </figure>
    </div>
  )
}

Card.propTypes = {
  category: PropTypes.string.isRequired,
  comments: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default Card
