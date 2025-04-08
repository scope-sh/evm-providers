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
  LINEA_SEPOLIA,
  ARBITRUM_NOVA,
  AVALANCHE_C,
  AVALANCHE_FUJI,
  GNOSIS,
  BSC,
  BSC_TESTNET,
  SCROLL,
  SCROLL_SEPOLIA,
  CELO,
  CELO_ALFAJORES,
  CELO_BAKLAVA,
  WORLDCHAIN,
  WORLDCHAIN_SEPOLIA,
  MONAD_TESTNET,
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
  | typeof LINEA_SEPOLIA
  | typeof ARBITRUM_NOVA
  | typeof AVALANCHE_C
  | typeof AVALANCHE_FUJI
  | typeof GNOSIS
  | typeof BSC
  | typeof BSC_TESTNET
  | typeof SCROLL
  | typeof SCROLL_SEPOLIA
  | typeof CELO
  | typeof CELO_ALFAJORES
  | typeof CELO_BAKLAVA
  | typeof MONAD_TESTNET
  | typeof WORLDCHAIN
  | typeof WORLDCHAIN_SEPOLIA;

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
    case LINEA_SEPOLIA:
      return `https://linea-sepolia.g.alchemy.com/v2/${key}`;
    case ARBITRUM_NOVA:
      return `https://arbnova-mainnet.g.alchemy.com/v2/${key}`;
    case AVALANCHE_C:
      return `https://avax-mainnet.g.alchemy.com/v2/${key}`;
    case AVALANCHE_FUJI:
      return `https://avax-fuji.g.alchemy.com/v2/${key}`;
    case GNOSIS:
      return `https://gnosis-mainnet.g.alchemy.com/v2/${key}`;
    case BSC:
      return `https://bnb-mainnet.g.alchemy.com/v2/${key}`;
    case BSC_TESTNET:
      return `https://bnb-testnet.g.alchemy.com/v2/${key}`;
    case SCROLL:
      return `https://scroll-mainnet.g.alchemy.com/v2/${key}`;
    case SCROLL_SEPOLIA:
      return `https://scroll-sepolia.g.alchemy.com/v2/${key}`;
    case CELO:
      return `https://celo-mainnet.g.alchemy.com/v2/${key}`;
    case CELO_ALFAJORES:
      return `https://celo-alfajores.g.alchemy.com/v2/${key}`;
    case CELO_BAKLAVA:
      return `https://celo-baklava.g.alchemy.com/v2/${key}`;
    case MONAD_TESTNET:
      return `https://monad-testnet.g.alchemy.com/v2/${key}`;
    case WORLDCHAIN:
      return `https://worldchain-mainnet.g.alchemy.com/v2/${key}`;
    case WORLDCHAIN_SEPOLIA:
      return `https://worldchain-sepolia.g.alchemy.com/v2/${key}`;
  }
}

export default endpoint;
export type { Chain };
