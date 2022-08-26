import { Router } from 'express';
import { AUTHOR } from '../../constants';
import { organizeCategories, request } from '../services';
import { formatSearch } from '../services/items';
import { productRequest } from '../services/product';

const api = Router();

api.get('/items', async (req, res) => {
  let limit = req.query.limit ? req.query.limit : 4;
  try {
    const search = await request(
      `/sites/MLA/search?q=${req.query.search}&limit=${limit}`
    );
    res.json({
      author: AUTHOR,
      items: formatSearch(search.results),
      categories: await organizeCategories(search.results),
      ok: true,
      err: null,
    });
  } catch (err) {
    res.json({
      author: AUTHOR,
      items: null,
      ok: false,
      err: err,
    });
  }
});

api.get('/items/:id', async (req, res) => {
  let request = await productRequest(req.params.id);
  res.json(request);
});

export default api;
