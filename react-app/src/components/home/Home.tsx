import './Home.scss'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { SlideShowProps } from '../common/slideshow-card/SlideshowCard'
import CardContainer from '../common/card-container/CardContainer'

type HomePageProps = {}

const HomePage: React.FunctionComponent<HomePageProps> = (): any => {
  const { t } = useTranslation()

  const test: SlideShowProps = {
    classNames: 'test',
    namespace: 'home',
    timeLeft: 40,
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
    <div>
      <header className="bg-white shadow">
        <div className="mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Home page
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-gray-200 rounded-lg">
              {[1, 2, 3, 4].map((value) => (
                <CardContainer
                  key={value}
                  reverse={!!(value % 2)}
                  pathToMediaSource="test"
                  slideshowProps={test}
                ></CardContainer>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage
