import { ETHEREUM, HOLESKY, SEPOLIA, POLYGON } from '../utils/chains.js';

type Chain = typeof ETHEREUM | typeof HOLESKY | typeof SEPOLIA | typeof POLYGON;

function endpoint(chain: Chain, key: string): string {
  switch (chain) {
    case ETHEREUM:
      return `https://ethereum-mainnet.core.chainstack.com/${key}`;
    case HOLESKY:
      return `https://ethereum-holesky.core.chainstack.com/${key}`;
    case SEPOLIA:
      return `https://ethereum-sepolia.core.chainstack.com/${key}`;
    case POLYGON:
      return `https://polygon-mainnet.core.chainstack.com/${key}`;
  }
}

export default endpoint;
export type { Chain };
