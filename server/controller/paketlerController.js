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
    const { id, kategoriID, paketAdi, gun, ucret } = req?.body
    const query = 'UPDATE uyelikpaketler SET  kategoriID= ?, paketAdi = ?,  gun = ? ,  ucret = ? WHERE paketID = ?;'
    db.query(query, [kategoriID, paketAdi, gun, ucret, id], (err, result) => {
        if (!err) {
            res.send(result)
        }
        console.log(err)
    })
}

const packageRemove = (req, res) => {
    const { id } = req?.params
    const query1 = 'DELETE FROM secilenpaket WHERE paketID=?'
    const query2 = 'DELETE FROM uyelikpaketler WHERE paketID=?'
    db.query(query1, [id], (err, result) => {
        db.query(query2, [id], (err, result) => {
            if (!err) {
                res.send(result)
            }
            console.log(err)
        })
    })
}

const packageReadOnly = (req, res) => {
    const { id } = req?.params
    const query = 'SELECT * FROM uyelikpaketler WHERE paketId=?'
    db.query(query, [id], (err, result) => {
        if (!err) {
            res.send(result)
        }
        console.log(err)
    })
}
module.exports = { packageRead, packageCreate, packageUpdate, packageRemove, packageReadOnly }
