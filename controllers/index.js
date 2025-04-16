const models = require("../database/models");

const createCars = async (req, res) => {
console.log('creating car');

try {
    const car = await models.Cars.create(req.body);
    return res.status(201).json({ car });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


const getAllCars = async (req, res) => {
  console.log('getting cars');
  try {
    const cars = await models.Cars.findAll({
      include:  []
    });

     return res.status(200).json({ cars });
  }
   catch (error) {
    return res.status(500).send(error.message);
  }
};


module.exports = {
  createCars,
  getAllCars
};
  
