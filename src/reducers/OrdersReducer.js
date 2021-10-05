export default function (state = [], action) {
  switch (action.type) {
    case 'orders':
      return action.payload;
    default:
      return state;
  }
}
