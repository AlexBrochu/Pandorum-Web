import * as React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import NavBar from './common/navbar/Navbar'
import SlideShowCard from './slideshow-card/SlideshowCard'
import { withTranslation, WithTranslation } from 'react-i18next'
import './App.scss'

type AppState = {
  lang: string
}

class App extends React.Component<WithTranslation, AppState> {
  constructor(props: WithTranslation) {
    super(props)
    this.state = {
      lang: 'fr',
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    if (this.state.lang === 'fr') {
      this.setState({
        lang: 'en',
      })
    } else {
      this.setState({
        lang: 'fr',
      })
    }
    this.props.i18n.changeLanguage(this.state.lang)
  }

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
      <div>
        <NavBar></NavBar>
        <h1>Hello React Typescript! {this.props.t('test.test')}</h1>
        <Button onClick={() => this.handleClick()} variant="primary">
          {this.state.lang}
        </Button>
        <SlideShowCard
          timeLeft={40}
          namespace="home"
          title="cardDemo.title"
          subtitles={[description1, description2]}
        ></SlideShowCard>
      </div>
    )
  }
}

export default withTranslation('common')(App)
