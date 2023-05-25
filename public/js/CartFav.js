const addFav = document.querySelector('#addFav');
const addCart = document.querySelector('#addCart');

addFav?.addEventListener('click', async () => {
  const colour = sockBckg.style.background;
  const pattern = sockPattern.src.slice(35, 55);
  const image = sockLogo.src.slice(33, 55);
  try {
    const sockData = { colour, pattern, image };
    const response = await fetch('socks/addFav', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sockData }),
    });
    const result = await response.json();
    console.log(result.author);
  } catch (error) {
    console.log(error);
  }
});

addCart?.addEventListener('click', async () => {
  const colour = sockBckg.style.background;
  const pattern = sockPattern.src.slice(35, 55);
  const image = sockLogo.src.slice(33, 55);
  try {
    const sockData = { colour, pattern, image };
    const response = await fetch('socks/addCart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sockData }),
    });
    const result = await response.json();
    console.log(result.author);
  } catch (error) {
    console.log(error);
  }
});