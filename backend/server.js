const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Path to the JSON file
const jsonFilePath = path.join(__dirname, 'productitem.json');

// Get products
app.get('/api/productitem', (req, res) => {
  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file');
    }
    res.send(JSON.parse(data));
  });
});

// Add or update product
app.post('/api/productitem', (req, res) => {
  const newProduct = req.body;

  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file');
    }

    let products = JSON.parse(data);

    // Check if product exists and update, else add new product
    const existingProductIndex = products.findIndex(p => p.id === newProduct.id);

    if (existingProductIndex !== -1) {
      products[existingProductIndex] = newProduct;
    } else {
      products.push(newProduct);
    }

    // Write updated products back to file
    fs.writeFile(jsonFilePath, JSON.stringify(products, null, 2), err => {
      if (err) {
        return res.status(500).send('Error writing file');
      }
      res.send({ message: 'Product added/updated successfully' });
    });
  });
});

// Delete product
app.delete('/api/productitem/:id', (req, res) => {
  const productId = parseInt(req.params.id);

  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file');
    }

    let products = JSON.parse(data);
    products = products.filter(p => p.id !== productId);

    fs.writeFile(jsonFilePath, JSON.stringify(products, null, 2), err => {
      if (err) {
        return res.status(500).send('Error writing file');
      }
      res.send({ message: 'Product deleted successfully' });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
