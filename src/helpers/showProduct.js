export function formatName(product) {
    return(`${product.brand} ${product.type} - ${product.name}`);
}

export function formatPrice(price) {
    return(`€${price},-`)
}

function inchesToCm(inchValue) {
    return Math.round(inchValue * 2.54);
}

export function formatSizes(availableSizes) {
    let formatted = "";
    for (let size in availableSizes) {
        // Store size and convert in to cm.
        const inSize = availableSizes[size];
        const cmSize = inchesToCm(inSize);

        let isLast = false;
        // Check if it's the last value in the array.
        if (parseInt(size)+1 === availableSizes.length) {
            isLast = true;
        }

        // Concatenate the current value onto the previous ones.
        formatted = formatted + `${inSize} inch (${cmSize} cm)`;

        // If it's not the last one, add a separator.
        if (!isLast) {
            formatted = formatted + " | ";
        }
    }
    return(formatted);
}

export default formatName;