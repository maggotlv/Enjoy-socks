const favoritesGroup = document.querySelector('.favorites-group');

favoritesGroup.addEventListener('click', async (e) => {
  if (e.target.classList.contains('close-button')) {
    e.preventDefault();
    const sock = e.target.parentNode.parentNode;
    try {
      const result = await fetch(`/favorites/${sock.id}`, {
        method: 'DELETE',
      });
      console.log(result);
      if (result.ok === true) {
        const card = sock.closest('.sock-card-f');
        card.remove();
      }
    } catch (error) {
      console.log(error);
    }
  } else if (e.target.classList.contains('tocart')) {
    e.preventDefault();
    const sock = e.target.parentNode.parentNode;
    try {
      const result = await fetch(`/favorites/cart/${sock.id}`);
      console.log(result);
      if (result.ok === true) {
        location.replace('/cart/');
      }
    } catch (error) {
      console.log(error);
    }
  }
  if (e.target.classList.contains('one')) {
    e.preventDefault();
    const sock = e.target.parentNode.parentNode.parentNode;
    location.replace(`/favorites/one/${sock.id}`);
  }
});
