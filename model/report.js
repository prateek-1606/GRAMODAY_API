const mongoose = require('mongoose');

const ReportSchema = mongoose.Schema({
    marketID: {
        type: String,
        required: true
    },
    cmdtyID: {
        type: String,
        required: true
    },
    marketName: {
        type: String,
        required: true
    },
    cmdtyName: {
        type: String,
        required: true
    },
    users: [{
        userId: {
            type: String,
            required: true
        }
    }],
    priceUnit: {
        type: String,
        default: 'Kg'
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Report', ReportSchema);