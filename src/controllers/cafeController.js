import {
    findAllCafes,
    findCafeById,
  } from '../services/cafeService.js';
  
  export const getAllCafes = async (req, res) => {
    try {
      const cafes = await findAllCafes();
      res.json(cafes);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  export const getCafe = async (req, res) => {
    try {
      const cafe = await findCafeById(req.params.id);
      res.json(cafe);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  };