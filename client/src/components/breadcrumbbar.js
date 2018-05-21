import React from 'react'
import styled from 'styled-components'

import { colour, size } from '../style/theme'

import Halo from '../img/md-aperture.svg'

import UserPanel from './userpanel'

const TopBarGrid = styled.section`
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 1fr;

  grid-column: 1 / 3;
  background-color: ${colour.backgrounddark};
`

const Logo = styled.div`
  background-color: ${colour.backgroundlight};
  color: ${colour.white};
  font-weight: bold;
`

const LogoText = styled.span`
  line-height: 60px;
  padding-left: ${size.grid};
`

const TopBar = () =>
  <TopBarGrid>
    <Logo>
      <LogoText>National Case Manager</LogoText>
    </Logo>
  </TopBarGrid>

export default TopBar