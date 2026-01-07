import { describe, expect, it } from 'vitest';

import { alchemy, ankr, drpc } from './index.js';

// Don't worry, those are not valid :)
const API_KEY = 'qi_uQW4FZK5uCDSWcj3XYQdUW_jHbSow';

describe('alchemy', () => {
  it('should return the correct URL for Ethereum', () => {
    const url = alchemy(1, API_KEY);
    expect(url).toBe(`https://eth-mainnet.g.alchemy.com/v2/${API_KEY}`);
  });
});

describe('drpc', () => {
  it('should return the correct URL for Ethereum without an API key', () => {
    const url = drpc(1);
    expect(url).toBe(`https://eth.drpc.org`);
  });

  it('should return the correct URL for Ethereum with an API key', () => {
    const url = drpc(1, API_KEY);
    expect(url).toBe(`https://lb.drpc.live/eth/${API_KEY}`);
  });
});

describe('ankr', () => {
  it('should return the correct URL for Ethereum without an API key', () => {
    const url = ankr(1);
    expect(url).toBe(`https://rpc.ankr.com/eth`);
  });

  it('should return the correct URL for Ethereum with an API key', () => {
    const url = ankr(1, API_KEY);
    expect(url).toBe(`https://rpc.ankr.com/eth/${API_KEY}`);
  });
});
