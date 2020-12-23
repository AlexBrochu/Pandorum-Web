import './TimeLineCell.scss'
import React, { FunctionComponent } from 'react'
import TimeDetailContainer from '../time-detail-container/TimeDetailContainer'
import { TimeLineContent } from './TimeLineContent'
import { BsGear } from 'react-icons/bs'

type TimeLineCellProps = {
  isFirst: boolean
  isLast: boolean
  contentLeft: TimeLineContent
  contentRigth: TimeLineContent
}

const TimeLineCell: FunctionComponent<TimeLineCellProps> = (
  props: TimeLineCellProps
): any => {
  return (
    <div
      className={`${props.isLast ? 'last-cell' : ''} time-cell flex flex-row`}
    >
      <div className="content-left">
        {props.contentLeft && (
          <TimeDetailContainer
            icon={<BsGear />}
            timeContent={props.contentLeft}
          ></TimeDetailContainer>
        )}
      </div>
      <div className="timeline-cell">
        <div className={`${props.isFirst ? 'first-time' : ''} timeline-body`}>
          <div className="spot-outer-circle">
            <div className="spot-inner-circle"></div>
          </div>
        </div>
        {props.isLast && <div className="down-triangle"></div>}
      </div>

      <div className="content-right">
        {props.contentRigth && (
          <TimeDetailContainer
            icon={<BsGear />}
            timeContent={props.contentRigth}
          ></TimeDetailContainer>
        )}
      </div>
    </div>
  )
}

export default TimeLineCell
