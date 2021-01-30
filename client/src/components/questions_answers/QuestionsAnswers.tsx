import './QuestionsAnswers.scss'
import React, { useState } from 'react'
import { BsFillCaretLeftFill } from 'react-icons/bs'

type QuestionsAnswersProps = {}

const QuestionsAnswersPage: React.FunctionComponent<QuestionsAnswersProps> = (): any => {
  const [isActive, setIsActive] = useState(false)

  function handleClickAnimation(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    event.stopPropagation()
    event.preventDefault()
    setIsActive(!isActive)
  }

  return (
    <div className="qa-page-container">
      <header className="bg-white shadow">
        <div className="mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Questions & Answers page
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div>
              <div className="qa-container">
                <h2 onClick={handleClickAnimation}>
                  When will the game be launched?
                  <span
                    className={`${
                      isActive ? 'slidedown' : 'slideup'
                    } mt-auto mb-auto pr-1`}
                  >
                    <BsFillCaretLeftFill />
                  </span>
                </h2>
                <p className={`${isActive ? 'slidedown' : 'slideup'} `}>
                  Eventually! Let me work my magic!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default QuestionsAnswersPage
