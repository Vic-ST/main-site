const express = require('express')
const path = require('path');
const app = express()
const port = 8000

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/static/index.html")
})

app.get("/css/style.css", (req, res) => {
  res.sendFile(__dirname + "/static/css/style.css")
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

app.use(express.static(path.join(__dirname, 'public')));