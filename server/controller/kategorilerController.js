const db = require('../server/db')

const categoryRead = (req, res) => {
    const query = 'SELECT * FROM kategoriler'
    db.query(query, (err, result) => {
        if (!err) {
            res.send(result)
        }
    })
}

const categoryCreate = (req, res) => {
    const { kategoriAdi } = req?.body
    const eklenmeTarihi = new Date()
    const query = 'INSERT INTO kategoriler (kategoriAdi,eklenmeTarihi) VALUES (?,?)'
    db.query(query, [kategoriAdi, eklenmeTarihi], (err, result) => {
        if (!err) {
            res.send(result)
        }
        console.log(err)
    })
}

const categoryUpdate = (req, res) => {
    const { kategoriID, kategoriAdi } = req?.body
    const query = 'UPDATE kategoriler SET kategoriAdi = ? WHERE kategoriID = ?;'
    db.query(query, [kategoriAdi, kategoriID], (err, result) => {
        if (!err) {
            res.send(result)
        }
        console.log(err)
    })
}

const categoryRemove = (req, res) => {
    const { kategoriID } = req?.body
    const query = 'DELETE FROM kategoriler WHERE kategoriID=?'
    db.query(query, [kategoriID], (err, result) => {
        if (!err) {
            res.send(result)
        }
        console.log(err)
    })
}
module.exports = { categoryRead, categoryCreate, categoryUpdate, categoryRemove }
