const express = require('express');
const property = require('../models/property')
const router = express.Router();

router.get('/data', async (req, res) => {
    try {
      const data = await property.find(); 
      console.log(data)
      res.status(200).json(data); 
    } catch (error) {
      res.status(500).json({ message: 'Error fetching data', error });
    }
});

router.get('/searchdata', async (req, res) => {
  // Get min and max price from query parameters or use defaults
  const minPrice = parseInt(200); // Default min price
  const maxPrice = parseInt(700); // Default max price
  console.log('Min Price:', minPrice, 'Max Price:', maxPrice); // Debugging

  try {
    
    const properties = await property.find({
      $expr: {
        $and: [
          { $gte: [{ $toInt: { $replaceAll: [{ $replaceAll: ["$price", "$", ""] }, ",", ""] } }, minPrice] },
          { $lte: [{ $toInt: { $replaceAll: [{ $replaceAll: ["$price", "$", ""] }, ",", ""] } }, maxPrice] }
        ]
      }
    });


    if (properties.length === 0) {
      return res.status(404).json({ error: 'No properties found within the specified price range' });
    }

    res.json(properties);
  } catch (error) {
    console.error('Error fetching properties:', error);
    res.status(500).json({ error: 'An error occurred while fetching properties' });
  }
});


router.get('/place', async (req, res) => {
  const location = 'New York';

  try {
    const objects = await ObjectModel.find({ location: { $regex: new RegExp(location, 'i') } });

    if (objects.length === 0) {
      return res.status(404).json({ error: `No objects found for location: ${location}` });
    }
    res.json(objects);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
});



module.exports = router;