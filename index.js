const express = require('express');
const app = express();
const port = 3000; 

const { fileModel } = require('./db.js');
const cors = require('cors');
app.use(cors());  

 
app.use(express.json()); 

 
app.post('/dumpMetaData', async (req, res) => {
  const { fileName, startDate, endDate, interval } = req.body;
    console.log('Received data:', req.body);
  try {
    await fileModel.create({ fileName, startDate, endDate, interval });
    res.status(201).send('File created successfully');
  } catch (error) {
    console.error('Error creating file:', error.message);
    res.status(500).send('Error creating file');
  }
});

 
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
