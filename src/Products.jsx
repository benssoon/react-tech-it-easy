import './Products.css';
import ProductCard from './ProductCard.jsx';

function getTitle(category, productType) {
    switch (category) {
        case 'best-seller':
            return 'Best verkochte ' + productType;
        default:
            return 'test';
    }
}

function Products(props) {
    return (
        <>
            <h2>{getTitle(props.className, props.productType)}</h2>
            <ProductCard className={[props.className, "card"].join(' ')} productType={props.productType}/>
        </>
    );
}

export default Products;