export default function (state = 0, action) {
  switch (action.type) {
    case 'add_salad_count':
      return state + 1;
    case 'sub_salad_count':
      return state - 1;
    default:
      return state;
  }
}
