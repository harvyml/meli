import fetch from 'node-fetch';
import { AUTHOR } from '../../constants';

/**
 * receives a 'query' in the form of "/search?q=:query"
 * @param {String} query
 * @returns Object
 */

async function request(query) {
  let req = await fetch(`${process.env.API_MELI}${query}`);
  let res = await req.json();
  return res;
}

export { request };
