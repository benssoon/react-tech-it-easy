import {inventory} from '../constants/inventory.js';

export function numberTvsSold() {
    let sold = 0;
    for (let product in inventory) {
        sold += inventory[product].sold;
    }
    return sold;
}

export function numberTvsPurchased() {
    let purchased = 0;
    for (let product in inventory) {
        purchased += inventory[product].originalStock;
    }
    return purchased;
}

export function currentStock() {
    const stock = numberTvsPurchased() - numberTvsSold();
    return stock;
}

export default currentStock();