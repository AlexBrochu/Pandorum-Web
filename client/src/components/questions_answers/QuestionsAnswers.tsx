import './QuestionsAnswers.scss'
import React from 'react'
import { useTranslation } from 'react-i18next'
import QACard from './qa-card/QACard'

type QuestionsAnswersProps = {}

const QuestionsAnswersPage: React.FunctionComponent<QuestionsAnswersProps> = (): any => {
  const { t } = useTranslation('qa')

  return (
    <div className="qa-page-container">
      <header className="bg-white shadow">
        <div className="mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            {t('title')}
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div>
              {[1, 2].map((value, index) => (
                <QACard
                  title={t('card' + value + '.title')}
                  text={t('card' + value + '.text')}
                ></QACard>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default QuestionsAnswersPage
