import * as React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import NavBar from './common/navbar/Navbar'
import './App.scss'

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div>
      <NavBar></NavBar>
      <h1>Hello React Typescript! YEAH</h1>
      <Button variant="primary">Primary</Button>
    </div>
  )
}
