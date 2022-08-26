import { AUTHOR } from '../../constants';
import { formatSearch } from './items';
import { request } from './request';
import { fetchCategories } from './categories';

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
    const categories = await fetchCategories(product.category_id);

    return {
      author: AUTHOR,
      item: formattedProduct,
      description: description,
      categories: categories,
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
