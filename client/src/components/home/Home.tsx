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
    title: 'cardDemo1.title',
    subtitles: [
      {
        title: 'cardDemo1.description1.title',
        description: 'cardDemo1.description1.subtitle',
      },
      {
        title: 'cardDemo1.description2.title',
        description: 'cardDemo1.description2.subtitle',
      },
    ],
  }
  const test2: SlideShowProps = {
    classNames: 'test',
    namespace: 'home',
    timeLeft: 10,
    title: 'cardDemo2.title',
    subtitles: [
      {
        title: 'cardDemo2.description1.title',
        description: 'cardDemo2.description1.subtitle',
      },
      {
        title: 'cardDemo2.description2.title',
        description: 'cardDemo2.description2.subtitle',
      },
    ],
  }

  return (
    <div className="page-container">
      <Heading title={t('mainPage.title')} />
      <main>
        <div className="mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div>
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
                slideshowProps={test2}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage
