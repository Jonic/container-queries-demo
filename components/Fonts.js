import React from 'react'

const Fonts = () => {
  const fontsUrl = 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500&amp;family=Roboto+Slab:wght@400;700&amp;family=Space+Mono&amp;display=swap'

  return (
    <>
      <link href="https://fonts.gstatic.com" crossOrigin="true" rel="preconnect" />
      <link as="style" href={fontsUrl} rel="preload" />
      <link href={fontsUrl} media="all" onLoad="this.media='all'" rel="stylesheet" />
      <noscript><link href={fontsUrl} rel="stylesheet" /></noscript>
    </>
  )
}

export default Fonts
