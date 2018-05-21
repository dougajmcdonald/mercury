import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { size, colour } from '../style/theme'
import Today from '../img/md-today.svg'
import Paper from '../img/md-paper.svg'
import Cube from '../img/md-cube.svg'
import Clipboard from '../img/md-clipboard.svg'


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

const TabContainer = styled.div`
  display: grid;

  .active {
    background-color: ${colour.backgroundlight};
  }
`

const NavItem = styled(NavLink)`
  display: grid;
  grid-template-columns: 50px 1fr;

  padding: ${size.formpadding};
  padding-left: ${size.grid};
  margin-right: ${size.formpadding};

  text-decoration: none;
  color: ${colour.bluewhite};
  background-color: ${colour.backgrounddark};
  line-height: 40px;

  :hover {
    color: ${colour.white};
    background-color: ${colour.backgroundlight};
  }
`

const Icon = styled.img`
  padding-top: ${size.tabpadding};
  line-height: 40px;
  width: 30px;
  height: 30px;
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
    {/* <Route exact path="/current-work" component={Work}/>
    <Route exact path="/assignment-history" component={Work}/>
    <Route exact path="/my-assets" component={Work}/> */}
    <Route path="/task/:id" render={(props) => <TaskForm getTask={getTask} task={task} {...props}  />}/>

  </BodyGrid>
}

export default Body