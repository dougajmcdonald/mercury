import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

import { size, colour } from '../style/theme'
import Table from './table'

const TaskGrid = styled.section`
  display: grid;
  padding: ${size.grid};
  background-color: ${colour.background};
`

const ExhibitGrid = styled.section`
  display: grid;
  grid-template-rows: 40px 1fr;
`

const TableTitle = styled.h2`
  color: ${colour.orange};
  margin: 0;
  font-weight: 400;
  font-size: ${size.fontbase};
`

class Tasks extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      tasks: []
    }
  }

  componentDidMount() {
    this.getTasks()
      .then(res => this.setState({ tasks: res.tasks }))
      .catch(err => console.log(err))
  }

  getTasks = async () => {
    const response = await fetch(`/api/task/`)
    const body = await response.json()

    if (response.status !== 200) {
      throw Error(body.message)
    }

    return body
  }

  render() {
    return <TaskGrid>
      <ExhibitGrid>
        <TableTitle>Outstanding tasks</TableTitle>
        <Table>
          <thead>
            <tr>
              <th>Exhibit Ref.</th>
              <th>Task</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tasks.map(task =>
              <Route key={task.id} render={({ history }) => (
                <tr onClick={() => {
                    this.props.getTask(task.id)
                    history.push(`/task/${task.id}`)
                  }}>
                  <td>{task.reference}</td>
                  <td>{task.task}</td>
                </tr>
              )}/>
            )}
          </tbody>
        </Table>
      </ExhibitGrid>
    </TaskGrid>
  }
}

export default Tasks