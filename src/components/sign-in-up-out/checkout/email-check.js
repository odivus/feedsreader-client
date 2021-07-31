export function emailCheck(email) {
  const regexp = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g;

  return regexp.test(email) ? true : false;
}