// serve react static assets
import { homeTemplate, productTemplate } from '../template';
import { createStore } from 'redux';
import reducer from '../../../client/src/reducers';
import { productRequest } from '../services/product';
import { Router } from 'express';
const router = Router();
// server rendered items page
router.get('/', async (req, res) => {
  const initialState = { query: req.query };
  const store = createStore(reducer, initialState);
  const _template = homeTemplate(store, initialState);
  res.send(_template);
});

router.get('/:id', async (req, res) => {
  const product = await productRequest(req.params.id);
  const initialState = { query: req.query, data: product };
  const store = createStore(reducer, initialState);
  const _template = productTemplate(store, initialState);
  res.send(_template);
});

export default router;
