import {
  ETHEREUM,
  HOLESKY,
  SEPOLIA,
  POLYGON,
  POLYGON_MUMBAI,
} from '../utils/chains.js';

type ChainstackChain =
  | typeof ETHEREUM
  | typeof HOLESKY
  | typeof SEPOLIA
  | typeof POLYGON
  | typeof POLYGON_MUMBAI;

function endpoint(chain: ChainstackChain, key: string): string {
  switch (chain) {
    case ETHEREUM:
      return `https://ethereum-mainnet.core.chainstack.com/${key}`;
    case HOLESKY:
      return `https://ethereum-holesky.core.chainstack.com/${key}`;
    case SEPOLIA:
      return `https://ethereum-sepolia.core.chainstack.com/${key}`;
    case POLYGON:
      return `https://polygon-mainnet.core.chainstack.com/${key}`;
    case POLYGON_MUMBAI:
      return `https://polygon-mumbai.core.chainstack.com/${key}`;
  }
}

export default endpoint;
