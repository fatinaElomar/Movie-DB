const express = require('express')
const app = express()
const path = 3000

app.get('/', (req, res) => {
  res.send('okay')
})

app.listen(path, () => {
  console.log(`Example app listening on port at http://localhost:${path}`)
})