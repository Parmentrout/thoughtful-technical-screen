export const isPositiveNumber = (value: any) => {
    return typeof value === 'number' && isFinite(value) && value > 0;
}
