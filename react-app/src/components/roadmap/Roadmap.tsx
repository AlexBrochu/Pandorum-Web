import './Roadmap.scss'
import React from 'react'
import { useTranslation } from 'react-i18next'
import TimeLineCell from './time-line/TimeLineCell'

type RoadmapPageProps = {}

const RoadmapPage: React.FunctionComponent<RoadmapPageProps> = (): any => {
  const { t } = useTranslation('roadmap')
  return (
    <div className="roadmap-page">
      <header className="shadow">
        <div className="mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            {t('mainPage.title')}
          </h1>
        </div>
      </header>
      <main>
        <div className="roadmap-main-container mx-auto py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row px-4 py-6 sm:px-0">
            <div className="pb-5 lg:w-4/12">
              <h2>Our Mission</h2>
              <hr></hr>
              <p>
                blablablablablablablablabla blablablablablablabla
                blablablablablablablabla
              </p>
            </div>
            <div className="lg:w-8/12">
              <TimeLineCell
                isFirst={true}
                isLast={false}
                contentLeft={{
                  title: 'info1.title',
                  time: 'info1.time',
                  description: 'info1.description',
                }}
                contentRigth={null}
              ></TimeLineCell>
              <TimeLineCell
                isFirst={false}
                isLast={false}
                contentLeft={null}
                contentRigth={{
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
                contentRigth={null}
              ></TimeLineCell>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default RoadmapPage
