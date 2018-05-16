import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { size, colour } from '../style/theme'
import Today from '../img/md-today.svg'
import Paper from '../img/md-paper.svg'
import Cube from '../img/md-cube.svg'

import Work from '../components/work'

const BodyGrid = styled.main`
  margin: ${size.grid};

  display: grid;
  grid-template-rows: 40px 1fr;
  grid-template-columns: 1fr;
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
  grid-template-columns: 60px 1fr;

  padding: ${size.tabpadding};
  margin-right: ${size.formpadding};

  text-decoration: none;
  color: ${colour.bluewhite};
  line-height: 30px;

  :hover {
    color: ${colour.white};
    background-color: ${colour.backgrounddark};
  }
`

const Icon = styled.img`
  width: 30px;
  height: 30px;
`

const Body = ({ msg }) =>
  <BodyGrid>
    <TabContainer>
      <NavItem to="/current-work"><Icon src={Today} />Current Work</NavItem>
      <NavItem to="/assignment-history"><Icon src={Paper} />Assignment History</NavItem>
      <NavItem to="/my-assets"><Icon src={Cube} />My Assets</NavItem>
    </TabContainer>
    <Route exact path="/current-work" component={Work}/>
    <Route exact path="/assignment-history" component={Work}/>
    <Route exact path="/my-assets" component={Work}/>
    {msg}
  </BodyGrid>

export default Body