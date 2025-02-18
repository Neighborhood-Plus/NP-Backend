import {
    getCafes,
    getCafeById,
  } from '../models/cafeModel.js';
  
  export const findAllCafes = async () => {
    return await getCafes();
  };
  
  export const findCafeById = async (id) => {
    const cafe = await getCafeById(id);
    if (!cafe) throw new Error('Cafe not found');
    return cafe;
  };