import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { colour, size } from '../style/theme'

import fingerprint from '../img/md-finger-print.svg'
import expand from '../img/md-expand.svg'
import home from '../img/md-home.svg'
import filing from '../img/md-filing.svg'

const SidebarGrid = styled.section`
  background-color: ${colour.backgrounddark};
  height: 100vh;
  width: 240px;

  display: grid;
  grid-template-rows: 120px 1fr;
`

const Header = styled.header`
  border-bottom: 1px solid ${colour.backgroundlight};
  padding: ${size.grid};

  display: grid;
  grid-template-rows: 1fr 1fr;

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
  margin-top: ${size.grid};

  a.active {
    background-color: ${colour.background};
  }
`

const NavItem = styled(NavLink)`
  display: grid;
  grid-template-columns: 60px 1fr;

  padding: ${size.grid};

  text-decoration: none;
  color: ${colour.bluewhite};
  line-height: 30px;

  :hover {
    color: ${colour.white};
  }

`

const Sidebar = () =>
  <SidebarGrid>
    <Header>
      <Fingerprint src={fingerprint} />
      National Case Manager
    </Header>
    <Nav>
      <NavItem to="/">
        <Icon src={home} />
        Home
      </NavItem>
      <NavItem to="/">
        <Icon src={filing} />
        All Operations
      </NavItem>
    </Nav>
  </SidebarGrid>

export default Sidebar