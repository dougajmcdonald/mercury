const express = require('express')

const app = express()
const port = process.env.PORT || 8081

// API
app.post('/contentListener', (req, res) => {
  res.send({ result: `POST to FakeNifi :${port}/contentListener SUCCESS` })
})

// Listen
app.listen(port, () => console.log(`Fake Nifi Listening on port ${port}`))