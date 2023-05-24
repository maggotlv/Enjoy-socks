const cart = document.querySelector('.shopping-cart');
const totalPrice = document.querySelector('#totalPrice');

cart.addEventListener('click', async (e) => {
  e.preventDefault();
  if (e.target.className === 'delete-btn plus') {
    const { id } = e.target.dataset;
    try {
      const response = await fetch('/cart/api/count/plus', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      const result = await response.json();
      const cartCount = document.querySelector(`#count${id}`);
      cartCount.innerText = result;

      const newPrice = result * 200;
      const cartPrice = document.querySelector(`#price${id}`);
      cartPrice.innerText = newPrice;

      const allPrices = document.querySelectorAll('.price');
      const pricesArr = [];
      allPrices.forEach((el) => pricesArr.push(+el.innerText));
      totalPrice.innerText = pricesArr.reduce((acc, cur) => acc + cur);
    } catch (error) {
      console.log('error --------> ', error);
    }
  }
  if (e.target.className === 'delete-btn minus') {
    const { id } = e.target.dataset;
    try {
      const response = await fetch('/cart/api/count/minus', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      const result = await response.json();
      const cartCount = document.querySelector(`#count${id}`);
      cartCount.innerText = result;

      const newPrice = result * 200;
      const cartPrice = document.querySelector(`#price${id}`);
      cartPrice.innerText = newPrice;

      const allPrices = document.querySelectorAll('.price');
      const pricesArr = [];
      allPrices.forEach((el) => pricesArr.push(+el.innerText));
      totalPrice.innerText = pricesArr.reduce((acc, cur) => acc + cur);
    } catch (error) {
      console.log('error --------> ', error);
    }
  }
//   if (e.target.className === 'delete-btn delete') {
//     const { id } = e.target.dataset;
//     fetch(`/api/post/${id}`, {
//       method: 'DELETE',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ id }),
//     }).then((result) => result.json())
//       .then(() => {
//         const parent = e.target.closest('.card');
//         parent.remove();
//       })
//       .catch((err) => console.log(err));
//   }
});
