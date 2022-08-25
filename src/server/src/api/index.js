import { Router } from 'express';
import { AUTHOR } from '../../constants';
import { organizeCategories, request } from '../services';
import { formatSearch } from '../services/items';

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
  try {
    const product = await request(`/items/${req.params.id}`);
    const description = await request(`/items/${req.params.id}/description`);
    const formattedProduct = formatSearch([product])[0];
    res.json({
      author: AUTHOR,
      item: formattedProduct,
      description: description,
      ok: true,
      err: null,
    });
  } catch (err) {
    res.json({
      author: AUTHOR,
      item: null,
      ok: false,
      err: err,
    });
  }
});

export default api;
