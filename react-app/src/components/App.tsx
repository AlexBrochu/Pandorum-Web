import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './common/navbar/Navbar'
import HomePage from './home/Home'
import NewsPage from './news/News'
import RoadmapPage from './roadmap/Roadmap'
import DiscussionsPage from './discussions/Discussions'
import './App.scss'

type AppState = {}

class App extends React.Component<{}, AppState> {
  render() {
    return (
      <Router>
        <div className="text-center sm:text-left bg-teal-50">
          <NavBar></NavBar>
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
