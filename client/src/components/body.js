import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

import { size } from '../style/theme'

import Work from '../components/work'
import Tasks from '../components/tasks'
import Operations from '../components/operations'
import TaskForm from '../components/taskform'
import OperationForm from '../components/operationform'
import Search from '../components/search'
import Graph from '../components/graph'

const BodyGrid = styled.main`
  margin: ${size.grid};
  display: grid;
  grid-column-gap: ${size.grid};
`
const DashboardGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;i
  grid-column-gap: ${size.grid};
  grid-row-gap: ${size.grid};
`

const ExibitGrid = styled.section`
  display: grid;
  grid-column-gap: ${size.grid};
  grid-row-gap: ${size.grid};
  grid-template-rows: 1fr 1fr;
`

const Body = (props) => {

  const { task, get, operation, hits, getTask, getOperation, search, file, graphData, getGraph } = props

  return <BodyGrid>
    <Route exact path="/" render={props => (
      <DashboardGrid>
        <Operations getOperation={getOperation} {...props} />
        <Tasks getTask={getTask} />
        <Work />
      </DashboardGrid>
    )}/>

    <Route exact path="/operations" render={props =>
      <Operations getOperation={getOperation} {...props} />} />

    <Route exact path="/exhibits" render={() => (
      <ExibitGrid>
        <Work />
        <Tasks getTask={getTask} />
      </ExibitGrid>
    )} />

    <Route exact path="/search" render={props =>
      <Search search={search} get={get} hits={hits} file={file} {...props} />} />

    <Route exact path="/graph" render={props =>
      <Graph data={graphData} getGraph={getGraph} {...props} />} />

    <Route path="/task/:id" render={props => <TaskForm getTask={getTask} task={task} {...props}  />}/>
    <Route path="/operation/:id" render={props => <OperationForm operation={operation} {...props}  />}/>
  </BodyGrid>
}

export default Body