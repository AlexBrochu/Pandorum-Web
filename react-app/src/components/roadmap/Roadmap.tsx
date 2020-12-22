import './Roadmap.scss'
import React from 'react'
import { useTranslation } from 'react-i18next'
import TimeLineCell from './time-line/TimeLineCell'

type RoadmapPageProps = {}

const RoadmapPage: React.FunctionComponent<RoadmapPageProps> = (): any => {
  const { t } = useTranslation('roadmap')
  return (
    <div>
      <header className="bg-white shadow">
        <div className="mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            {t('mainPage.title')}
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <TimeLineCell
              isFirst={true}
              isLast={false}
              contentLeft={{
                title: 'info1.title',
                time: 'info1.time',
                description: 'info1.description',
              }}
              contentRight={null}
            ></TimeLineCell>
            <TimeLineCell
              isFirst={false}
              isLast={false}
              contentLeft={null}
              contentRight={{
                title: 'info1.title',
                time: 'info1.time',
                description: 'info1.description',
              }}
            ></TimeLineCell>
            <TimeLineCell
              isFirst={false}
              isLast={true}
              contentLeft={{
                title: 'info1.title',
                time: 'info1.time',
                description: 'info1.description',
              }}
              contentRight={null}
            ></TimeLineCell>
          </div>
        </div>
      </main>
    </div>
  )
}

export default RoadmapPage
