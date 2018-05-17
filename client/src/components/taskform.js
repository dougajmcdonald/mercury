import React from 'react'
import styled from 'styled-components'

import { size, colour } from '../style/theme'

const TaskFormGrid = styled.section`
  display: grid;
  grid-template-rows: 100px 40px 100px 40px 100px 100px 50px;
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

const Response = styled.pre`
  color: ${colour.yellow};
`

class TaskForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      log: ''
    }
  }

  componentDidMount() {
    const { match: { params }} = this.props
    this.props.getTask(params.id)
  }

  postTask = async (task) => {

    const jsonTask = JSON.stringify(task)

    this.setState({
      log: this.state.log += `Posting task
      ${jsonTask}\r\n`
    })

    const response = await fetch('/api/task/', {
      body: jsonTask, // must match 'Content-Type' header
      cache: 'no-cache',
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
      mode: 'cors' // no-cors, cors, *same-origin
    });

    const json = await response.json();

    if (response.status !== 200) {
      throw Error(response.message);
    }

    const log = this.state.log.concat(`Result
    ${JSON.stringify(json)}\r\n`)

    this.setState({ log })
  }

  render() {
    const { task } = this.props
    return <TaskFormGrid>
      <h2>Task - {task && task.task}</h2>
      <Label>Exhibit Ref.</Label>
      <Input placeholder="Case Id" value={task ? task.reference : ''}/>

      <Label>File path</Label>
      <Input placeholder="File path" value={task ? task.filePath : ''}/>

      <Button type="submit" onClick={() => this.postTask(task)}>Start Job</Button>

      Log:
      <Response>
        {this.state.log}
      </Response>
    </TaskFormGrid>
  }
}

export default TaskForm