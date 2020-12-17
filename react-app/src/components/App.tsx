import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './common/navbar/Navbar'
import HomePage from './home/Home'
import NewsPage from './news/News'
import RoadmapPage from './roadmap/Roadmap'
import DiscussionsPage from './discussions/Discussions'
import SlideShowCard from './common/slideshow-card/SlideshowCard'
import './App.scss'

type AppState = {}

class App extends React.Component<{}, AppState> {
  render() {
    const description1 = {
      title: 'cardDemo.description1.title',
      description: 'cardDemo.description1.subtitle',
    }

    const description2 = {
      title: 'cardDemo.description2.title',
      description: 'cardDemo.description2.subtitle',
    }

    return (
      <Router>
        <div>
          <NavBar></NavBar>
          <h1>Hello React Typescript!</h1>

          {/* <SlideShowCard
          timeLeft={40}
          namespace="home"
          title="cardDemo.title"
          subtitles={[description1, description2]}
        ></SlideShowCard> */}
          <Switch>
            <Route path="/discussions">
              <DiscussionsPage />
            </Route>
            <Route path="/news">
              <NewsPage />
            </Route>
            <Route path="/roadmaps">
              <RoadmapPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
