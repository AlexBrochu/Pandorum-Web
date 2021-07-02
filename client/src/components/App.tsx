import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import NavBar from './common/navbar/Navbar'
import CustomFooter from './common/footer/CustomFooter'
import HomePage from './home/Home'
import NewsPage from './news/News'
import RoadmapPage from './roadmap/Roadmap'
import QuestionsAnswersPage from './questions_answers/QuestionsAnswers'
import './App.scss'
import ProtectedRoute from './common/authentication/routes/protected-route'
import ProfilePage from './profile/Profile'
import Auth0ProviderWithHistory from '../auth/auth0-provider-with-history'

const App: React.FunctionComponent<any> = () => {
  return (
    <Router>
      <Auth0ProviderWithHistory>
        <div className="app-container text-center sm:text-left">
          <NavBar></NavBar>
          <Switch>
            <Route path="/qa">
              <QuestionsAnswersPage />
            </Route>
            <ProtectedRoute path="/news" component={NewsPage} />
            <Route path="/roadmap">
              <RoadmapPage />
            </Route>
            <ProtectedRoute path="/profile" component={ProfilePage} />
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
          <CustomFooter />
        </div>
      </Auth0ProviderWithHistory>
    </Router>
  )
}

export default App
