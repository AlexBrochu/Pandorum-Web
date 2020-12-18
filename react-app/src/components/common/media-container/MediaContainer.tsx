import React from 'react'
import './MediaContainer.scss'

type MediaContainerProps = {
  pathToRessource: string
  classNames: string
}

const MediaContainer: React.FunctionComponent<MediaContainerProps> = (
  props: MediaContainerProps
): any => {
  return (
    <div className="media-container">
      MEDIA CONTENT
      {props.pathToRessource != '' && <img src="assets/mario-mushroom.png" />}
    </div>
  )
}

export default MediaContainer
