function formatSearch(results = []) {
  const remaining = (n) => n % 1;
  const parsedResults = results.reduce((acc, el, idx) => {
    return acc.concat({
      id: el.id,
      title: el.title,
      price: {
        currency: el.currency_id,
        amount: el.price,
        decimals: remaining(el.price),
      },
      picture: el.thumbnail,
      condition: el.condition,
      free_shipping: el.shipping.free_shipping,
    });
  }, []);

  return parsedResults;
}

export { formatSearch };
