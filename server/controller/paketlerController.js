const db = require('../server/db')

const packageRead = (req, res) => {
    const query = 'SELECT * FROM uyelikpaketler'
    db.query(query, (err, result) => {
        if (!err) {
            res.send(result)
        }
    })
}

const packageCreate = (req, res) => {
    const { kategoriID, paketAdi, gun, ucret } = req?.body
    const kayitTarih = new Date()
    const query = 'INSERT INTO uyelikpaketler (kategoriID ,paketAdi , gun , ucret , kayitTarih) VALUES (?,?,?,?, ?)'
    db.query(query, [kategoriID, paketAdi, gun, ucret, kayitTarih], (err, result) => {
        if (!err) {
            res.send(result)
        }
        console.log(err)
    })
}

const packageUpdate = (req, res) => {
    console.log(req.body)
    const { paketID, kategoriID, paketAdi, gun, ucret } = req?.body
    const query = 'UPDATE uyelikpaketler SET  kategoriID= ?, paketAdi = ?,  gun = ? ,  ucret = ? WHERE paketID = ?;'
    db.query(query, [kategoriID, paketAdi, gun, ucret, paketID], (err, result) => {
        if (!err) {
            res.send(result)
        }
        console.log(err)
    })
}

const packageRemove = (req, res) => {
    const { paketID } = req?.body
    const query = 'DELETE FROM uyelikpaketler WHERE paketID=?'
    db.query(query, [paketID], (err, result) => {
        if (!err) {
            res.send(result)
        }
        console.log(err)
    })
}
module.exports = { packageRead, packageCreate, packageUpdate, packageRemove }
