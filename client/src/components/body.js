import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

import { size } from '../style/theme'

import Work from '../components/work'
import Tasks from '../components/tasks'
import Operations from '../components/operations'
import TaskForm from '../components/taskform'
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
  const { task, getTask, getOperation } = props
  return <BodyGrid>
    <Route exact path="/" render={(props) => (
      <DashboardGrid>
        <Operations getOperation={getOperation} {...props} />
        <Tasks getTask={props.getTask} />
        <Work />
      </DashboardGrid>
    )}/>
    <Route exact path="/search" render={(props) =>
      <Search {...props} />} />
    <Route exact path="/operations" render={(props) =>
      <Operations getOperation={getOperation} {...props} />} />
    <Route exact path="/exhibits" render={() => (
      <ExibitGrid>
        <Work/>
        <Tasks getTask={props.getTask} />
      </ExibitGrid>
    )} />
    <Route path="/task/:id" render={(props) => <TaskForm getTask={getTask} task={task} {...props}  />}/>
  </BodyGrid>
}

export default Body