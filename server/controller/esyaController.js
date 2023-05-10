const db = require('../server/db')

const furnitureRead = (req, res) => {
    const query = 'SELECT * FROM salonesyalar'
    db.query(query, (err, result) => {
        if (!err) {
            res.send(result)
        }
    })
}

const furnitureCreate = (req, res) => {
    console.log(req.body)
    const { esyaAdi, seriNo, marka, fiyat } = req?.body
    const alinmaTarihi = new Date()
    const query = 'INSERT INTO salonesyalar (esyaAdi,seriNo,marka ,fiyat, alinmaTarihi ) VALUES (?,?,?,?,?)'
    db.query(query, [esyaAdi, seriNo, marka, fiyat, alinmaTarihi], (err, result) => {
        if (!err) {
            res.send(result)
        }
        console.log(err)
    })
}

const furnitureUpdate = (req, res) => {
    const { esyaID, esyaAdi, seriNo, marka, fiyat } = req?.body
    const query = 'UPDATE salonesyalar SET esyaAdi = ?, seriNo = ?,   marka = ? ,  fiyat = ? WHERE esyaID = ?;'
    db.query(query, [esyaAdi, seriNo, marka, fiyat, esyaID], (err, result) => {
        if (!err) {
            res.send(result)
        }
        console.log(err)
    })
}

const furnitureRemove = (req, res) => {
    const { esyaID } = req?.body
    const query = 'DELETE FROM salonesyalar WHERE esyaID=?'
    db.query(query, [esyaID], (err, result) => {
        if (!err) {
            res.send(result)
        }
        console.log(err)
    })
}
module.exports = { furnitureRead, furnitureCreate, furnitureUpdate, furnitureRemove }
