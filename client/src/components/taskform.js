import React from 'react'
import styled from 'styled-components'

import { size, colour } from '../style/theme'

const TaskFormGrid = styled.section`
  display: grid;
  grid-template-rows: 100px 40px 100px 40px 100px 100px;
  padding: ${size.grid};
  background-color: ${colour.backgroundlight};
`

const Input = styled.input`
  background-color: ${colour.backgrounddark};
  padding: ${size.formpadding};
  font-size: ${size.fontbase};
  border: none;
  border-radius: 2px;
  height: 40px;
  line-height: 40px;
  color: ${colour.bluewhite};
`
const Button = styled.button`
  background-color: ${colour.bluewhite};
  font-size: ${size.fontbase};
  color: ${colour.black};
  padding: ${size.formpadding};
  border-radius: 2px;
  border: none;
  width: 200px;
  height: 40px;
  line-height: 22px;

  :hover {
    cursor: pointer;
    background-color: ${colour.white};
  }
`

const Label = styled.label`
  height: 40px;
  line-height: 40px;
`

class TaskForm extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { match: { params }} = this.props
    this.props.getTask(params.id)
  }

  render() {
    const { task } = this.props
    const { match: { params }} = this.props
    return <TaskFormGrid>
      <h2>Task - {task && task.task}</h2>
      <Label>Exhibit Ref.</Label>
      <Input placeholder="Case Id" value={task ? task.reference : ''} width="200px"/>

      <Label>File path</Label>
      <Input placeholder="File path" value={task ? task.reference : ''}/>
      <Button type="submit">Start Job</Button>
    </TaskFormGrid>
  }
}

export default TaskForm