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

  getGraph = async () => {

    const payload = JSON.stringify({"statements": [ {
      "statement": "MATCH (n) OPTIONAL MATCH (n)-[r]-() RETURN n, r",
      "resultDataContents":["row", "graph"]
    }]})

    const response = await fetch(`http://localhost:7474/db/data/transaction/commit`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: payload
    })

    const body = await response.json()

    console.log(body)

    // var nodesDict = body.results.map(result =>
    //   result.data.reduce(function(dict, node) {
    //     dict[node.Id] = node
    //     return dict
    // }, {}))

    //console.log(nodesDict)

    // const graphData = body.results.map(result => (
    //   result.data.map(node => ({
    //     id: node.graph.meta[0].id,
    //     phone_number: node.graph.row[0].phone_number
    //   }))))

    if (response.status !== 200) {
      throw Error(body.message)
    }

    this.setState({ graphData: body })


    //console.log(graphData)
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
              graphData={this.state.graphData}
              operation={this.state.operation}
              getTask={this.getTask}
              getGraph={this.getGraph}
              getOperation={this.getOperation}/>
          </BodyGrid>
        </AppGrid>
      </Router>
    )
  }
}

export default App
