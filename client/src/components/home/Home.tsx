import './Home.scss'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { SlideShowProps } from '../common/slideshow-card/SlideshowCard'
import CardContainer from '../common/card-container/CardContainer'
import Heading from '../common/heading/heading'

type HomePageProps = {}

const HomePage: React.FunctionComponent<HomePageProps> = (): any => {
  const { t } = useTranslation('home')

  const test: SlideShowProps = {
    classNames: 'test',
    namespace: 'home',
    timeLeft: 10,
    title: 'cardDemo.title',
    subtitles: [
      {
        title: 'cardDemo.description1.title',
        description: 'cardDemo.description1.subtitle',
      },
      {
        title: 'cardDemo.description2.title',
        description: 'cardDemo.description2.subtitle',
      },
    ],
  }

  return (
    <div className="page-container">
      <Heading title={t('mainPage.title')} />
      <main>
        <div className="mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-gray-200 rounded-lg">
              <CardContainer
                key={1}
                reverse={true}
                pathToMediaSource="assets/slide.gif"
                slideshowProps={test}
              />
              <CardContainer
                key={2}
                reverse={false}
                pathToMediaSource="assets/slide2.gif"
                slideshowProps={test}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage
