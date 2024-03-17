const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the minified JS file
app.get('/js/webchat/:companyId', (req, res) => {
  const companyId = req.params.companyId;
  const filePath = path.join(__dirname, 'public', 'js', 'webchat.js');

  // Check if the file exists
  if (fs.existsSync(filePath)) {
    // Read the file
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        res.status(500).send('Internal Server Error');
        return;
      }

      // Replace desired values with companyId
      const modifiedData = data.replace(/650c64be035ef7dd6769dbc1/g, companyId);

      // Send the modified content as the response
      res.type('text/javascript').send(modifiedData);
    });
  } else {
    res.status(404).send('File Not Found');
  }
});

// Route to serve the minified CSS file
app.get('/css/webchat', (req, res) => {
  // const filename = req.params.filename;
  const filePath = path.join(__dirname, 'public', 'css', 'webchat.css');

  // Check if the file exists
  if (fs.existsSync(filePath)) {
    // Read the file and send it as a response
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      } else {
        res.type('text/css').send(data);
      }
    });
  } else {
    res.status(404).send('File Not Found');
  }
});

app.get('/iframe/webchat/static-frame/:companyId', (req, res) => {
  const companyId = req.params.companyId;
  const filePath = path.join(__dirname, 'public', 'iframe', 'elyzian-iframe.js');

  // Check if the file exists
  if (fs.existsSync(filePath)) {
    // Read the file
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        res.status(500).send('Internal Server Error');
        return;
      }

      // Replace desired values with companyId
      const modifiedData = data.replace(/companyId/g, companyId);

      // Send the modified content as the response
      res.type('text/javascript').send(modifiedData);
    });
  } else {
    res.status(404).send('File Not Found');
  }
});

// Start the Express.js server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
