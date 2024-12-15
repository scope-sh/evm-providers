import {
  ETHEREUM,
  SEPOLIA,
  LINEA,
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
  CELO_ALFAJORES,
} from '../utils/chains.js';

type Chain =
  | typeof ETHEREUM
  | typeof SEPOLIA
  | typeof LINEA
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
  | typeof CELO_ALFAJORES;

function endpoint(chain: Chain, key: string): string {
  switch (chain) {
    case ETHEREUM:
      return `https://mainnet.infura.io/v3/${key}`;
    case SEPOLIA:
      return `https://sepolia.infura.io/v3/${key}`;
    case LINEA:
      return `https://linea-mainnet.infura.io/v3/${key}`;
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
    case CELO_ALFAJORES:
      return `https://celo-alfajores.infura.io/v3/${key}`;
  }
}

export default endpoint;
export type { Chain };
