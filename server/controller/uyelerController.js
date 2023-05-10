const db = require('../server/db')

const memberRead = (req, res) => {
    const query = 'SELECT * FROM uyeler'
    db.query(query, (err, result) => {
        if (!err) {
            res.send(result)
        }
    })
}

const memberCreate = (req, res) => {
    const { tcNO, ad, soyad, mail, telNO, dogumTarihi, adres, cinsiyet } = req?.body
    const kayitTarihi = new Date()
    const query = 'INSERT INTO uyeler (tcNO, ad, soyad, mail ,  telNO,dogumTarihi , kayitTarihi, adres,  cinsiyet) VALUES (?,?,?,?,?,?,?,?,?)'
    db.query(query, [tcNO, ad, soyad, mail, telNO, dogumTarihi, kayitTarihi, adres, cinsiyet], (err, result) => {
        if (!err) {
            res.send(result)
        }
        console.log(err)
    })
}

const memberUpdate = (req, res) => {
    const { tcNO, ad, soyad, mail, telNO, dogumTarihi, adres, cinsiyet } = req?.body
    const query = 'UPDATE uyeler SET ad = ?, soyad = ?,   mail = ? ,  telNO = ?  , dogumTarihi = ?  , adres = ? , cinsiyet = ?  WHERE tcNO = ?;'
    db.query(query, [ad, soyad, mail, telNO, dogumTarihi, adres, cinsiyet, tcNO], (err, result) => {
        if (!err) {
            res.send(result)
        }
        console.log(err)
    })
}

const memberRemove = (req, res) => {
    const { tcNO } = req?.body
    const query = 'DELETE FROM uyeler WHERE tcNO=?'
    db.query(query, [tcNO], (err, result) => {
        if (!err) {
            res.send(result)
        }
        console.log(err)
    })
}
module.exports = { memberRead, memberCreate, memberUpdate, memberRemove }
