import './TimeLineCell.scss'
import React, { FunctionComponent } from 'react'
import TimeDetailContainer from '../time-detail-container/TimeDetailContainer'
import { TimeLineContent } from './TimeLineContent'

type TimeLineCellProps = {
  isFirst: boolean
  isLast: boolean
  contentRight: TimeLineContent
  contentLeft: TimeLineContent
}

const TimeLineCell: FunctionComponent<TimeLineCellProps> = (
  props: TimeLineCellProps
): any => {
  return (
    <div
      className={`${props.isFirst ? 'first-cell' : ''} time-cell flex flex-row`}
    >
      <div className="content-left">
        {props.contentLeft && (
          <TimeDetailContainer
            timeContent={props.contentLeft}
          ></TimeDetailContainer>
        )}
      </div>
      <div className="timeline-cell">
        {props.isFirst && <div className="top-triangle"></div>}

        <div
          className={`${
            props.isLast ? 'last-time' : ''
          } timeline-body bg-black`}
        ></div>
      </div>

      <div className="content-right">
        {props.contentRight && (
          <TimeDetailContainer
            timeContent={props.contentRight}
          ></TimeDetailContainer>
        )}
      </div>
    </div>
  )
}

export default TimeLineCell
