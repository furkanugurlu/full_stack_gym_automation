const db = require('../server/db')

const coachRead = (req, res) => {
    const query = 'SELECT * FROM antrenorler'
    db.query(query, (err, result) => {
        if (!err) {
            res.send(result)
        }
    })
}

const coachCreate = (req, res) => {
    const { tcNo, adi, soyadi, mail, telNo, adres, kayitTarihi, dogumTarihi, sifre } = req?.body
    const query = 'INSERT INTO antrenorler (tcNo,adi,soyadi,mail,telNo,adres,kayitTarihi,dogumTarihi,sifre) VALUES (?,?,?,?,?,?,?,?,?)'
    db.query(query, [tcNo, adi, soyadi, mail, telNo, adres, kayitTarihi, dogumTarihi, sifre], (err, result) => {
        if (!err) {
            res.send(result)
        }
    })
}

const coachUpdate = (req, res) => {
    const { tcNo, adi, soyadi, mail, telNo, adres, kayitTarihi, dogumTarihi, sifre } = req?.body
    const query = 'UPDATE antrenorler SET adi = ?,soyadi = ?, mail = ?,telNo = ?, adres = ?, kayitTarihi = ?,dogumTarihi = ?, sifre = ? WHERE tcNo = ?;'
    db.query(query, [adi, soyadi, mail, telNo, adres, kayitTarihi, dogumTarihi, sifre, tcNo], (err, result) => {
        if (!err) {
            res.send(result)
        }
        console.log(err)
    })
}

const coachRemove = (req, res) => {
    const { tcNo } = req?.body
    const query = 'DELETE FROM antrenorler WHERE tcNo=?'
    db.query(query, [tcNo], (err, result) => {
        if (!err) {
            res.send(result)
        }
        console.log(err)
    })
}
module.exports = { coachRead, coachCreate, coachUpdate, coachRemove }
