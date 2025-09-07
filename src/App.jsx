import './App.css';
import {numberTvsSold, numberTvsPurchased, currentStock} from './helpers/calcInventory.js';
import {formatName, formatPrice, formatSizes} from './helpers/showProduct.js';
import {bestSellingTv} from './constants/inventory.js';
import thumbnail from './assets/tv-thumbnail.jpeg';

function App() {
  return (
      <>
        <h1>Start</h1>
        <p>Total tvs sold: <em className="numberSold">{numberTvsSold()}</em></p>
        <p>Total tvs purchased: <em className="numberPurchased">{numberTvsPurchased()}</em></p>
        <p>Current stock: <em className="currentStock">{currentStock()}</em></p>
        <article className="productCard">
            <img src={thumbnail} alt="Tv thumbnail" className="thumbnail"/>
            <span className="info">
                <h2>{formatName(bestSellingTv)}</h2>
                <p className="price">{formatPrice(bestSellingTv.price)}</p>
                <p>{formatSizes(bestSellingTv.availableSizes)}</p>
            </span>
        </article>
      </>
  )
}

export default App
