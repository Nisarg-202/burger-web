export default function (state = 4.0, action) {
  switch (action.type) {
    case 'add_amount':
      return state + action.payload;
    case 'sub_amount':
      return state - action.payload;
    default:
      return state;
  }
}
