import {useState} from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown,setCardIsShown] = useState(false);

  function showCardHandler (){
    setCardIsShown(true);
  }

  function hideCartHandler(){
    setCardIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <div>CART...</div>}
      <Header onShowCart={showCardHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
