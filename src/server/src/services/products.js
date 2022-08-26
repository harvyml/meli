import { AUTHOR } from '../../constants';
import { organizeCategories } from './categories';
import { formatSearch } from './items';
import { request } from './request';

async function productsRequest(limit, search) {
  try {
    const searchRequest = await request(
      `/sites/MLA/search?q=${search}&limit=${limit}`
    );

    console.log('searchRequest: ', searchRequest);
    return {
      author: AUTHOR,
      items: formatSearch(searchRequest.results),
      categories: await organizeCategories(searchRequest.results),
      ok: true,
      err: null,
    };
  } catch (err) {
    console.log('err', err);
    return {
      author: AUTHOR,
      items: null,
      ok: false,
      err: err,
    };
  }
}

export { productsRequest };
