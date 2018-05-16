import React from 'react'
import styled from 'styled-components'

import { size, colour } from '../style/theme'

import Apple from '../img/logo-apple.svg'
import Android from '../img/logo-android.svg'
import Windows from '../img/logo-windows.svg'
import Phone from '../img/md-phone-portrait.svg'
import Tablet from '../img/md-tablet-landscape.svg'
import Desktop from '../img/md-desktop.svg'

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

  thead {
    text-align: left;
  }

  thead > tr > th {
    border-bottom: 1px solid ${colour.black};
  }

  tr {
    line-height: 60px;
  }
`

class Tasks extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      tasks: [
        {
          reference: 'ZZZ/9',
          task: 'Upload something'
        },
        {
          reference: 'ABC/1',
          task: 'Backup something'
        },
        {
          reference: 'ZZZ/9',
          task: 'Do something'
        },
      ]
    }
  }

  render() {
    return <TaskGrid>
      <ExhibitGrid>
        <TableTitle>Outstanding tasks</TableTitle>
        <ExhibitTable>
          <thead>
            <tr>
              <th>Exhibit Ref.</th>
              <th>Tasks</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tasks.map(task =>
              <tr key={task.reference}>
                <td>{task.reference}</td>
                <td>{task.task}</td>
              </tr>
            )}
          </tbody>
        </ExhibitTable>
      </ExhibitGrid>
    </TaskGrid>
  }
}

export default Tasks