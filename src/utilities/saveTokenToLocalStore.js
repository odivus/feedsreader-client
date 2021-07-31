function saveTokenToLocalStore(userId, token) {
  if (!userId || !token) {
    console.error('Function saveTokenToLocalStore needs userId and token as an arguments');
    return null;
  }

  let expirationDate;

  expirationDate = new Date(
    new Date().getTime() + 24 * 60 * 60 * 1000 * 365
  );

  localStorage.setItem('userId', userId);
  localStorage.setItem('token', token);
  localStorage.setItem('expirationDate', expirationDate);
}

export default saveTokenToLocalStore;