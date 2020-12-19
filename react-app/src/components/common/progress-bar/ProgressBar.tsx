import './ProgressBar.scss'
import React, { useState, useRef, useEffect } from 'react'

type ProgressBarProps = {
  timetotal: number
  isActive: boolean
}

const ProgessBar: React.FunctionComponent<ProgressBarProps> = (
  props: ProgressBarProps
): any => {
  const nodeRef: React.MutableRefObject<any> = useRef()
  let { width, height } = { width: 0, height: 0 }
  const [timeleft, setTimeleft] = useState(props.timetotal - 1)
  const [progressBarWidth, setProgressBarWidth] = useState(
    calculateProgressBarWidth()
  )

  function calculateProgressBarWidth(): number {
    const progressWidth =
      ((props.timetotal - timeleft) * width) / props.timetotal
    return progressWidth
  }

  useEffect(() => {
    width = nodeRef.current.clientWidth
    if (props.isActive) {
      const timer = setTimeout(() => {
        setTimeleft(timeleft - 1)
      }, 1000)
      setProgressBarWidth(calculateProgressBarWidth())
      // Clear timeout if the component is unmounted
      return () => clearTimeout(timer)
    } else {
      // reset timer
      setTimeleft(props.timetotal)
    }
  })

  return (
    <div className="progressBar" ref={nodeRef}>
      <div
        className="bar"
        style={{ transition: 'width 1s ease-in-out', width: progressBarWidth }}
      ></div>
    </div>
  )
}

export default ProgessBar
