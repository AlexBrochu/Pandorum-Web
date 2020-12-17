import './Home.scss'
import React from 'react'
import { useTranslation } from 'react-i18next'
import SlideShowCard from '../common/slideshow-card/SlideshowCard'

type HomePageProps = {}

const HomePage: React.FunctionComponent<HomePageProps> = (): any => {
  const { t } = useTranslation()
  const description1 = {
    title: 'cardDemo.description1.title',
    description: 'cardDemo.description1.subtitle',
  }

  const description2 = {
    title: 'cardDemo.description2.title',
    description: 'cardDemo.description2.subtitle',
  }

  return (
    <div>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Home page
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-gray-200 rounded-lg h-96">
              <SlideShowCard
                timeLeft={40}
                namespace="home"
                title="cardDemo.title"
                subtitles={[description1, description2]}
              ></SlideShowCard>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage
