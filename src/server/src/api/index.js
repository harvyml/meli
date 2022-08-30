import { Router } from 'express';
import { productRequest, productsRequest } from '../services';

const api = Router();

api.get('/items', async (req, res) => {
  try {
    let request = await productsRequest(req.query.limit || 4, req.query.search);
    res.status(200).json(request);
  } catch (err) {
    res.status(500).json({
      err,
      ok: false,
    });
  }
});

api.get('/items/:id', async (req, res) => {
  try {
    let request = await productRequest(req.params.id);
    res.status(200).json(request);
  } catch (err) {
    res.status(500).json({
      err,
      ok: false,
    });
  }
});

export default api;
