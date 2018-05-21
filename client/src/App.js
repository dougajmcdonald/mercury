import React, { Component } from 'react'
import styled from 'styled-components'
import { Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import 'typeface-roboto-condensed'
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
  max-height: 100vh;
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
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }

    return body;
  }

  getTask = async (id) => {
    const response = await fetch(`/api/task/${id}`);
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }

    this.setState({ task: body.task })
  }

  getOperation = async (id) => {
    const response = await fetch(`/api/operation/${id}`);
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }

    this.setState({ operation: body.operation })
  }


  render() {
    return (
      <Router history={history}>
        <AppGrid>
          <TopBar />
          <BreadcrumbBar />
          <Sidebar />
          <BodyGrid>
            <Body task={this.state.task} getTask={this.getTask} getOperation={this.getOperation}/>
          </BodyGrid>
        </AppGrid>
      </Router>
    );
  }
}

export default App
