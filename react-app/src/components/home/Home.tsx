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
      <h1>Home Page</h1>
      <SlideShowCard
        timeLeft={40}
        namespace="home"
        title="cardDemo.title"
        subtitles={[description1, description2]}
      ></SlideShowCard>
    </div>
  )
}

export default HomePage
