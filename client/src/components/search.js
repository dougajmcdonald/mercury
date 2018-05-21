import React from 'react'
import styled from 'styled-components'

import { size, colour } from '../style/theme'

import TableTitle from './tabletitle'
import Table from './table'
import Panel from './panel'
import Button from './button'

const SearchGrid = styled.section`
  display: grid;
  grid-column-gap: ${size.grid};
  grid-template-rows: 40px 60px 40px 1fr;
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
  margin: ${size.formpadding};

`
const setSearchTerm = (e) => {
  console.log(e.target.value)
}

const Search = ({ search }) =>
  <SearchGrid>
    <TableTitle>
      Search
    </TableTitle>
    <Panel>
      <SearchField onChange={(e) => setSearchTerm(e)} placeholder='Search term'/>
      <Button onClick={() => search()}>Search</Button>
    </Panel>

    <TableTitle>
      Results
    </TableTitle>
    <Panel>
      <Table>

      </Table>
    </Panel>
  </SearchGrid>

export default Search