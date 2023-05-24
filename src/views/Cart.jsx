const React = require('react');
const Layout = require('./Layout');

function Cart(props) {
//   console.log('Пропсики', props);
  return (
    <Layout {...props}>
      <div className="shopping-cart">
        <h2> Корзина </h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" />
              <th scope="col">Наименование</th>
              <th scope="col">Цена</th>
              <th scope="col">Кол-во</th>
            </tr>
          </thead>
          <tbody>
            {props.cartArr.map((el) => (
              <tr key={el.id}>
                <th scope="row">
                  <button className="delete" type="button" name="button">
                    <img className="delete-btn delete" src="/img/vector-cancel-icon.jpg" alt="" />
                  </button>
                </th>
                <td>{el.sockName}</td>
                <td><p className="price" id={`price${el.id}`}>{el.price * el.count}</p></td>
                <td>
                  <button className="delete minus-btn" type="button" name="button">
                    <img className="delete-btn minus" src="/img/minus-svgrepo-com.svg" alt="" data-id={el.id} />
                  </button>
                  <p id={`count${el.id}`}>{el.count}</p>
                  <button className="delete plus-btn" type="button" name="button">
                    <img className="delete-btn plus" src="/img/plus-svgrepo-com.svg" alt="" data-id={el.id} />
                  </button>
                </td>
              </tr>
            ))}

            <tr>
              <th scope="row total" />
              <td><h5>Итого:</h5></td>
              <td>
                {' '}
                <p id="totalPrice">600</p>
              </td>
              <td />
            </tr>
          </tbody>
        </table>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button type="button" className="btn btn-primary btn">Оформить заказ</button>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Cart;
