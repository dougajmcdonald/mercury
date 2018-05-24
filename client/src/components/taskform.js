import React from 'react'
import styled from 'styled-components'

import { size, colour } from '../style/theme'

import TableTitle from './tabletitle'
import Panel from './panel'
import Button from './button'

const TaskFormGrid = styled.section`
  display: grid;
  grid-template-rows: 40px 80px 40px 80px 80px 40px 240px;
  padding: ${size.formpadding};
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

const Label = styled.label`
  height: 40px;
  line-height: 40px;
`

const Response = styled.pre`
  color: ${colour.yellow};
  height: 200px;
  overflow-y: scroll;
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
    return <div>
      <TableTitle>Task - {task && task.task}</TableTitle>
      <Panel>
        <TaskFormGrid>
        <Label>Exhibit Ref.</Label>
        <Input placeholder="Case Id" value={task ? task.reference : ''}/>

        <Label>File path</Label>
        <Input placeholder="File path" value={task ? task.path : ''}/>

        <Button type="submit" onClick={() => this.postTask(task)}>Start Job</Button>

        Log:
        <Response>
          {this.state.log}
        </Response>
        </TaskFormGrid>
      </Panel>
    </div>
  }
}

export default TaskForm