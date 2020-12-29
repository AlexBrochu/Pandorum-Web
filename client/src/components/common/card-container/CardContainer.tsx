import React from 'react'
import './CardContainer.scss'
import MediaContainer from '../media-container/MediaContainer'
import SlideshowCard, { SlideShowProps } from '../slideshow-card/SlideshowCard'

type CardContainerProps = {
  reverse: boolean
  pathToMediaSource: string
  slideshowProps: SlideShowProps
}

const CardContainer: React.FunctionComponent<CardContainerProps> = (
  props: CardContainerProps
): any => {
  return (
    <div
      className={`${
        props.reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'
      } card-container flex flex-col`}
    >
      {props.pathToMediaSource !== '' && (
        <MediaContainer
          pathToRessource={props.pathToMediaSource}
          classNames=""
        ></MediaContainer>
      )}
      <SlideshowCard
        {...props.slideshowProps}
        classNames={`${
          props.pathToMediaSource === '' ? 'alone' : 'with-media'
        } ${props.slideshowProps.classNames}`}
      ></SlideshowCard>
    </div>
  )
}

export default CardContainer
