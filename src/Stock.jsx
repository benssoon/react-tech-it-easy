import './Stock.css';
import {currentStock, numberPurchased, numberSold} from './helpers/calcInventory.js';
import StockCard from './StockCard.jsx';

function Stock() {
    return (
        <div className="container">
            <h2>Verkoopoverzicht</h2>
            <article className="stock-section">
                <StockCard productType="televisies" id="sold"/>
                <StockCard productType="televisies" id="purchased"/>
                <StockCard productType="televisies" id="stock"/>
            </article>
        </div>
    );
}

export default Stock;