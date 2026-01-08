import {
  ETHEREUM,
  SEPOLIA,
  LINEA,
  LINEA_SEPOLIA,
  POLYGON,
  POLYGON_AMOY,
  BLAST,
  BLAST_SEPOLIA,
  OPTIMISM,
  OPTIMISM_SEPOLIA,
  ARBITRUM,
  ARBITRUM_SEPOLIA,
  PALM,
  PALM_TESTNET,
  AVALANCHE_C,
  AVALANCHE_FUJI,
  CELO,
  CELO_SEPOLIA,
  BASE,
  BASE_SEPOLIA,
  MONAD,
  MONAD_TESTNET,
  SCROLL,
  SCROLL_SEPOLIA,
  UNICHAIN,
  UNICHAIN_SEPOLIA,
} from '../utils/chains.js';

type Chain =
  | typeof ETHEREUM
  | typeof SEPOLIA
  | typeof LINEA
  | typeof LINEA_SEPOLIA
  | typeof POLYGON
  | typeof POLYGON_AMOY
  | typeof BLAST
  | typeof BLAST_SEPOLIA
  | typeof OPTIMISM
  | typeof OPTIMISM_SEPOLIA
  | typeof ARBITRUM
  | typeof ARBITRUM_SEPOLIA
  | typeof PALM
  | typeof PALM_TESTNET
  | typeof AVALANCHE_C
  | typeof AVALANCHE_FUJI
  | typeof CELO
  | typeof CELO_SEPOLIA
  | typeof BASE
  | typeof BASE_SEPOLIA
  | typeof MONAD
  | typeof MONAD_TESTNET
  | typeof SCROLL
  | typeof SCROLL_SEPOLIA
  | typeof UNICHAIN
  | typeof UNICHAIN_SEPOLIA;

function endpoint(chain: Chain, key: string): string {
  switch (chain) {
    case ETHEREUM:
      return `https://mainnet.infura.io/v3/${key}`;
    case SEPOLIA:
      return `https://sepolia.infura.io/v3/${key}`;
    case LINEA:
      return `https://linea-mainnet.infura.io/v3/${key}`;
    case LINEA_SEPOLIA:
      return `https://linea-sepolia.infura.io/v3/${key}`;
    case POLYGON:
      return `https://polygon-mainnet.infura.io/v3/${key}`;
    case POLYGON_AMOY:
      return `https://polygon-amoy.infura.io/v3/${key}`;
    case BLAST:
      return `https://blast-mainnet.infura.io/v3/${key}`;
    case BLAST_SEPOLIA:
      return `https://blast-sepolia.infura.io/v3/${key}`;
    case OPTIMISM:
      return `https://optimism-mainnet.infura.io/v3/${key}`;
    case OPTIMISM_SEPOLIA:
      return `https://optimism-sepolia.infura.io/v3/${key}`;
    case ARBITRUM:
      return `https://arbitrum-mainnet.infura.io/v3/${key}`;
    case ARBITRUM_SEPOLIA:
      return `https://arbitrum-sepolia.infura.io/v3/${key}`;
    case PALM:
      return `https://palm-mainnet.infura.io/v3/${key}`;
    case PALM_TESTNET:
      return `https://palm-testnet.infura.io/v3/${key}`;
    case AVALANCHE_C:
      return `https://avalanche-mainnet.infura.io/v3/${key}`;
    case AVALANCHE_FUJI:
      return `https://avalanche-fuji.infura.io/v3/${key}`;
    case CELO:
      return `https://celo-mainnet.infura.io/v3/${key}`;
    case CELO_SEPOLIA:
      return `https://celo-sepolia.infura.io/v3/${key}`;
    case BASE:
      return `https://base-mainnet.infura.io/v3/${key}`;
    case BASE_SEPOLIA:
      return `https://base-sepolia.infura.io/v3/${key}`;
    case MONAD:
      return `https://monad-mainnet.infura.io/v3/${key}`;
    case MONAD_TESTNET:
      return `https://monad-testnet.infura.io/v3/${key}`;
    case SCROLL:
      return `https://scroll-mainnet.infura.io/v3/${key}`;
    case SCROLL_SEPOLIA:
      return `https://scroll-sepolia.infura.io/v3/${key}`;
    case UNICHAIN:
      return `https://unichain-mainnet.infura.io/v3/${key}`;
    case UNICHAIN_SEPOLIA:
      return `https://unichain-sepolia.infura.io/v3/${key}`;
  }
}

export default endpoint;
export type { Chain };
