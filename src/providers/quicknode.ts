import {
  ARBITRUM,
  ARBITRUM_GOERLI,
  ARBITRUM_SEPOLIA,
  ARBITRUM_NOVA,
  AVALANCHE_C,
  AVALANCHE_FUJI,
  BASE,
  BASE_GOERLI,
  BASE_SEPOLIA,
  BLAST,
  BLAST_SEPOLIA,
  BSC,
  BSC_TESTNET,
  CELO,
  ETHEREUM,
  SEPOLIA,
  GOERLI,
  HOLESKY,
  FANTOM,
  GNOSIS,
  IMMUTABLE_ZKEVM,
  IMMUTABLE_ZKEVM_TESTNET,
  OPTIMISM,
  OPTIMISM_GOERLI,
  OPTIMISM_SEPOLIA,
  POLYGON,
  POLYGON_AMOY,
  POLYGON_MUMBAI,
  POLYGON_ZKEVM,
  POLYGON_ZKEVM_TESTNET,
  SCROLL,
  SCROLL_SEPOLIA,
  ZKSYNC_ERA,
  ZKSYNC_ERA_SEPOLIA,
} from '../utils/chains.js';

type Chain =
  | typeof ARBITRUM
  | typeof ARBITRUM_GOERLI
  | typeof ARBITRUM_SEPOLIA
  | typeof ARBITRUM_NOVA
  | typeof AVALANCHE_C
  | typeof AVALANCHE_FUJI
  | typeof BASE
  | typeof BASE_GOERLI
  | typeof BASE_SEPOLIA
  | typeof BLAST
  | typeof BLAST_SEPOLIA
  | typeof BSC
  | typeof BSC_TESTNET
  | typeof CELO
  | typeof ETHEREUM
  | typeof SEPOLIA
  | typeof GOERLI
  | typeof HOLESKY
  | typeof FANTOM
  | typeof GNOSIS
  | typeof IMMUTABLE_ZKEVM
  | typeof IMMUTABLE_ZKEVM_TESTNET
  | typeof OPTIMISM
  | typeof OPTIMISM_GOERLI
  | typeof OPTIMISM_SEPOLIA
  | typeof POLYGON
  | typeof POLYGON_AMOY
  | typeof POLYGON_MUMBAI
  | typeof POLYGON_ZKEVM
  | typeof POLYGON_ZKEVM_TESTNET
  | typeof SCROLL
  | typeof SCROLL_SEPOLIA
  | typeof ZKSYNC_ERA
  | typeof ZKSYNC_ERA_SEPOLIA;

function endpoint(chain: Chain, appName: string, appKey: string): string {
  switch (chain) {
    case ARBITRUM:
      return `https://${appName}.arbitrum-mainnet.quiknode.pro/${appKey}`;
    case ARBITRUM_GOERLI:
      return `https://${appName}.arbitrum-goerli.quiknode.pro/${appKey}`;
    case ARBITRUM_SEPOLIA:
      return `https://${appName}.arbitrum-sepolia.quiknode.pro/${appKey}`;
    case ARBITRUM_NOVA:
      return `https://${appName}.arbitrum-nova.quiknode.pro/${appKey}`;
    case AVALANCHE_C:
      return `https://${appName}.avalanche-mainnet.quiknode.pro/${appKey}`;
    case AVALANCHE_FUJI:
      return `https://${appName}.avalanche-testnet.quiknode.pro/${appKey}`;
    case BASE:
      return `https://${appName}.base-mainnet.quiknode.pro/${appKey}`;
    case BASE_GOERLI:
      return `https://${appName}.base-goerli.quiknode.pro/${appKey}`;
    case BASE_SEPOLIA:
      return `https://${appName}.base-sepolia.quiknode.pro/${appKey}`;
    case BLAST:
      return `https://${appName}.blast-mainnet.quiknode.pro/${appKey}`;
    case BLAST_SEPOLIA:
      return `https://${appName}.blast-sepolia.quiknode.pro/${appKey}`;
    case BSC:
      return `https://${appName}.bsc.quiknode.pro/${appKey}`;
    case BSC_TESTNET:
      return `https://${appName}.bsc-testnet.quiknode.pro/${appKey}`;
    case CELO:
      return `https://${appName}.celo-mainnet.quiknode.pro/${appKey}`;
    case ETHEREUM:
      return `https://${appName}.quiknode.pro/${appKey}`;
    case SEPOLIA:
      return `https://${appName}.ethereum-sepolia.quiknode.pro/${appKey}`;
    case GOERLI:
      return `https://${appName}.ethereum-goerli.quiknode.pro/${appKey}`;
    case HOLESKY:
      return `https://${appName}.ethereum-holesky.quiknode.pro/${appKey}`;
    case FANTOM:
      return `https://${appName}.fantom.quiknode.pro/${appKey}`;
    case GNOSIS:
      return `https://${appName}.gnosis.quiknode.pro/${appKey}`;
    case IMMUTABLE_ZKEVM:
      return `https://${appName}.imx-mainnet.quiknode.pro/${appKey}`;
    case IMMUTABLE_ZKEVM_TESTNET:
      return `https://${appName}.imx-testnet.quiknode.pro/${appKey}`;
    case OPTIMISM:
      return `https://${appName}.optimism.quiknode.pro/${appKey}`;
    case OPTIMISM_GOERLI:
      return `https://${appName}.optimism-goerli.quiknode.pro/${appKey}`;
    case OPTIMISM_SEPOLIA:
      return `https://${appName}.optimism-sepolia.quiknode.pro/${appKey}`;
    case POLYGON:
      return `https://${appName}.polygon.quiknode.pro/${appKey}`;
    case POLYGON_AMOY:
      return `https://${appName}.matic-amoy.quiknode.pro/${appKey}`;
    case POLYGON_MUMBAI:
      return `https://${appName}.matic-testnet.quiknode.pro/${appKey}`;
    case POLYGON_ZKEVM:
      return `https://${appName}.zkevm-mainnet.quiknode.pro/${appKey}`;
    case POLYGON_ZKEVM_TESTNET:
      return `https://${appName}.zkevm-testnet.quiknode.pro/${appKey}`;
    case SCROLL:
      return `https://${appName}.scroll-mainnet.quiknode.pro/${appKey}`;
    case SCROLL_SEPOLIA:
      return `https://${appName}.scroll-testnet.quiknode.pro/${appKey}`;
    case ZKSYNC_ERA:
      return `https://${appName}.zksync-mainnet.quiknode.pro/${appKey}`;
    case ZKSYNC_ERA_SEPOLIA:
      return `https://${appName}.zksync-era-sepolia.quiknode.pro/${appKey}`;
  }
}

export default endpoint;
export type { Chain };
