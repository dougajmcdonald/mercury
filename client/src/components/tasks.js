import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

import { size, colour } from '../style/theme'

const TaskGrid = styled.section`
  display: grid;
  padding: ${size.grid};
  background-color: ${colour.backgroundlight};
`

const Icon = styled.img`
  width: 25px;
  height: 25px;
  padding-left: ${size.tabpadding};
  padding-right: ${size.tabpadding};
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

const ExhibitTable = styled.table`
  background-color: ${colour.bluewhite};
  color: ${colour.black};
  padding: ${size.formpadding};
  border-collapse: collapse;

  thead {
    text-align: left;
  }

  thead > tr > th {
    border-bottom: 1px solid ${colour.black};
  }

  tr {
    line-height: 40px;
  }

  td, th {
    padding: ${size.formpadding};
  }

  tbody > tr {
    :hover {
      background-color: ${colour.white};
      cursor: pointer;
    }
  }
`

class Tasks extends React.Component {

  constructor(props) {
    super(props)

    console.log(props)

    this.state = {
      tasks: [
        {
          id: 1,
          reference: 'ZZZ/9',
          task: 'Upload something'
        },
        {
          id: 2,
          reference: 'ABC/1',
          task: 'Backup something'
        },
        {
          id: 3,
          reference: 'ZZZ/9',
          task: 'Do something'
        },
      ]
    }
  }

  render() {
    const { activeId } = this.props
    return <TaskGrid>
      <ExhibitGrid>
        <TableTitle>Outstanding tasks</TableTitle>
        <ExhibitTable>
          <thead>
            <tr>
              <th>Exhibit Ref.</th>
              <th>Task</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tasks.map(task =>
              <Route key={task.id} render={({ history }) => (
                <tr onClick={() => history.push(`/task/${task.id}`)}>
                  <td>{task.reference}</td>
                  <td>{task.task}</td>
                </tr>
              )}/>
            )}
          </tbody>
        </ExhibitTable>
      </ExhibitGrid>
    </TaskGrid>
  }
}

export default Tasks