const db = require('../server/db')

const memberRead = (req, res) => {
    const query = 'SELECT u.* , s.paketID , t.antTcNo FROM uyeler u LEFT JOIN secilenpaket s ON u.tcNO =  s.tcNO  LEFT JOIN uyeantrenorkayit t ON u.tcNO = t.uyeTcNo'
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
    const { id } = req?.params
    const query1 = 'DELETE FROM uyeler  WHERE  tcNO = ?'
    const query2 = 'DELETE FROM secilenpaket  WHERE  tcNO = ?'
    const query3 = 'DELETE FROM uyeantrenorkayit  WHERE  uyeTcNo = ?'
    db.query(query3, [id], (err, res1) => {
        db.query(query2, [id], (err, res2) => {
            db.query(query1, [id], (err, res3) => {
                res.send(res3)
            })
        })
    })
}

const memberAddPackage = (req, res) => {
    const { tcNO, paketID } = req?.body
    const query = 'INSERT INTO secilenpaket (tcNO, paketID) VALUES (?,?)'
    db.query(query, [tcNO, paketID], (err, result) => {
        if (!err) {
            res.send(result)
        }
        console.log(err)
    })
}

const memberAddAnt = (req, res) => {
    const { uyeTcNo, antTcNo } = req?.body
    const query = 'INSERT INTO uyeantrenorkayit (uyeTcNo, antTcNo) VALUES (?,?)'
    db.query(query, [uyeTcNo, antTcNo], (err, result) => {
        if (!err) {
            res.send(result)
        }
        console.log(err)
    })
}

const memberUpdatePackage = (req, res) => {
    const { tcNO, paketID } = req?.body
    const query = 'UPDATE secilenpaket SET paketID = ?  WHERE tcNO  = ?'
    db.query(query, [paketID, tcNO], (err, result) => {
        if (!err) {
            res.send(result)
        }
        console.log(err)
    })
}

const memberUpdateAnt = (req, res) => {
    const { uyeTcNo, antTcNo } = req?.body
    const query = 'UPDATE uyeantrenorkayit SET antTcNo = ?  WHERE uyeTcNo  = ?'
    db.query(query, [antTcNo, uyeTcNo], (err, result) => {
        if (!err) {
            res.send(result)
        }
        console.log(err)
    })
}

const memberReadOnly = (req, res) => {
    const { id } = req.params
    const query = 'SELECT u.*, p.paketID , t.antTcNo FROM uyeler u LEFT JOIN secilenpaket p ON u.tcNO = p.tcNO LEFT JOIN uyeantrenorkayit t ON u.tcNO = t.uyeTcNO WHERE u.tcNO = ?'
    db.query(query, [id], (err, result) => {
        if (!err) {
            res.send(result)
        }
        console.log(err)
    })
}
module.exports = { memberRead, memberCreate, memberUpdate, memberRemove, memberAddPackage, memberAddAnt, memberReadOnly, memberUpdatePackage, memberUpdateAnt }
