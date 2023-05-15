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
    const { id } = req?.params
    const query = 'DELETE FROM kategoriler WHERE kategoriID=?'
    db.query(query, [id], (err, result) => {
        if (!err) {
            res.send(result)
        }
        console.log(err)
    })
}

const categoryReadOnly = (req, res) => {
    const { id } = req.params
    const query =
        "SELECT c.kategoriAdi as kategoriAdi, IF(COUNT(b.bransID) > 0, JSON_ARRAYAGG(JSON_OBJECT('bransAdi', b.bransAdi, 'bransId', b.bransId )), NULL) as branslar ,IF(COUNT(p.paketID) > 0, JSON_ARRAYAGG(JSON_OBJECT('paketID', p.paketID, 'paketAdi', p.paketAdi, 'gun', p.gun , 'ucret' ,p.ucret )), NULL) as uyelikpaketler  FROM kategoriler c LEFT JOIN branslar b ON c.kategoriID = b.kategoriID LEFT JOIN uyelikpaketler p ON c.kategoriID = p.kategoriID  WHERE c.kategoriID = ?"
    db.query(query, [id], (err, result) => {
        if (!err) {
            res.send(result)
        }
        console.log(err)
    })
}
module.exports = { categoryRead, categoryCreate, categoryUpdate, categoryRemove, categoryReadOnly }
