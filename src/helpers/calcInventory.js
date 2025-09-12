import {inventory} from '../constants/inventory.js';

export function numberSold() {
    let sold = 0;
    for (let product in inventory) {
        sold += inventory[product].sold;
    }
    return sold;
}

export function numberPurchased() {
    let purchased = 0;
    for (let product in inventory) {
        purchased += inventory[product].originalStock;
    }
    return purchased;
}

export function currentStock() {
    const stock = numberPurchased() - numberSold();
    return stock;
}

export default currentStock();