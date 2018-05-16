import React from 'react'
import styled from 'styled-components'

import { colour, size } from '../style/theme'

import UserPanel from './userpanel'

const TopBarGrid = styled.section`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr 1fr;

  border-bottom: 1px solid ${colour.backgroundlight};
  padding: ${size.grid};
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

const TopBar = () =>
  <TopBarGrid>
    <SearchField placeholder='search' />
    <UserPanel />
  </TopBarGrid>

export default TopBar