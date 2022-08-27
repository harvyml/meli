function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_PROPS':
      return { ...state, initialState: {} };
    default:
      return { ...state };
  }
}

export default reducer;
