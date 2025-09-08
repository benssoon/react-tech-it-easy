import './StockCard.css';
import {currentStock, numberPurchased, numberSold} from './helpers/calcInventory.js';

function toDutch(operation) {
    switch (operation) {
        case 'sold':
            return 'verkochte';
        case 'purchased':
            return 'ingekochte';
        case 'stock':
            return 'te verkopen';
        default:
            console.log('Not an option.');
    }
}

function execute(operation) {
    switch (operation) {
        case 'sold':
            return numberSold();
        case 'purchased':
            return numberPurchased();
        case 'stock':
            return currentStock();
    }
}

function StockCard(props) {
    return (
        <article className="stock-card card" id={props.id}>
            <p>Aantal {toDutch(props.id)} {props.productType}</p>
            <p>{execute(props.id)}</p>
        </article>
    );
}

export default StockCard;