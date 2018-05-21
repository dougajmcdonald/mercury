import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { colour, size } from '../style/theme'

import Halo from '../img/md-aperture.svg'

import UserPanel from './userpanel'

const TopBarGrid = styled.section`
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 1fr;

  grid-column: 1 / 3;
  background-color: ${colour.background};
`

const SearchField = styled.input`
  border: 1px solid ${colour.bluewhite};
  background-color: ${colour.backgroundlight};
  grid-row: 1;
  width: 50%;
  padding: ${size.formpadding};
  color: ${colour.bluewhite};
  font-size: ${size.fontbase};
  border-radius: 2px;
`

const Logo = styled.div`
  background-color: ${colour.backgrounddark};
  color: ${colour.white};
  display: grid;
  grid-template-columns: 70px 1fr;
`

const HaloImage = styled.img`
  width: 40px;
  height: 40px;
  margin-top: ${size.formpadding};
  margin-left: ${size.grid};
`

const LogoText = styled.span`
  line-height: 60px;
`

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 100px 100px 100px;

  a.active {
    background-color: ${colour.yellow};
    color: ${colour.backgrounddark};
  }
`

const NavItem = styled(NavLink)`

  text-decoration: none;
  color: ${colour.white};
  line-height: 60px;
  font-size: ${size.fontsmall};
  text-align: center;

  :hover {
    background-color: ${colour.yellow};
    color: ${colour.backgrounddark};
  }

`

const TopBar = () =>
  <TopBarGrid>
    <Logo>
      <HaloImage src={Halo} />
      <LogoText>Halo</LogoText>
    </Logo>
    <Nav>
      <NavItem to="/" exact>
        Dashboard
      </NavItem>
      <NavItem to="/operations">
        Operations
      </NavItem>
      <NavItem to="/exhibits">
        Exhibits
      </NavItem>
    </Nav>
  </TopBarGrid>

export default TopBar