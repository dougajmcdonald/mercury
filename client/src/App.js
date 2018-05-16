import React, { Component } from 'react'
import styled from 'styled-components'
import { Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import 'typeface-roboto-condensed'

import { size, colour } from './style/theme'
import Sidebar from './components/sidebar'
import Body from './components/body'
import TopBar from './components/topbar'

const AppGrid = styled.main`
  display: grid;
  grid-template-columns: 240px 1fr;

  grid-row-gap: ${size.grid};
  grid-column-gap: ${size.grid};

  color: ${colour.bluewhite};
  font-size: ${size.fontbase};
`

const BodyGrid = styled.section`
  display: grid;
  grid-template-rows: 120px 1fr;
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


  render() {
    return (
      <Router history={history}>
        <AppGrid>
          <Sidebar />
          <BodyGrid>
            <TopBar />
            <Body task={this.state.task} getTask={this.getTask}/>
          </BodyGrid>
        </AppGrid>
      </Router>
    );
  }
}

export default App
