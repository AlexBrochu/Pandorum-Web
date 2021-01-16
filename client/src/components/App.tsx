import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './common/navbar/Navbar'
import HomePage from './home/Home'
import NewsPage from './news/News'
import RoadmapPage from './roadmap/Roadmap'
import QuestionsAnswersPage from './questions_answers/QuestionsAnswers'
import './App.scss'

type AppState = {}

class App extends React.Component<{}, AppState> {
  render() {
    return (
      <Router>
        <div className="app-container text-center sm:text-left">
          <NavBar></NavBar>
          <Switch>
            <Route path="/qa">
              <QuestionsAnswersPage />
            </Route>
            <Route path="/news">
              <NewsPage />
            </Route>
            <Route path="/roadmap">
              <RoadmapPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
          <div className="footer text-white">Footer TODO</div>
        </div>
      </Router>
    )
  }
}

export default App
