import {inventory} from './constants/inventory.js';
import Products from './Products.jsx';

function Inventory() {
    return (
        <>
            <h2>Whole Inventory</h2>
            {inventory.map((tv) => {
                return (
                    <Products key={tv.brand+tv.name+tv.type} television={tv} className="" productType="tv"/>
                )
            })}
        </>
    )
}

export default Inventory;