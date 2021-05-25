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
      {props.pathToRessource != '' && <img src={props.pathToRessource} />}
    </div>
  )
}

export default MediaContainer
