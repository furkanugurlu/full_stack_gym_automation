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
    const { tcNo, adi, soyadi, mail, telNo, adres, dogumTarihi, sifre } = req?.body
    const kayitTarihi = new Date()
    const query = 'INSERT INTO antrenorler (tcNo,adi,soyadi,mail,telNo,adres,kayitTarihi,dogumTarihi,sifre) VALUES (?,?,?,?,?,?,?,?,?)'
    db.query(query, [tcNo, adi, soyadi, mail, telNo, adres, kayitTarihi, dogumTarihi, sifre], (err, result) => {
        if (!err) {
            res.send(result)
        }
        console.log(err)
    })
}

const coachUpdate = (req, res) => {
    const { id, tcNo, adi, soyadi, mail, telNo, adres, dogumTarihi, sifre } = req?.body
    const query = 'UPDATE antrenorler SET adi = ?,soyadi = ?, mail = ?,telNo = ?, adres = ?, dogumTarihi = ?, tcNo = ? , sifre = ? WHERE tcNo = ?;'
    db.query(query, [adi, soyadi, mail, telNo, adres, dogumTarihi, tcNo, sifre, id], (err, result) => {
        if (!err) {
            res.send(result)
        }
        console.log(err)
    })
}

const coachRemove = (req, res) => {
    const { id } = req?.params
    const query1 = 'DELETE FROM uyeantrenorkayit WHERE antTcNo=?'
    const query2 = 'DELETE FROM antrenorler WHERE tcNo=?'
    db.query(query1, [id], (err, result) => {
        db.query(query2, [id], (err, result) => {
            if (!err) {
                res.send(result)
            }
            console.log(err)
        })
    })
}

const coachReadOnly = (req, res) => {
    const { id } = req.params
    const query = 'SELECT * FROM antrenorler WHERE tcNo = ?'
    db.query(query, [id], (err, result) => {
        if (!err) {
            res.send(result)
        }
    })
}
module.exports = { coachRead, coachCreate, coachUpdate, coachRemove, coachReadOnly }
