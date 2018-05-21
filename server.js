const express = require('express')
const fetch = require('node-fetch')
const elastic = require('elasticsearch')

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

const operations = [{
  id: 1,
  reference: 'ZZZ/9',
  operation: 'Fuzzy Clam'
},
{
  id: 2,
  reference: 'ABC/1',
  operation: 'Steel Dog'
},
{
  id: 3,
  reference: 'ZZZ/9',
  operation: 'Slippery Weasel'
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

app.get('/api/operation', (req, res) => {
  res.send({ operations })
})

app.get('/api/operation/:id', (req, res) => {

  const id = parseInt(req.params.id, 10)

  const operation = operations.find(t => t.id == id)

  res.send({ operation })
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

app.get('/api/search/:searchTerm', (req, res) => {

  // const client = new elasticsearch.Client({
  //   host: 'localhost:9200',
  //   log: 'trace'
  // })

  // client.search({
  //   index: 'file_metadata',
  //   q: `file:${req.params.searchTerm}`
  //   body: {
  //     query: {
  //       match: {
  //         body: req.params.searchTerm
  //       }
  //     }
  //   }
  // }).then(resp => {
  //     const hits = resp.hits.hits
  //     res.send({ hits })
  // }, (err) => {
  //     console.trace(err.message)
  // })

  res.send({ hits: [
    {
      file: {
        name: 'file1.txt',
        size: 128
      },
      filepath: 'c:\\file1.txt',
      case_id: 123,
      user: 'Doug McDonald',
      run_id: 1,
      protective_marking: 'UC',
      mime: {
        extension: 'txt',
        type: 'text/plain'
      },
      ingest_time: new Date()
    },
    {
      file: {
        name: 'file2.txt',
        size: 256
      },
      filepath: 'c:\\file2.txt',
      case_id: 124,
      user: 'Rich Fallon',
      run_id: 2,
      protective_marking: 'UC',
      mime: {
        extension: 'txt',
        type: 'text/plain'
      },
      ingest_time: new Date()
    },
    {
      file: {
        name: 'file3.txt',
        size: 1024
      },
      filepath: 'c:\\file3.zip',
      case_id: 125,
      user: 'Ben Preece',
      run_id: 3,
      protective_marking: 'UC',
      mime: {
        extension: 'zip',
        type: 'zip'
      },
      ingest_time: new Date()
    }
  ]})

})


// Listen
app.listen(port, () => console.log(`Listening on port ${port}`))