import { request } from './index';

/**
 * make categories not be repeated within an array
 * @param {Array} results
 * @returns
 */
function purgeCategories(results = []) {
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  let categories = results.map((result) => result.category_id);
  var unique = categories.filter(onlyUnique);
  return unique;
}

/**
 * Receives an array of categories and compares it to the list of results, then adds the amount of times that a category has been repeated
 * @param {*} purgedCategories
 * @param {*} results
 * @returns
 */
function getCategoryRepeatedTimes(purgedCategories = [], results = []) {
  const timesRepeated = purgedCategories.map((cat) => {
    let sum = 0;
    results.forEach((resultsCategory) => {
      if (resultsCategory.category_id === cat) {
        sum++;
      }
    });
    return { times: sum, category_id: cat };
  });
  return timesRepeated;
}

/**
 * receives an array of array produced by getCategoryRepeatedTimes() and returns the most repeated category
 * @param {*} categories
 * @returns
 */
function getMostRepeatedCategory(categories = []) {
  let times = categories.map((cat) => cat.times);
  const max = Math.max(...times);
  const mostRepeatedCategory = categories.find((cat) => cat.times === max);
  return mostRepeatedCategory;
}

function arrayOfNestedCategories(category) {
  let categoriesList = category.path_from_root.map((cat) => cat.name);
  return categoriesList;
}

async function organizeCategories(results = []) {
  let _purgedCategories = purgeCategories(results);
  let _getCategoryRepeatedTimes = getCategoryRepeatedTimes(
    _purgedCategories,
    results
  );
  let _mostRepeatedCategory = getMostRepeatedCategory(
    _getCategoryRepeatedTimes
  );
  let _category = await request(
    `/categories/${_mostRepeatedCategory.category_id}`
  );
  let _arrayOfNestedCategories = await arrayOfNestedCategories(_category);
  return _arrayOfNestedCategories;
}

export { organizeCategories };
