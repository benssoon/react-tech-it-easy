import {inventory} from './inventory.js';

export default function logOutcome() {
    let tvTypes = inventory.map((tv) => {
       return tv.type;
    });
    console.log(tvTypes);

    let soldOutTvs = inventory.filter((tv) => {
       if (tv.originalStock === tv.sold) {
           return true;
       } else {
           return false;
       }
    });
    console.log(soldOutTvs);

    let whichTv = inventory.find((tv) => {
        return tv.type === 'NH3216SMART';
    });
    console.log(whichTv);

    let sportTvs = inventory.map((tv) => {
        let suitable = false;
        if (tv.refreshRate >= 100) {
            suitable = true;
        }
        return {
            name: tv.brand + ' ' + tv.name,
            suitable: suitable
        }
    });
    console.log(sportTvs);

    let bigTvs = inventory.filter((tv) => {
        if (tv.availableSizes.find((size) => {return size >= 65})) {
            return true;
        } else {
            return false;
        }
    });
    console.log(bigTvs);

    let ambiTvs = inventory.filter((tv) => {
       if (tv.options.find((option) => {
           return (option.name === "ambiLight" && option.applicable === true)
       })) {
           return true;
       }
    });
    console.log(ambiTvs);
}