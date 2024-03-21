import { ETHEREUM } from '../utils/chains.js';

type CloudflareChain = typeof ETHEREUM;

function endpoint(chain: CloudflareChain): string {
  switch (chain) {
    case ETHEREUM:
      return 'https://cloudflare-eth.com';
  }
}

export default endpoint;
