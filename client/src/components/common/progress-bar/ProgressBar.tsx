import './ProgressBar.scss'
import React, { useEffect, useState } from 'react'

type ProgressBarProps = {
  timetotal: number
  isActive: boolean
}

const ProgessBar: React.FunctionComponent<ProgressBarProps> = (
  props: ProgressBarProps
): any => {
  const [active, setActive] = useState(false)
  useEffect(() => {
    if (!active && props.isActive) {
      const timer = setTimeout(() => {
        setActive(true)
      }, 20)
      // Clear timeout if the component is unmounted
      return () => clearTimeout(timer)
    }
    if (active && !props.isActive) {
      setActive(false)
    }
  })
  return (
    <div className="progressBar">
      <div
        className={`${active ? 'active' : 'notransition'} bar`}
        style={{
          transition: 'height ' + props.timetotal + 's ease-in',
        }}
      ></div>
    </div>
  )
}

export default ProgessBar
