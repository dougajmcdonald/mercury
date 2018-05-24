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

class Search extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      searchTerm: ''
    }
  }

  setSearchTerm = e => {
    this.setState({ searchTerm: e.target.value })
  }

  render() {
    const { search, hits } = this.props
    return <SearchGrid>
      <TableTitle>
        Search
      </TableTitle>
      <Panel>
        <SearchField onChange={this.setSearchTerm} placeholder='Search term'/>
        <Button onClick={() => search(this.state.searchTerm)}>Search</Button>
      </Panel>

      <TableTitle>
        Results
      </TableTitle>
      <Panel>
        <Table>
          <thead>
            <tr>
              <th>Filename</th>
              <th>Case ID</th>
              <th>User</th>
              <th>Run ID</th>
              <th>Protective Marking</th>
              <th>Extension</th>
              <th>Type</th>
              <th>Size</th>
              <th>Ingest Time</th>
            </tr>
          </thead>
          <tbody>
            {hits ? hits.map((hit, i) => {
              const result = hit._source
              return <tr key={`${result.id}-${i}`}>
                <td><a href={`nifi/${result.file}`}>{result.file}</a></td>
                <td>{result.case_id}</td>
                <td>{result.user}</td>
                <td>{result.run_id}</td>
                <td>{result.protective_marking}</td>
                <td>{result.file_type}</td>
                <td>{result.mime_type}</td>
                <td>{result.file_size}</td>
                <td>{result.ingest_time}</td>
              </tr>
            }) : <tr><td>No Results</td></tr>}
          </tbody>
        </Table>
      </Panel>
    </SearchGrid>
  }
}

export default Search