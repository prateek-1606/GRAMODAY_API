const { Router } = require('express');
const express = require('express');
const report = require('../model/report');
const Report = require('../model/report');
const router = express.Router();

router.post('/', (req, res) => {
    const { reportDetails } = req.body;
    const { cmdtyID, marketID, userID, convFctr, price, marketName, cmdtyName } = reportDetails;
    Report.findOne({ cmdtyID: cmdtyID, marketID: marketID })
        .then((report) => {
            if (report) {
                const newprice = (price / convFctr + report.price) / 2;
                Report.findByIdAndUpdate(report._id, { $push: { "users": { userId: userID } }, $set: { "price": newprice } }, { safe: true, upsert: true })
                    .then(() => {
                        res.json({ status: "Success", reportID: report._id });
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
            else {
                const newprice = price / convFctr;
                const newReport = new Report({
                    cmdtyID,
                    marketID,
                    marketName,
                    cmdtyName,
                    users: [{
                        userId: userID
                    }],
                    priceUnit: "Kg",
                    price: newprice
                })

                newReport.save()
                    .then(result => {
                        res.json({ status: "Success", reportID: result._id })
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        })
        .catch((error) => {
            console.log(error);
        })
})

router.get('/:id', (req, res) => {
    Report.findOne({ _id: req.params.id })
        .then((report) => {
            res.json(report);
        })
        .catch((error) => {
            console.log(error);
        })
})

module.exports = router;
