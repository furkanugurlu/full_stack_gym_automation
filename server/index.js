require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const { antrenorlerRoute, branslarRoute, kategorilerRoute, esyaRoute, uyelerRoute, paketlerRoute } = require('./route')

app.use(express.json())
app.use(cors())
app.use('/coach', antrenorlerRoute)
app.use('/branch', branslarRoute)
app.use('/category', kategorilerRoute)
app.use('/furniture', esyaRoute)
app.use('/member', uyelerRoute)
app.use('/package', paketlerRoute)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Sunucu http://localhost:${PORT}'unda çalıştı`)
})
