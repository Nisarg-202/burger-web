export default function (state = 0, action) {
  switch (action.type) {
    case 'add_bacon_count':
      return state + 1;
    case 'sub_bacon_count':
      return state - 1;
    default:
      return state;
  }
}
