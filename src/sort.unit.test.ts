import { sort } from './sort';
import { SortInput } from './models/sort';

describe('sort(width, height, length, mass)', () => {
  it('returns STANDARD for small and light packages', () => {
    const input: SortInput = {
        width: 10,
        height: 10,
        length: 5,
        mass: 1,
    }
    expect(sort(input)).toBe('STANDARD'); // volume 500, mass 1
  });

  it('returns SPECIAL for bulky packages', () => {
     const input: SortInput = {
        width: 100,
        height: 100,
        length: 100,
        mass: 1,
    }
    expect(sort(input)).toBe('SPECIAL'); // volume 100000, mass 1
  });

  it('returns SPECIAL for heavy packages', () => {
     const input: SortInput = {
        width: 10,
        height: 10,
        length: 5,
        mass: 30,
    }
    expect(sort(input)).toBe('SPECIAL'); // mass >= 20
  });

  it('returns REJECTED for bulky and heavy packages', () => {
      const input: SortInput = {
        width: 100,
        height: 100,
        length: 100,
        mass: 30,
    }
    expect(sort(input)).toBe('REJECTED'); // mass >= 20 and volume >= 1,000,000
  });
});
