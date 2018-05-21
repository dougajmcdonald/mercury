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

const BodyGrid = styled.main`
  margin: ${size.grid};
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 3fr 1fr;
  grid-column-gap: ${size.grid};
`

const TabContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(100px, 250px) repeat(auto-fit, 300px);

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

const Body = (props) => {
  const { task, getTask, getOperation } = props
  return <BodyGrid>

    <Route path="/task/:id" render={({ match: { params } }) => (
      <TabContainer>
        <NavItem to={`/task/${params.id}`}><Icon src={Today} />Task</NavItem>
      </TabContainer>
    )}/>

    <Route exact path="/" render={() => (
      <TabContainer>
        <NavItem to="/"><Icon src={Today} />Current Work</NavItem>
        <NavItem to="#"><Icon src={Paper} />Assignment History</NavItem>
        <NavItem to="/exhibits"><Icon src={Cube} />My Assets</NavItem>
      </TabContainer>
    )}/>

    <Route exact path="/operations" render={(props) => <Operations getOperation={getOperation} {...props} />} />
    <Route exact path="/exhibits" render={() => {
      return <div><Work/><Tasks getTask={props.getTask} /></div>
    }} />
    {/* <Route exact path="/current-work" component={Work}/>
    <Route exact path="/assignment-history" component={Work}/>
    <Route exact path="/my-assets" component={Work}/> */}
    <Route path="/task/:id" render={(props) => <TaskForm getTask={getTask} task={task} {...props}  />}/>

    {/* {msg} */}
  </BodyGrid>
}

export default Body