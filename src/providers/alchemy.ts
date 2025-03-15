import {
  ETHEREUM,
  SEPOLIA,
  POLYGON,
  POLYGON_AMOY,
  ARBITRUM,
  ARBITRUM_SEPOLIA,
  OPTIMISM,
  OPTIMISM_SEPOLIA,
  POLYGON_ZKEVM,
  POLYGON_ZKEVM_TESTNET,
  POLYGON_ZKEVM_CARDONA,
  BASE,
  BASE_SEPOLIA,
  ASTAR,
  LINEA,
  ARBITRUM_NOVA,
  AVALANCHE_C,
  AVALANCHE_FUJI,
  GNOSIS,
} from '../utils/chains.js';

type Chain =
  | typeof ETHEREUM
  | typeof SEPOLIA
  | typeof POLYGON
  | typeof POLYGON_AMOY
  | typeof ARBITRUM
  | typeof ARBITRUM_SEPOLIA
  | typeof OPTIMISM
  | typeof OPTIMISM_SEPOLIA
  | typeof POLYGON_ZKEVM
  | typeof POLYGON_ZKEVM_TESTNET
  | typeof POLYGON_ZKEVM_CARDONA
  | typeof BASE
  | typeof BASE_SEPOLIA
  | typeof ASTAR
  | typeof LINEA
  | typeof ARBITRUM_NOVA
  | typeof AVALANCHE_C
  | typeof AVALANCHE_FUJI
  | typeof GNOSIS;

function endpoint(chain: Chain, key: string): string {
  switch (chain) {
    case ETHEREUM:
      return `https://eth-mainnet.g.alchemy.com/v2/${key}`;
    case SEPOLIA:
      return `https://eth-sepolia.g.alchemy.com/v2/${key}`;
    case POLYGON:
      return `https://polygon-mainnet.g.alchemy.com/v2/${key}`;
    case POLYGON_AMOY:
      return `https://polygon-amoy.g.alchemy.com/v2/${key}`;
    case ARBITRUM:
      return `https://arb-mainnet.g.alchemy.com/v2/${key}`;
    case ARBITRUM_SEPOLIA:
      return `https://arb-sepolia.g.alchemy.com/v2/${key}`;
    case OPTIMISM:
      return `https://opt-mainnet.g.alchemy.com/v2/${key}`;
    case OPTIMISM_SEPOLIA:
      return `https://opt-sepolia.g.alchemy.com/v2/${key}`;
    case POLYGON_ZKEVM:
      return `https://polygonzkevm-mainnet.g.alchemy.com/v2/${key}`;
    case POLYGON_ZKEVM_TESTNET:
      return `https://polygonzkevm-testnet.g.alchemy.com/v2/${key}`;
    case POLYGON_ZKEVM_CARDONA:
      return `https://polygonzkevm-cardona.g.alchemy.com/v2/${key}`;
    case BASE:
      return `https://base-mainnet.g.alchemy.com/v2/${key}`;
    case BASE_SEPOLIA:
      return `https://base-sepolia.g.alchemy.com/v2/${key}`;
    case ASTAR:
      return `https://astar-mainnet.g.alchemy.com/v2/${key}`;
    case LINEA:
      return `https://linea-mainnet.g.alchemy.com/v2/${key}`;
    case ARBITRUM_NOVA:
      return `https://arbnova-mainnet.g.alchemy.com/v2/${key}`;
    case AVALANCHE_C:
      return `https://avax-mainnet.g.alchemy.com/v2/${key}`;
    case AVALANCHE_FUJI:
      return `https://avax-fuji.g.alchemy.com/v2/${key}`;
    case GNOSIS:
      return `https://gnosis-mainnet.g.alchemy.com/v2/${key}`;
  }
}

export default endpoint;
export type { Chain };
