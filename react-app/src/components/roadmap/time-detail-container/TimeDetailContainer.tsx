import React, { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'
import { TimeLineContent } from '../time-line/TimeLineContent'

type TimeDetailContainerProps = {
  timeContent: TimeLineContent
}

const TimeDetailContainer: FunctionComponent<TimeDetailContainerProps> = (
  props: TimeDetailContainerProps
): any => {
  const { t } = useTranslation('roadmap')
  return (
    <>
      <div className="content-title">
        <h1>{t(props.timeContent.title)}</h1>
        <p>{t(props.timeContent.time)}</p>
      </div>

      <p>{t(props.timeContent.description)}</p>
    </>
  )
}

export default TimeDetailContainer
