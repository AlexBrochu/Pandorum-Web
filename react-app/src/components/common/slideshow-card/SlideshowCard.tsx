import './SlideshowCard.scss'
import { Description } from './SlideshowText'
import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useIsVisible } from 'react-is-visible'
import 'intersection-observer'
import SlideShowElement from '../slideshow-element/SlideshowElement'

export type SlideShowProps = {
  namespace: string
  title: string
  subtitles: Description[]
  timeLeft: number
  classNames: string
}

const SlideShowCard: React.FunctionComponent<SlideShowProps> = (
  props: SlideShowProps
): any => {
  const { t } = useTranslation(props.namespace)
  const nodeRef = useRef()
  const isVisible = useIsVisible(nodeRef)

  // Trigger loop between active element
  const [currentState, setCurrentState] = useState(0)
  const [totalTimeByElement, setTotalTimeByElement] = useState(
    props.timeLeft / props.subtitles.length
  )

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        if (currentState >= props.subtitles.length - 1) {
          setCurrentState(0)
        } else setCurrentState(currentState + 1)
      }, totalTimeByElement * 1000)
      // Clear timeout if the component is unmounted
      return () => clearTimeout(timer)
    }
  })

  function handleClickAnimation(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    event.stopPropagation()
    event.preventDefault()
    const key = (event.target as HTMLDivElement).getAttribute('data-key')
    setCurrentState(+key)
  }

  function createSubSection() {
    let sections = []
    for (let index = 0; index < props.subtitles.length; index++) {
      sections.push(
        <SlideShowElement
          key={index}
          namespace={props.namespace}
          isActive={index == currentState}
          slide={props.subtitles[index]}
          handleClickAnimation={handleClickAnimation}
          index={index}
          timeTotal={totalTimeByElement}
        ></SlideShowElement>
      )
    }
    return sections
  }

  return (
    <div className={`${props.classNames} slideshow-card`} ref={nodeRef}>
      <h1>{t(props.title)}</h1>
      {createSubSection()}
    </div>
  )
}

export default SlideShowCard
