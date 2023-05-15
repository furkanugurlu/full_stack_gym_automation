const db = require('../server/db')

const branchRead = (req, res) => {
    const query = 'SELECT * FROM branslar'
    db.query(query, (err, result) => {
        if (!err) {
            res.send(result)
        }
    })
}

const branchCreate = (req, res) => {
    const { kategoriID, bransAdi } = req?.body
    const kayitTarihi = new Date()
    const query = 'INSERT INTO branslar (kategoriID,bransAdi,kayitTarihi) VALUES (?,?,?)'
    db.query(query, [kategoriID, bransAdi, kayitTarihi], (err, result) => {
        if (!err) {
            res.send(result)
        }
        console.log(err)
    })
}

const branchUpdate = (req, res) => {
    const { id, kategoriID, bransAdi } = req?.body
    const query = 'UPDATE branslar SET kategoriID = ?, bransAdi =  ? WHERE bransID = ?'
    db.query(query, [kategoriID, bransAdi, id], (err, result) => {
        if (!err) {
            res.send(result)
        }
        console.log(err)
    })
}

const branchRemove = (req, res) => {
    const { id } = req?.params
    const query = 'DELETE FROM branslar WHERE bransID=?'
    db.query(query, [id], (err, result) => {
        if (!err) {
            res.send(result)
        }
        console.log(err)
    })
}

const branchReadOnly = (req, res) => {
    const { id } = req?.params
    const query = 'SELECT * FROM branslar WHERE bransID=?'
    db.query(query, [id], (err, result) => {
        if (!err) {
            res.send(result)
        }
        console.log(err)
    })
}
module.exports = { branchRead, branchCreate, branchUpdate, branchRemove, branchReadOnly }
