import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

import { colour } from '../style/theme'

import Table from './table'
import TableTitle from './tabletitle'

const Grid = styled.section`
  display: grid;
  background-color: ${colour.background};
  min-height: 300px;
  border-radius: 2px;
`

const ExhibitGrid = styled.section`
  display: grid;
  grid-template-rows: 40px 1fr;
`

class Operations extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      items: []
    }
  }

  componentDidMount() {
    this.getOperations()
      .then(res => this.setState({ items: res.operations }))
      .catch(err => console.log(err))
  }

  getOperations = async () => {
    const response = await fetch(`/api/operation/`)
    const body = await response.json()

    if (response.status !== 200) {
      throw Error(body.message)
    }

    return body
  }

  render() {
    return <Grid>
      <ExhibitGrid>
        <TableTitle>Operations</TableTitle>
        <Table>
          <thead>
            <tr>
              <th>Operation</th>
              <th>Task</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map(item =>
              <Route key={item.id} render={({ history }) => (
                <tr onClick={() => {
                    this.props.getOperation(item.id)
                    history.push(`/operation/${item.id}`)
                  }}>
                  <td>{item.operation}</td>
                  <td>{item.reference}</td>
                </tr>
              )}/>
            )}
          </tbody>
        </Table>
      </ExhibitGrid>
    </Grid>
  }
}

export default Operations