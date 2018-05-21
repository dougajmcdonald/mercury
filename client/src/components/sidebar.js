import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { colour, size } from '../style/theme'

import Grid from '../img/md-grid.svg'
import Filing from '../img/md-filing.svg'
import Cube from '../img/md-cube.svg'
import Search from '../img/md-search.svg'

const SidebarGrid = styled.section`
  background-color: ${colour.backgrounddark};
  height: 100vh;
  width: 240px;
  grid-row-start: 3;

  display: grid;
  grid-template-rows: 40px 1fr;
`

const Fingerprint = styled.img`
  width: 50px;
  height: 58px;
`

const Expand = styled.img`
  width: 60px;
  height: 60px;
  margin-top: -30px;
  margin-left: -5px;
`

const Icon = styled.img`
  width: 30px;
  height: 30px;
`

const Nav = styled.nav`

  a.active {
    background-color: ${colour.backgroundlight};
    border-left: 5px solid ${colour.yellow};
  }
`

const NavItem = styled(NavLink)`
  display: grid;
  grid-template-columns: 60px 1fr;
  background-color: ${colour.background};

  padding: ${size.grid};

  text-decoration: none;
  color: ${colour.bluewhite};
  line-height: 30px;
  border-left: 5px solid ${colour.backgrounddark};

  :hover {
    color: ${colour.white};
    border-left: 5px solid ${colour.yellow};
  }
`

const User = styled.div`
  background-color: ${colour.backgrounddark};
  color: ${colour.orange};
  padding-left: ${size.grid};
  font-size: ${size.fontsmall};
  line-height: 40px;
`

const Sidebar = () =>
  <SidebarGrid>
    <User>
      Doug McDonald
    </User>
    <Nav>
      <NavItem to="/" exact>
        <Icon src={Grid} />
        Dashboard
      </NavItem>
      <NavItem to="/operations">
        <Icon src={Filing} />
        Operations
      </NavItem>
      <NavItem to="/exhibits">
        <Icon src={Cube} />
        Exhibits
      </NavItem>
      <NavItem to="/search">
        <Icon src={Search} />
        Search
      </NavItem>
    </Nav>
  </SidebarGrid>

export default Sidebar