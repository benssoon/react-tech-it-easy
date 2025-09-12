import './ProductCard.css';
import {formatName, formatPrice, formatSizes} from './helpers/showProduct.js';
import thumbnail from './assets/tv-thumbnail.jpeg';
import soldOut from './assets/out-of-stock.png';
import checkIcon from './assets/check.png';
import minusIcon from './assets/minus.png';
let thumbAlt = 'Tv thumbnail';

// This function lets the thumbnail be replaced with the sold-out image
// if the tv is sold out. I'm not sure what the assignment was wanting me
// to do, but this feels like a simple and flexible enough solution.
function whichThumbnail(television) {
    if (television.sold === television.originalStock) {
        console.log('Sold out.');
        thumbAlt = 'Sold out'
        return soldOut;
    } else {
        thumbAlt = 'Tv thumbnail'
        return thumbnail;
    }

}

function ProductCard({television}) {
    return (
        <>
            <article className="product-card card">
                <img src={whichThumbnail(television)} alt={thumbAlt} className="thumbnail"/>
                <span className="info">
                <h2>{formatName(television)}</h2>
                <p className="price">{formatPrice(television.price)}</p>
                <p className="sizes">{formatSizes(television.availableSizes)}</p>
                <ul className="capabilities">
                    {television.options.map((option) => {

                        let symbol;
                        let alternate;
                        if (option.applicable === true) {
                            symbol = checkIcon;
                            alternate = 'available';
                        } else {
                            symbol = minusIcon;
                            alternate = 'not avaialbale';
                        }
                        return (
                            <li key={option.name+option.applicable} className="option">
                                <img src={symbol} alt={alternate} className="icon"/>{option.name}
                            </li>
                        )
                    })}
                    {/*<img src={checkIcon} alt="Available" className="icon"/>
                    wifi
                    <img src={minusIcon} alt="Available" className="icon"/>
                    speech
                    <img src={checkIcon} alt="Available" className="icon"/>
                    hdr
                    <img src={checkIcon} alt="Available" className="icon"/>
                    bluetooth
                    <img src={minusIcon} alt="Available" className="icon"/>
                    ambilight*/}
                </ul>
            </span>
            </article>
        </>
    );
}

export default ProductCard;