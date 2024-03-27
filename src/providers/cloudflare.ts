import { ETHEREUM } from '../utils/chains.js';

type Chain = typeof ETHEREUM;

function endpoint(chain: Chain): string {
  switch (chain) {
    case ETHEREUM:
      return 'https://cloudflare-eth.com';
  }
}

export default endpoint;
export type { Chain };
