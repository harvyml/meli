import { Router } from 'express';
import { productRequest, productsRequest } from '../services';

const api = Router();

api.get('/items', async (req, res) => {
  let request = await productsRequest(req.query.limit || 4, req.query.search);
  res.json(request);
});

api.get('/items/:id', async (req, res) => {
  let request = await productRequest(req.params.id);
  res.json(request);
});

export default api;
