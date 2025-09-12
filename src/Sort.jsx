import './Sort.css';
import {inventory} from './constants/inventory.js';
import {formatPrice} from './helpers/showProduct.js';



function Sort() {
    function handleClick(buttonText) {
        console.log(buttonText);
        switch (buttonText) {
            case 'Meest verkocht eerst':
                inventory.sort((a, b) => {return b.sold - a.sold;})
                console.log(inventory);
                for (const television in inventory) {
                    console.log(inventory[television].sold);
                }
                break;
            case 'Goedkoopste eerst':
                inventory.sort((a, b) => {return a.price - b.price;})
                console.log(inventory);
                for (const television in inventory) {
                    console.log(formatPrice(inventory[television].price));
                }
                break;
            case 'Meest geschikt voor sport eerst':
                inventory.sort((a, b) => {return b.refreshRate - a.refreshRate;})
                console.log(inventory);
                for (const television in inventory) {
                    console.log(inventory[television].refreshRate);
                }
                break;
            case 'Grootste schermgroottes eerst':
                // Sort the screen size arrays.
                inventory.map((tv) => {
                    tv.availableSizes.sort((a, b) => b - a);
                })
                // Sort the tvs based on the first value of availableSizes (which was sorted in previous step).
                inventory.sort((a, b) => {
                    return b.availableSizes[0] - a.availableSizes[0];
                })
                // Log the sorted tvs and then all the availableSizes.
                console.log(inventory);
                for (const television in inventory) {
                    console.log(inventory[television].availableSizes);
                }
                break;
            default:
                console.log('This button is still unhandled.');
                break;
        }
    }

    return (
        <article className="sort">
            <button type="button" onClick={() => handleClick("Meest verkocht eerst")}>Meest verkocht eerst</button>
            <button type="button" onClick={() => handleClick("Goedkoopste eerst")}>Goedkoopste eerst</button>
            <button type="button" onClick={() => handleClick("Meest geschikt voor sport eerst")}>Meest geschikt voor sport eerst</button>
            <button type="button" onClick={() => handleClick("Grootste schermgroottes eerst")}>Grootste schermgroottes eerst</button>
        </article>
    );

}

export default Sort;