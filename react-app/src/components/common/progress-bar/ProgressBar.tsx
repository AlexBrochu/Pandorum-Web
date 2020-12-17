import './ProgressBar.scss'
import React from 'react'
import useResize from '../../../hooks/useResize'

type ProgressBarProps = {
  timeleft: number
  timetotal: number
}

const ProgessBar: React.FunctionComponent<ProgressBarProps> = (
  props: ProgressBarProps
): any => {
  const nodeRef = React.useRef()
  const { width, height } = useResize(nodeRef)
  const [timeleft, setTimeleft] = React.useState(props.timeleft)
  const [progressBarWidth, setProgressBarWidth] = React.useState(
    calculateProgressBarWidth()
  )

  function calculateProgressBarWidth(): number {
    return (props.timeleft * width) / props.timetotal
  }

  React.useEffect(() => {
    if (timeleft > 0) {
      const timer = setTimeout(() => {
        setTimeleft(timeleft - 1)
      }, 1000)
      setProgressBarWidth(calculateProgressBarWidth())
      // Clear timeout if the component is unmounted
      return () => clearTimeout(timer)
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
