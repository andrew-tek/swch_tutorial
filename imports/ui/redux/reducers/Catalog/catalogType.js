export default function catalogType(state = 'retail', action = {}) {
  switch (action.type) {
    case 'SET_CATALOG_TYPE':
      return action.filter;
    default:
      return state;
  }
}
