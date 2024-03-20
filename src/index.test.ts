import { describe, expect, it } from 'vitest';

import { alchemy } from './index.js';

// Don't worry, those are not valid :)
const ALCHEMY_KEY = 'qi_uQW4FZK5uCDSWcj3XYQdUW_jHbSow';

describe('alchemy', () => {
  it('should return the correct URL for Ethereum', () => {
    const url = alchemy(1, ALCHEMY_KEY);
    expect(url).toBe(`https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY}`);
  });
});
