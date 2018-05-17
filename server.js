const express = require('express')
const fetch = require('node-fetch')

const app = express()
const port = process.env.PORT || 5000

// Data's
const tasks = [{
    id: 1,
    reference: 'ZZZ/9',
    task: 'Extract phone numbers',
    filePath: 'c:/documents/phone_numbers.zip'
  },
  {
    id: 2,
    reference: 'ABC/1',
    task: 'Query Twitter Feed',
    filePath: 'twitter/api/search?myterm'
  },
  {
    id: 3,
    reference: 'ZZZ/9',
    task: 'Ingest DataMinr Report',
    filePath: 'c:/documents/dataminr.zip'
}]

// API
app.get('/api/task/:id', (req, res) => {

  const id = parseInt(req.params.id, 10)

  const task = tasks.find(t => t.id == id)

  res.send({ task })
})

app.get('/api/task', (req, res) => {

  res.send({ tasks })

})


app.post('/api/task/', (req, res) => {

  const task = req.params.task

  fetch(`http://localhost:8081/contentListener`, {
    body: task,
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
    mode: 'cors'
  })
  .then(response => {

    if (response.status !== 200) {
      throw Error(response.message);
    }

    return response.json()

  })
  .then(json => {
    res.send({ result: json.result })
  })

})


// Listen
app.listen(port, () => console.log(`Listening on port ${port}`))