const express = require('express')

const app = express()
const port = process.env.PORT || 5000

// Data's
const tasks = [{
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
}]

// API
app.get('/api/task/:id', (req, res) => {

  const id = parseInt(req.params.id, 10)

  const task = tasks.find(t => t.id == id)

  res.send({ task })
})

// Listen
app.listen(port, () => console.log(`Listening on port ${port}`))