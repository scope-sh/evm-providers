import {
  ARBITRUM_NOVA,
  ARBITRUM_SEPOLIA,
  ARBITRUM,
  AVALANCHE_C,
  AVALANCHE_FUJI,
  BASE_SEPOLIA,
  BASE,
  BLAST_SEPOLIA,
  BLAST,
  BSC_TESTNET,
  BSC,
  CELO,
  ETHEREUM,
  FANTOM,
  GNOSIS,
  HOLESKY,
  IMMUTABLE_ZKEVM_TESTNET,
  IMMUTABLE_ZKEVM,
  LINEA,
  MODE,
  OPTIMISM_SEPOLIA,
  OPTIMISM,
  POLYGON_AMOY,
  POLYGON_ZKEVM_TESTNET,
  POLYGON_ZKEVM,
  POLYGON,
  SCROLL_SEPOLIA,
  SCROLL,
  SEPOLIA,
  MONAD_TESTNET,
  ZKSYNC_ERA_SEPOLIA,
  ZKSYNC_ERA,
} from '../utils/chains.js';

type Chain =
  | typeof ARBITRUM
  | typeof ARBITRUM_NOVA
  | typeof ARBITRUM_SEPOLIA
  | typeof AVALANCHE_C
  | typeof AVALANCHE_FUJI
  | typeof BASE
  | typeof BASE_SEPOLIA
  | typeof BLAST
  | typeof BLAST_SEPOLIA
  | typeof BSC
  | typeof BSC_TESTNET
  | typeof CELO
  | typeof ETHEREUM
  | typeof FANTOM
  | typeof GNOSIS
  | typeof HOLESKY
  | typeof IMMUTABLE_ZKEVM
  | typeof IMMUTABLE_ZKEVM_TESTNET
  | typeof LINEA
  | typeof MODE
  | typeof OPTIMISM
  | typeof OPTIMISM_SEPOLIA
  | typeof POLYGON
  | typeof POLYGON_AMOY
  | typeof POLYGON_ZKEVM
  | typeof POLYGON_ZKEVM_TESTNET
  | typeof SCROLL
  | typeof SCROLL_SEPOLIA
  | typeof SEPOLIA
  | typeof MONAD_TESTNET
  | typeof ZKSYNC_ERA
  | typeof ZKSYNC_ERA_SEPOLIA;

function endpoint(chain: Chain, appName: string, appKey: string): string {
  switch (chain) {
    case ARBITRUM:
      return `https://${appName}.arbitrum-mainnet.quiknode.pro/${appKey}`;
    case ARBITRUM_SEPOLIA:
      return `https://${appName}.arbitrum-sepolia.quiknode.pro/${appKey}`;
    case ARBITRUM_NOVA:
      return `https://${appName}.nova-mainnet.quiknode.pro/${appKey}`;
    case AVALANCHE_C:
      return `https://${appName}.avalanche-mainnet.quiknode.pro/${appKey}`;
    case AVALANCHE_FUJI:
      return `https://${appName}.avalanche-testnet.quiknode.pro/${appKey}`;
    case BASE:
      return `https://${appName}.base-mainnet.quiknode.pro/${appKey}`;
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
    case HOLESKY:
      return `https://${appName}.ethereum-holesky.quiknode.pro/${appKey}`;
    case FANTOM:
      return `https://${appName}.fantom.quiknode.pro/${appKey}`;
    case GNOSIS:
      return `https://${appName}.xdai.quiknode.pro/${appKey}`;
    case IMMUTABLE_ZKEVM:
      return `https://${appName}.imx-mainnet.quiknode.pro/${appKey}`;
    case IMMUTABLE_ZKEVM_TESTNET:
      return `https://${appName}.imx-testnet.quiknode.pro/${appKey}`;
    case LINEA:
      return `https://${appName}.linea-mainnet.quiknode.pro/${appKey}`;
    case MODE:
      return `https://${appName}.mode-mainnet.quiknode.pro/${appKey}`;
    case OPTIMISM:
      return `https://${appName}.optimism.quiknode.pro/${appKey}`;
    case OPTIMISM_SEPOLIA:
      return `https://${appName}.optimism-sepolia.quiknode.pro/${appKey}`;
    case POLYGON:
      return `https://${appName}.matic.quiknode.pro/${appKey}`;
    case POLYGON_AMOY:
      return `https://${appName}.matic-amoy.quiknode.pro/${appKey}`;
    case POLYGON_ZKEVM:
      return `https://${appName}.zkevm-mainnet.quiknode.pro/${appKey}`;
    case POLYGON_ZKEVM_TESTNET:
      return `https://${appName}.zkevm-testnet.quiknode.pro/${appKey}`;
    case SCROLL:
      return `https://${appName}.scroll-mainnet.quiknode.pro/${appKey}`;
    case SCROLL_SEPOLIA:
      return `https://${appName}.scroll-testnet.quiknode.pro/${appKey}`;
    case MONAD_TESTNET:
      return `https://${appName}.monad-testnet.quiknode.pro/${appKey}`;
    case ZKSYNC_ERA:
      return `https://${appName}.zksync-mainnet.quiknode.pro/${appKey}`;
    case ZKSYNC_ERA_SEPOLIA:
      return `https://${appName}.zksync-sepolia.quiknode.pro/${appKey}`;
  }
}

export default endpoint;
export type { Chain };
