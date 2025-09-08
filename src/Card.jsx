import {formatName, formatPrice, formatSizes} from './helpers/showProduct.js';
import {bestSellingTv} from './constants/inventory.js';
import thumbnail from './assets/tv-thumbnail.jpeg';
import checkIcon from './assets/check.png';
import minusIcon from './assets/minus.png';
import soldOut from './assets/out-of-stock.png';

function Card() {
    return (
        <>
            <article className="productCard">
                <img src={thumbnail} alt="Tv thumbnail" className="thumbnail"/>
                <span className="info">
                    <h2>{formatName(bestSellingTv)}</h2>
                    <p className="price">{formatPrice(bestSellingTv.price)}</p>
                    <p>{formatSizes(bestSellingTv.availableSizes)}</p>
                    <p className="capabilities">
                        <img src={checkIcon} alt="Available" className="icon"/>
                        wifi
                        <img src={minusIcon} alt="Available" className="icon"/>
                        speech
                        <img src={checkIcon} alt="Available" className="icon"/>
                        hdr
                        <img src={checkIcon} alt="Available" className="icon"/>
                        bluetooth
                        <img src={minusIcon} alt="Available" className="icon"/>
                        ambilight
                    </p>
                </span>
        </article>
        </>
    )
}

export default Card;