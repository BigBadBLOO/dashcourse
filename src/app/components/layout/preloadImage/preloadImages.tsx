import React from "react";

const IMAGES = [
  '/about/01.webp',

  '/advantages/01.webp',

  '/objects/01.webp',
  '/objects/02.webp',
  '/objects/03.webp',
]

export const PreloadImages = () => {
  return IMAGES.map(image => {
      return <link
        key={image}
        rel="preload"
        href={image}
        as="image"
      />
    })
}