import { describe, it, expectTypeOf, expect } from 'vitest';

describe('Test example', () => {
  it('Example', () => {
    const target = (a: number, b: number) => a + b;
    expectTypeOf(target).toBeFunction();
    expect(target(2, 2)).toBe(4);
  });
});
