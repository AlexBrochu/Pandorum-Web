import './SlideshowElement.scss'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Description } from '../slideshow-card/SlideshowText'
import ProgressBar from '../progress-bar/ProgressBar'

type SlideShowElementProps = {
  namespace: string
  slide: Description
  isActive: boolean
  handleClickAnimation: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void
  index: number
  timeTotal: number
}

const SlideShowElement: React.FunctionComponent<SlideShowElementProps> = (
  props: SlideShowElementProps
): any => {
  const { t } = useTranslation(props.namespace)

  return (
    <div
      key={props.index}
      data-key={props.index}
      className="subsection grid grid-cols-2 gap-4"
      onClick={props.handleClickAnimation}
    >
      <div className="col-span-2">
        <h2 data-key={props.index}>{t(props.slide.title)}</h2>
      </div>
      <div className={props.isActive ? 'slidedown' : 'slideup'}>
        <ProgressBar
          timetotal={props.timeTotal}
          isActive={props.isActive}
        ></ProgressBar>
      </div>
      <div>
        <p className={props.isActive ? 'slidedown' : 'slideup'}>
          {t(props.slide.description)}
        </p>
      </div>
    </div>
  )
}

export default SlideShowElement
