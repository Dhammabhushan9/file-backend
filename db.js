const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://cob56dhammabhushanwaghmare:omtNTxv1bOtWqTmD@cluster0.jtu0y.mongodb.net/newFile').then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

const fileSchema = new mongoose.Schema({
    fileName: {
        type: String,   
        required: true       
    },
    startDate:{
        type: Date,
        required: true      
    },
    endDate:{
        type: Date,
        required: true              
    },
    interval: {
        type: Number,   
        required: true
    } });

const fileModel = mongoose.model('File', fileSchema);    

module.exports = {fileModel};    