import './Roadmap.scss'
import React from 'react'
import { useTranslation } from 'react-i18next'

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
            <div className="time-cell flex flex-row">
              <div className="content-left">
                <div className="content-title">
                  <h1>{t('info1.title')}</h1>
                  <p>{t('info1.time')}</p>
                </div>

                <p>{t('info1.description')}</p>
              </div>
              <div className="timeline-cell">
                <div className="top-triangle"></div>
                <div className="timeline-body bg-black"></div>
              </div>

              <div className="content-right"></div>
            </div>
            <div className="time-cell flex flex-row">
              <div className="content-left"></div>
              <div className="timeline-cell">
                <div className="timeline-body bg-gray-700"></div>
              </div>

              <div className="content-right">
                <div className="content-title">
                  <h1>{t('info1.title')}</h1>
                  <p>{t('info1.time')}</p>
                </div>

                <p>{t('info1.description')}</p>
              </div>
            </div>
            <div className="time-cell flex flex-row">
              <div className="content-left">
                <div className="content-title">
                  <h1>{t('info1.title')}</h1>
                  <p>{t('info1.time')}</p>
                </div>

                <p>{t('info1.description')}</p>
              </div>
              <div className="timeline-cell">
                <div className="timeline-body last-time bg-black"></div>
              </div>
              <div className="content-right"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default RoadmapPage
