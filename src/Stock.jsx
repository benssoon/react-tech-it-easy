import './Stock.css';
import {currentStock, numberTvsPurchased, numberTvsSold} from './helpers/calcInventory.js';

function Stock() {
    return (
        <>
            <h2>Verkoopoverzicht</h2>
            <p>Total tvs sold: <em className="numberSold">{numberTvsSold()}</em></p>
            <p>Total tvs purchased: <em className="numberPurchased">{numberTvsPurchased()}</em></p>
            <p>Current stock: <em className="currentStock">{currentStock()}</em></p>
        </>
    );
}

export default Stock;