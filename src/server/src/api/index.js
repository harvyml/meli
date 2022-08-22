import express from 'express';
import { Router } from 'express';
import { AUTHOR } from '../../constants';
import { organizeCategories, request } from '../services';
import { formatSearch } from '../services/items';

const api = Router();

api.get('/items', async (req, res) => {
  try {
    const search = await request(
      `/sites/MLA/search?q=${req.query.search}&limit=${req.query.limit}`
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
      data: null,
      ok: false,
      err: err,
    });
  }
});

api.get('/items/:id', async (req, res) => {
  try {
    const search = await request(req.params.search);
    res.json({
      data: search,
      ok: true,
      err: null,
    });
  } catch (err) {
    res.json({
      data: null,
      ok: false,
      err: err,
    });
  }
});

export default api;
