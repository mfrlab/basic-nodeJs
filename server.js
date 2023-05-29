const express = require('express')
const cors = require('cors')

const app = express()

var corsOptions = {
    origin: "http://localhost:8000"
}

app.use(cors(corsOptions))

// for parse request of Content-type - application/json
app.use(express.json())

// for parse request of Content-type - application/x-www-form-urlenconded
app.use(express.urlencoded({extended: true}))

// create route

const PORT = process.env.PORT || 8000 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
