import './TimeDetailContainer.scss'
import React, { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'
import { TimeLineContent } from '../time-line/TimeLineContent'

type TimeDetailContainerProps = {
  timeContent: TimeLineContent
  icon: JSX.Element
}

const TimeDetailContainer: FunctionComponent<TimeDetailContainerProps> = (
  props: TimeDetailContainerProps
): any => {
  const { t } = useTranslation('roadmap')
  return (
    <div className="time-detail-container">
      <div className="content-title">
        <p>{t(props.timeContent.time)}</p>
      </div>
      <div className="content-description">
        <div className="flex">
          <span className="mt-auto mb-auto pr-1">{props.icon}</span>
          <h1>{t(props.timeContent.title)}</h1>
        </div>
        <p>{t(props.timeContent.description)}</p>
      </div>
    </div>
  )
}

export default TimeDetailContainer
