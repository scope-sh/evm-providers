import {
  ETHEREUM,
  SEPOLIA,
  HOLESKY,
  POLYGON,
  POLYGON_AMOY,
  OPTIMISM,
  OPTIMISM_SEPOLIA,
  ARBITRUM,
  ARBITRUM_NOVA,
  ARBITRUM_SEPOLIA,
  AVALANCHE_C,
  AVALANCHE_FUJI,
  BASE,
  BASE_SEPOLIA,
  BLAST,
  BOBA_ETHEREUM,
  BOBA_SEPOLIA,
  BOBA_BNB,
  BOBA_BNB_TESTNET,
  MANTLE,
  MANTLE_SEPOLIA,
  MODE,
  MODE_SEPOLIA,
} from '../utils/chains.js';

type Chain =
  | typeof ETHEREUM
  | typeof SEPOLIA
  | typeof HOLESKY
  | typeof POLYGON
  | typeof POLYGON_AMOY
  | typeof OPTIMISM
  | typeof OPTIMISM_SEPOLIA
  | typeof ARBITRUM
  | typeof ARBITRUM_NOVA
  | typeof ARBITRUM_SEPOLIA
  | typeof AVALANCHE_C
  | typeof AVALANCHE_FUJI
  | typeof BASE
  | typeof BASE_SEPOLIA
  | typeof BLAST
  | typeof BOBA_ETHEREUM
  | typeof BOBA_SEPOLIA
  | typeof BOBA_BNB
  | typeof BOBA_BNB_TESTNET
  | typeof MANTLE
  | typeof MANTLE_SEPOLIA
  | typeof MODE
  | typeof MODE_SEPOLIA;

function endpoint(chain: Chain, accessKey: string): string {
  switch (chain) {
    case ETHEREUM:
      return `https://mainnet.gateway.tenderly.co/${accessKey}`;
    case SEPOLIA:
      return `https://sepolia.gateway.tenderly.co/${accessKey}`;
    case HOLESKY:
      return `https://holesky.gateway.tenderly.co/${accessKey}`;
    case POLYGON:
      return `https://polygon.gateway.tenderly.co/${accessKey}`;
    case POLYGON_AMOY:
      return `https://polygon-amoy.gateway.tenderly.co/${accessKey}`;
    case OPTIMISM:
      return `https://optimism.gateway.tenderly.co/${accessKey}`;
    case OPTIMISM_SEPOLIA:
      return `https://optimism-sepolia.gateway.tenderly.co/${accessKey}`;
    case ARBITRUM:
      return `https://arbitrum.gateway.tenderly.co/${accessKey}`;
    case ARBITRUM_NOVA:
      return `https://arbitrum-nova.gateway.tenderly.co/${accessKey}`;
    case ARBITRUM_SEPOLIA:
      return `https://arbitrum-sepolia.gateway.tenderly.co/${accessKey}`;
    case AVALANCHE_C:
      return `https://avalanche.gateway.tenderly.co/${accessKey}`;
    case AVALANCHE_FUJI:
      return `https://avalanche-fuji.gateway.tenderly.co/${accessKey}`;
    case BASE:
      return `https://base.gateway.tenderly.co/${accessKey}`;
    case BASE_SEPOLIA:
      return `https://base-sepolia.gateway.tenderly.co/${accessKey}`;
    case BLAST:
      return `https://blast.gateway.tenderly.co/${accessKey}`;
    case BOBA_ETHEREUM:
      return `https://boba-ethereum.gateway.tenderly.co/${accessKey}`;
    case BOBA_SEPOLIA:
      return `https://boba-sepolia.gateway.tenderly.co/${accessKey}`;
    case BOBA_BNB:
      return `https://boba-bnb.gateway.tenderly.co/${accessKey}`;
    case BOBA_BNB_TESTNET:
      return `https://boba-bnb-testnet.gateway.tenderly.co/${accessKey}`;
    case MANTLE:
      return `https://mantle.gateway.tenderly.co/${accessKey}`;
    case MANTLE_SEPOLIA:
      return `https://mantle-sepolia.gateway.tenderly.co/${accessKey}`;
    case MODE:
      return `https://mode.gateway.tenderly.co/${accessKey}`;
    case MODE_SEPOLIA:
      return `https://mode-sepolia.gateway.tenderly.co/${accessKey}`;
  }
}

export default endpoint;
export type { Chain };
