import { SortInput } from "./models/sort";
import { isPositiveNumber } from "./utils/number";

export const isValidateRequest = (input: SortInput): boolean => {
    const { width, height, length, mass } = input;
    if (
        isPositiveNumber(width) &&
        isPositiveNumber(height) &&
        isPositiveNumber(length) && 
        isPositiveNumber(mass)
    ) return true;

    return false;
}
