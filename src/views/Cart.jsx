const React = require('react');
const Layout = require('./Layout');

function Cart(props) {
  console.log('Пропсики', props.cartArr);
  return (
    <Layout {...props}>
      <div className="shopping-cart">
        <h2> Корзина </h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" />
              <th scope="col">Наименование</th>
              <th scope="col">Стоимость</th>
              <th />
              <th className="countText" scope="col">Кол-во</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {props.cartArr.map((el) => (
              <tr key={el.id}>
                <th scope="row">
                  <button className="delete" type="button" name="button">
                    <img className="delete-btn delete" src="/img/vector-cancel-icon.jpg" alt="" data-id={el.id} />
                  </button>
                </th>
                <td>{el.sockName}</td>
                <td><p className="price" id={`price${el.id}`}>{el.price * el.count}</p></td>
                <td>
                  <button className="delete minus-btn" type="button" name="button">
                    <img className="delete-btn minus" src="/img/minus-svgrepo-com.svg" alt="" data-id={el.id} />
                  </button>
                </td>
                <td>
                  <p className="countText" id={`count${el.id}`}>
                    {el.count
//                   if (el.count > 0) el.count
// else if (el.count = 0) window.location.href = `/api/${el.id}`
                  }

                  </p>
                </td>
                <td>
                  <button className="delete plus-btn" type="button" name="button">
                    <img className="delete-btn plus" src="/img/plus-svgrepo-com.svg" alt="" data-id={el.id} />
                  </button>
                </td>
              </tr>
            ))}

            <tr>
              <th scope="row total" />
              <td><b>Общая Сумма:</b></td>
              <td>
                {' '}
                <b id="totalPrice">{props.cartArr.reduce((acc, cur) => acc.count + cur.count) * 200}</b>
              </td>
              <td />
            </tr>
          </tbody>
        </table>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button type="button" className="btn btn-primary btn">Оформить заказ</button>
        </div>
      </div>
      <script defer src="/js/cart.js" />
    </Layout>
  );
}

module.exports = Cart;
