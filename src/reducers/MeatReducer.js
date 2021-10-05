export default function (state = 0, action) {
  switch (action.type) {
    case 'add_meat_count':
      return state + 1;
    case 'sub_meat_count':
      return state - 1;
    default:
      return state;
  }
}
