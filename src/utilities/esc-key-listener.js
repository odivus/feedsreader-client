const escKeyListener = (e, action) => {
  
  const keys = {
    27: () => {
      e.preventDefault();
      action();
      window.removeEventListener('keyup', escKeyListener, false);
    },
  };

  if (keys[e.keyCode]) keys[e.keyCode]();
}

export default escKeyListener;