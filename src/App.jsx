import './App.css';
import {numberTvsSold, numberTvsPurchased, currentStock} from './helpers/calcInventory.js';
import Card from './Card.jsx';
import Sort from './Sort.jsx';

function App() {
  return (
      <>
          <h1>Start</h1>
          <p>Total tvs sold: <em className="numberSold">{numberTvsSold()}</em></p>
          <p>Total tvs purchased: <em className="numberPurchased">{numberTvsPurchased()}</em></p>
          <p>Current stock: <em className="currentStock">{currentStock()}</em></p>
          <Card />
          <Sort />
      </>
  )
}

export default App;