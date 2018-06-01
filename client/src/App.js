import React, { Component } from 'react'
import styled from 'styled-components'
import { Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import 'typeface-montserrat'

import { size, colour } from './style/theme'
import Sidebar from './components/sidebar'
import Body from './components/body'
import TopBar from './components/topbar'
import BreadcrumbBar from './components/breadcrumbbar'

const AppGrid = styled.main`
  display: grid;
  grid-template-rows: 60px 60px 1fr;
  grid-template-columns: 240px 1fr;

  color: ${colour.bluewhite};
  font-size: ${size.fontbase};
`

const BodyGrid = styled.section`
  display: grid;
  height: calc(100vh - 120px);
`

const history = createBrowserHistory()

class App extends Component {

  state = {
    response: ''
  }

  componentDidMount() {
    // this.callApi()
    //   .then(res => this.setState({ response: res.express }))
    //   .catch(err => console.log(err))
  }

  callApi = async () => {
    const response = await fetch('/api/hello')
    const body = await response.json()

    if (response.status !== 200) {
      throw Error(body.message)
    }

    return body;
  }

  getTask = async (id) => {
    const response = await fetch(`/api/task/${id}`)
    const body = await response.json()

    if (response.status !== 200) {
      throw Error(body.message)
    }

    this.setState({ task: body.task })
  }

  getOperation = async (id) => {
    const response = await fetch(`/api/operation/${id}`)
    const body = await response.json()

    if (response.status !== 200) {
      throw Error(body.message);
    }

    this.setState({ operation: body.operation })
  }

  search = async (searchTerm) => {
    const response = await fetch(`/api/search/${searchTerm}`)
    const body = await response.json()

    if (response.status !== 200) {
      throw Error(body.message)
    }

    this.setState({ hits: body.hits })
  }

  get = async (id) => {
    const response = await fetch(`/api/get/${id}`)

    console.log(response)

    return response
    // const body = await response.json()

    // if (response.status !== 200) {
    //   throw Error(body.message)
    // }

    // this.setState({ file: body.file })
  }

  render() {
    return (
      <Router history={history}>
        <AppGrid>
          <TopBar />
          <BreadcrumbBar />
          <Sidebar />
          <BodyGrid>
            <Body
              search={this.search}
              get={this.get}
              hits={this.state.hits}
              file={this.state.file}
              task={this.state.task}
              operation={this.state.operation}
              getTask={this.getTask}
              getOperation={this.getOperation}/>
          </BodyGrid>
        </AppGrid>
      </Router>
    )
  }
}

export default App
