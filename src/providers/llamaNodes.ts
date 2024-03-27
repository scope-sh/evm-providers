import {
  ARBITRUM,
  BASE,
  BSC,
  ETHEREUM,
  OPTIMISM,
  POLYGON,
} from '../utils/chains.js';

type Chain =
  | typeof ARBITRUM
  | typeof BASE
  | typeof BSC
  | typeof ETHEREUM
  | typeof OPTIMISM
  | typeof POLYGON;

function endpoint(chain: Chain, projectId: string): string {
  switch (chain) {
    case ARBITRUM:
      return `https://arbitrum.llamarpc.com/${projectId}`;
    case BASE:
      return `https://base.llamarpc.com/${projectId}`;
    case BSC:
      return `https://binance.llamarpc.com/${projectId}`;
    case ETHEREUM:
      return `https://eth.llamarpc.com/${projectId}`;
    case OPTIMISM:
      return `https://optimism.llamarpc.com/${projectId}`;
    case POLYGON:
      return `https://polygon.llamarpc.com/${projectId}`;
  }
}

export default endpoint;
export type { Chain };
