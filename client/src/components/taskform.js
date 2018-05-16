import React from 'react'
import styled from 'styled-components'

import { size, colour } from '../style/theme'

const TaskFormGrid = styled.section`
  display: grid;
  padding: ${size.grid};
  background-color: ${colour.backgroundlight};
`

const TaskForm = ({ match: { params }}) =>
  <TaskFormGrid>
    <h2>Task Edit - {params.id}</h2>
    <input placeholder="Case Id" />
    <input placeholder="File path" />
    <button type="submit">Start Job</button>
  </TaskFormGrid>

export default TaskForm