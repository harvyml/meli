import { AUTHOR } from '../../constants';
import { formatSearch } from './items';
import { request } from './request';

/**
 * receives a 'query' in the form of "/search?q=:query"
 * @param {String} query
 * @returns Object
 */

export async function productRequest(id) {
  try {
    const product = await request(`/items/${id}`);
    const description = await request(`/items/${id}/description`);
    const formattedProduct = formatSearch([product])[0];
    return {
      author: AUTHOR,
      item: formattedProduct,
      description: description,
      ok: true,
      err: null,
    };
  } catch (err) {
    return {
      author: AUTHOR,
      item: null,
      ok: false,
      err: err,
    };
  }
}
