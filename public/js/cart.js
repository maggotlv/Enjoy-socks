const cart = document.querySelector('.shopping-cart');
const totalPrice = document.querySelector('#totalPrice');
const table = document.querySelector('.table');

const deleteFunc = (id) => {
  const response = fetch(`/cart/api/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  })
    .then((result) => {
      result.json();
    })
    .catch((err) => console.log(err));
};

const changeView = (id, result) => {
  const cartCount = document.querySelector(`#count${id}`);
  cartCount.innerText = result;

  const newPrice = result * 200;
  const cartPrice = document.querySelector(`#price${id}`);
  cartPrice.innerText = newPrice;

  const allPrices = document.querySelectorAll('.price');
  const pricesArr = [];
  allPrices.forEach((el) => pricesArr.push(+el.innerText));
  totalPrice.innerText = pricesArr.reduce((acc, cur) => acc + cur);
};

cart.addEventListener('click', async (e) => {
  e.preventDefault();
  if (e.target.className === 'delete-btn plus') {
    const { id } = e.target.dataset;
    try {
      const response = await fetch('/cart/api/plus', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      const result = await response.json();
      changeView(id, result);
    } catch (error) {
      console.log('error --------> ', error);
    }
  }

  if (e.target.className === 'delete-btn minus') {
    const { id } = e.target.dataset;
    try {
      const response = await fetch('/cart/api/minus', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      const result = await response.json();
      if (result === 0) {
        deleteFunc(id);
        const parent = e.target.closest('tr');
        parent.remove();
      }
      changeView(id, result);
    } catch (error) {
      console.log('error --------> ', error);
    }
  }

  if (e.target.id === 'deleteBtn') {
    const { id } = e.target.dataset;
    deleteFunc(id);
    const parent = e.target.closest('tr');
    parent.remove();
    const allPrices = document.querySelectorAll('.price');
    const pricesArr = [];
    allPrices.forEach((el) => pricesArr.push(+el.innerText));
    if (allPrices.length > 0) {
      totalPrice.innerText = pricesArr.reduce((acc, cur) => acc + cur);
    } else {
      document.querySelector('#reddot').remove();
      location.replace('/cart');
    }
  }

  if (e.target.className === 'btn btn-warning btn send') {
    const sum = totalPrice.innerText;
    const orderNum = `${Math.round(Math.random() * 1000)}-${
      new Date().toLocaleString('RU', 'ru').split(',')[0]
    }`;

    fetch('/cart/mail', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ orderNum, sum, cart: table.innerHTML }),
    }).catch((err) => console.log(err));

    const done = document.createElement('div');
    done.innerText = 'Ваш заказ оформлен';
    done.className = 'orderDone';

    // const parent = e.target.closest('div');
    cart.appendChild(done);
  }
});
