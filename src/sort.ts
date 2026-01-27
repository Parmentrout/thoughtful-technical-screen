import { SortInput, SortResult } from './models/sort';

const maxVolume = 1000000;
const maxDimension = 150;
const maxWeight = 20;

export const sort = (input: SortInput): SortResult => {
    const { height, width, length, mass } = input;

    const volume = height * width * length;
    const isBulky = volume >= maxVolume 
        || (height >= maxDimension 
            || width >= maxDimension
            || length >= maxDimension);

    const isHeavy = mass >= maxWeight
    
    if (!isBulky && !isHeavy) {
        return 'STANDARD';
    };
    if (isBulky && isHeavy) {
        return 'REJECTED';
    }
    if (isBulky || isHeavy) {
        return 'SPECIAL';
    };

    throw new Error(`Unable to sort based on given dimensions: ${JSON.stringify(input)}`);
}
