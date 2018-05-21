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

const BodyGrid = styled.main`
  margin: ${size.grid};
  display: grid;
  grid-column-gap: ${size.grid};
`
const DashboardGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
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

  const { task, operation, hits, getTask, getOperation, search } = props

  return <BodyGrid>
    <Route exact path="/" render={(props) => (
      <DashboardGrid>
        <Operations getOperation={getOperation} {...props} />
        <Tasks getTask={getTask} />
        <Work />
      </DashboardGrid>
    )}/>
    <Route exact path="/operations" render={(props) =>
      <Operations getOperation={getOperation} {...props} />} />
    <Route exact path="/exhibits" render={() => (
      <ExibitGrid>
        <Work />
        <Tasks getTask={getTask} />
      </ExibitGrid>
    )} />
    <Route exact path="/search" render={(props) =>
      <Search search={search} hits={hits}  {...props} />} />

    {/* Detail pages */}
    <Route path="/task/:id" render={(props) => <TaskForm getTask={getTask} task={task} {...props}  />}/>
    <Route path="/operation/:id" render={(props) => <OperationForm operation={operation} {...props}  />}/>
  </BodyGrid>
}

export default Body