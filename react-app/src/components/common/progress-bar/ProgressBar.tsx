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
  const [progressBarLength, setProgressBarLength] = useState(
    calculateProgressBarLength()
  )

  function calculateProgressBarLength(): number {
    const progressLength =
      ((props.timetotal - timeleft) * height) / props.timetotal
    return progressLength
  }

  useEffect(() => {
    height = nodeRef.current.clientHeight
    if (props.isActive) {
      const timer = setTimeout(() => {
        setTimeleft(timeleft - 1)
      }, 1000)
      setProgressBarLength(calculateProgressBarLength())
      // Clear timeout if the component is unmounted
      return () => clearTimeout(timer)
    } else {
      // reset timer
      setTimeleft(props.timetotal)
    }
  })

  return (
    <div className="progressBar" ref={nodeRef} style={{ height: '40px' }}>
      <div
        className="bar"
        style={{
          transition: 'height 1s ease-in-out',
          height: progressBarLength,
        }}
      ></div>
    </div>
  )
}

export default ProgessBar
