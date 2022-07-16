import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomePage, ErrorPage } from './pages/Index'
// import { Navbar, Sidebar, SearchBar } from './components'
import React from 'react'
function App() {
  return (
    <Router>
      
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/"></Route>
        <Route exact path="/"></Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
