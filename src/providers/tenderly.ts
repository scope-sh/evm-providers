import {
  ETHEREUM,
  SEPOLIA,
  GOERLI,
  HOLESKY,
  POLYGON,
  POLYGON_MUMBAI,
  OPTIMISM,
  OPTIMISM_GOERLI,
  OPTIMISM_SEPOLIA,
  ARBITRUM,
  ARBITRUM_NOVA,
  ARBITRUM_SEPOLIA,
  BASE,
  BASE_SEPOLIA,
  BOBA_ETHEREUM,
  BOBA_GOERLI,
  BOBA_BNB,
  BOBA_BNB_TESTNET,
} from '../utils/chains.js';

type TenderlyChain =
  | typeof ETHEREUM
  | typeof SEPOLIA
  | typeof GOERLI
  | typeof HOLESKY
  | typeof POLYGON
  | typeof POLYGON_MUMBAI
  | typeof OPTIMISM
  | typeof OPTIMISM_GOERLI
  | typeof OPTIMISM_SEPOLIA
  | typeof ARBITRUM
  | typeof ARBITRUM_NOVA
  | typeof ARBITRUM_SEPOLIA
  | typeof BASE
  | typeof BASE_SEPOLIA
  | typeof BOBA_ETHEREUM
  | typeof BOBA_GOERLI
  | typeof BOBA_BNB
  | typeof BOBA_BNB_TESTNET;

function endpoint(chain: TenderlyChain, accessKey: string): string {
  switch (chain) {
    case ETHEREUM:
      return `https://mainnet.gateway.tenderly.co/${accessKey}`;
    case SEPOLIA:
      return `https://sepolia.gateway.tenderly.co/${accessKey}`;
    case GOERLI:
      return `https://goerli.gateway.tenderly.co/${accessKey}`;
    case HOLESKY:
      return `https://holesky.gateway.tenderly.co/${accessKey}`;
    case POLYGON:
      return `https://polygon.gateway.tenderly.co/${accessKey}`;
    case POLYGON_MUMBAI:
      return `https://polygon-mumbai.gateway.tenderly.co/${accessKey}`;
    case OPTIMISM:
      return `https://optimism.gateway.tenderly.co/${accessKey}`;
    case OPTIMISM_GOERLI:
      return `https://optimism-goerli.gateway.tenderly.co/${accessKey}`;
    case OPTIMISM_SEPOLIA:
      return `https://optimism-sepolia.gateway.tenderly.co/${accessKey}`;
    case ARBITRUM:
      return `https://arbitrum.gateway.tenderly.co/${accessKey}`;
    case ARBITRUM_NOVA:
      return `https://arbitrum-nova.gateway.tenderly.co/${accessKey}`;
    case ARBITRUM_SEPOLIA:
      return `https://arbitrum-sepolia.gateway.tenderly.co/${accessKey}`;
    case BASE:
      return `https://base.gateway.tenderly.co/${accessKey}`;
    case BASE_SEPOLIA:
      return `https://base-sepolia.gateway.tenderly.co/${accessKey}`;
    case BOBA_ETHEREUM:
      return `https://boba-ethereum.gateway.tenderly.co/${accessKey}`;
    case BOBA_GOERLI:
      return `https://boba-goerli.gateway.tenderly.co/${accessKey}`;
    case BOBA_BNB:
      return `https://boba-bnb.gateway.tenderly.co/${accessKey}`;
    case BOBA_BNB_TESTNET:
      return `https://boba-bnb-testnet.gateway.tenderly.co/${accessKey}`;
  }
}

export default endpoint;
