import './Products.css';
import ProductCard from './ProductCard.jsx';

function getTitle(category, productType) {
    switch (category) {
        case 'best-seller':
            return 'Best verkochte ' + productType;
        case '':
            return;
        default:
            return `Category "${category}" is unavailable`;
    }
}

function Products(props) {
    return (
        <>
            <h2>{getTitle(props.className, props.productType)}</h2>
            <ProductCard television={props.television} className={[props.className, "card"].join(' ')} productType={props.productType}/>
        </>
    );
}

export default Products;