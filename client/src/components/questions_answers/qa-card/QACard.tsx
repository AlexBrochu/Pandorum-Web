import './QACard.scss'
import React, { useState } from 'react'
import { BsFillCaretLeftFill } from 'react-icons/bs'

type QACardProps = {
  title: String
  text: String
}

const QACard: React.FunctionComponent<QACardProps> = (
  props: QACardProps
): any => {
  const [isActive, setIsActive] = useState(false)

  function handleClickAnimation(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    event.stopPropagation()
    event.preventDefault()
    setIsActive(!isActive)
  }

  return (
    <div className="qa-container">
      <div onClick={handleClickAnimation}>
        <h2>{props.title}</h2>
        <span
          className={`${
            isActive ? 'slidedown' : 'slideup'
          } mt-auto mb-auto pr-1`}
        >
          <BsFillCaretLeftFill />
        </span>
      </div>

      <p className={`${isActive ? 'slidedown' : 'slideup'} `}>{props.text}</p>
    </div>
  )
}

export default QACard
