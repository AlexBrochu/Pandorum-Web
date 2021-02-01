import './QuestionsAnswers.scss'
import React, { useState } from 'react'
import QACard from './qa-card/QACard'

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
              <QACard
                title="When will the game be launched?"
                text="Eventually! Let me work my magic!"
              ></QACard>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default QuestionsAnswersPage
