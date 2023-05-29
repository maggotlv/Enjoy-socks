const React = require('react');
const Layout = require('./Layout');

const price = 200;

function Cart(props) {
  // console.log('Пропсики', props.cartData);
  return (
    <Layout user={props.user}>
      <div className="shopping-cart">
        <h3> Корзина </h3>
        <br />
        {(props.cartData.length === 0) ? (<h5>Корзина пуста</h5>) : (
          <>
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

                {props.cartData.map((el) => (
                  <tr key={el.id}>
                    <th scope="row">
                      <img id="deleteBtn" className="close-button" style={{ stroke: 'red' }} src="/img/closesm.svg" alt="" data-id={el.id} width="30" height="30" />
                    </th>
                    <td>{el['Sock.sockname']}</td>
                    <td><p className="price" id={`price${el.id}`}>{price * el.count}</p></td>
                    <td style={{ verticalAlign: 'middle' }}>
                      <img className="delete-btn minus" style={{ float: 'right' }} src="/img/minus.svg" alt="" data-id={el.id} />
                    </td>
                    <td>
                      <p className="countText" id={`count${el.id}`}>
                        {el.count}
                      </p>
                    </td>
                    <td style={{ verticalAlign: 'middle' }}>
                      <img className="delete-btn plus" src="/img/plus.svg" alt="" data-id={el.id} />
                    </td>
                  </tr>
                ))}

                <tr>
                  <th scope="row total" />
                  <td><b>Общая Сумма:</b></td>
                  <td>
                    {' '}
                    <b id="totalPrice">{props.cartData.reduce((acc, cur) => acc + cur.count, 0) * price}</b>
                  </td>
                  <td />
                </tr>
              </tbody>
            </table>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button action="/cart/mail" method="get" type="button" className="btn btn-warning btn send">Оформить заказ</button>
            </div>

          </>
        )}
      </div>
      <script defer src="/js/cart.js" />
    </Layout>
  );
}

module.exports = Cart;
