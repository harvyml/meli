import { AUTHOR } from '../../constants';
import { organizeCategories } from './categories';
import { formatSearch } from './items';
import { request } from './request';

async function productsRequest(limit, search) {
  try {
    const searchRequest = await request(
      `/sites/MLA/search?q=${search}&limit=${limit}`
    );

    return {
      author: AUTHOR,
      items: formatSearch(searchRequest.results),
      categories: await organizeCategories(searchRequest.results),
      ok: true,
      err: null,
    };
  } catch (err) {
    return {
      author: AUTHOR,
      items: null,
      ok: false,
      err: err,
    };
  }
}

export { productsRequest };
