export function passwordCheck(password) {
  return password.length < 6 ? false : true;
}