export default function (state = null, action) {
  switch (action.type) {
    case 'user_login':
      return action.payload;
    default:
      return state;
  }
}
