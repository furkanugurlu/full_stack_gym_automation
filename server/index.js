require('dotenv').config()
const express = require('express')
const app = express()
const { antrenorlerRoute } = require('./route')

app.use(express.json())
app.use('/coach', antrenorlerRoute)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Sunucu http://localhost:${PORT}'unda çalıştı`)
})
