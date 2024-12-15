import {
  ARBITRUM,
  ARBITRUM_GOERLI,
  ARBITRUM_SEPOLIA,
  ARBITRUM_NOVA,
  ASTAR,
  AVALANCHE_C,
  AVALANCHE_FUJI,
  BASE,
  BASE_GOERLI,
  BASE_SEPOLIA,
  BLAST,
  BLAST_SEPOLIA,
  BSC,
  BSC_TESTNET,
  ETHEREUM,
  SEPOLIA,
  GOERLI,
  HOLESKY,
  FANTOM,
  FANTOM_TESTNET,
  GNOSIS,
  GNOSIS_CHIADO,
  LINEA,
  LINEA_GOERLI,
  MANTLE,
  MANTLE_GOERLI,
  MANTLE_SEPOLIA,
  MODE,
  MODE_SEPOLIA,
  MOONBASE_ALPHA,
  MOONBEAM,
  MOONRIVER,
  OPTIMISM,
  OPTIMISM_GOERLI,
  OPTIMISM_SEPOLIA,
  PALM,
  PALM_TESTNET,
  POLYGON,
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
  | typeof ASTAR
  | typeof AVALANCHE_C
  | typeof AVALANCHE_FUJI
  | typeof BASE
  | typeof BASE_GOERLI
  | typeof BASE_SEPOLIA
  | typeof BLAST
  | typeof BLAST_SEPOLIA
  | typeof BSC
  | typeof BSC_TESTNET
  | typeof ETHEREUM
  | typeof SEPOLIA
  | typeof GOERLI
  | typeof HOLESKY
  | typeof FANTOM
  | typeof FANTOM_TESTNET
  | typeof GNOSIS
  | typeof GNOSIS_CHIADO
  | typeof LINEA
  | typeof LINEA_GOERLI
  | typeof MANTLE
  | typeof MANTLE_GOERLI
  | typeof MANTLE_SEPOLIA
  | typeof MODE
  | typeof MODE_SEPOLIA
  | typeof MOONBASE_ALPHA
  | typeof MOONBEAM
  | typeof MOONRIVER
  | typeof OPTIMISM
  | typeof OPTIMISM_GOERLI
  | typeof OPTIMISM_SEPOLIA
  | typeof PALM
  | typeof PALM_TESTNET
  | typeof POLYGON
  | typeof POLYGON_ZKEVM
  | typeof POLYGON_ZKEVM_TESTNET
  | typeof SCROLL
  | typeof SCROLL_SEPOLIA
  | typeof ZKSYNC_ERA
  | typeof ZKSYNC_ERA_SEPOLIA;

function endpoint(chain: Chain, projectId: string): string {
  switch (chain) {
    case ARBITRUM:
      return `https://arbitrum-one.blastapi.io/${projectId}`;
    case ARBITRUM_GOERLI:
      return `https://arbitrum-goerli.blastapi.io/${projectId}`;
    case ARBITRUM_SEPOLIA:
      return `https://arbitrum-sepolia.blastapi.io/${projectId}`;
    case ARBITRUM_NOVA:
      return `https://arbitrum-nova.blastapi.io/${projectId}`;
    case ASTAR:
      return `https://astar.blastapi.io/${projectId}`;
    case AVALANCHE_C:
      return `https://ava-mainnet.blastapi.io/${projectId}/ext/bc/C/rpc`;
    case AVALANCHE_FUJI:
      return `https://ava-testnet.blastapi.io/${projectId}/ext/bc/C/rpc`;
    case BASE:
      return `https://base-mainnet.blastapi.io/${projectId}`;
    case BASE_GOERLI:
      return `https://base-goerli.blastapi.io/${projectId}`;
    case BASE_SEPOLIA:
      return `https://base-sepolia.blastapi.io/${projectId}`;
    case BLAST:
      return `https://blastl2-mainnet.blastapi.io/${projectId}`;
    case BLAST_SEPOLIA:
      return `https://blastl2-sepolia.blastapi.io/${projectId}`;
    case BSC:
      return `https://bsc-mainnet.blastapi.io/${projectId}`;
    case BSC_TESTNET:
      return `https://bsc-testnet.blastapi.io/${projectId}`;
    case ETHEREUM:
      return `https://eth-mainnet.blastapi.io/${projectId}`;
    case SEPOLIA:
      return `https://eth-sepolia.blastapi.io/${projectId}`;
    case GOERLI:
      return `https://eth-goerli.blastapi.io/${projectId}`;
    case HOLESKY:
      return `https://eth-holesky.blastapi.io/${projectId}`;
    case FANTOM:
      return `https://fantom-mainnet.blastapi.io/${projectId}`;
    case FANTOM_TESTNET:
      return `https://fantom-testnet.blastapi.io/${projectId}`;
    case GNOSIS:
      return `https://gnosis-mainnet.blastapi.io/${projectId}`;
    case GNOSIS_CHIADO:
      return `https://gnosis-chiado.blastapi.io/${projectId}`;
    case LINEA:
      return `https://linea-mainnet.blastapi.io/${projectId}`;
    case LINEA_GOERLI:
      return `https://linea-goerli.blastapi.io/${projectId}`;
    case MANTLE:
      return `https://mantle-mainnet.blastapi.io/${projectId}`;
    case MANTLE_GOERLI:
      return `https://mantle-goerli.blastapi.io/${projectId}`;
    case MANTLE_SEPOLIA:
      return `https://mantle-sepolia.blastapi.io/${projectId}`;
    case MODE:
      return `https://mode-mainnet.blastapi.io/${projectId}`;
    case MODE_SEPOLIA:
      return `https://mode-sepolia.blastapi.io/${projectId}`;
    case MOONBASE_ALPHA:
      return `https://moonbase-alpha.blastapi.io/${projectId}`;
    case MOONBEAM:
      return `https://moonbeam.blastapi.io/${projectId}`;
    case MOONRIVER:
      return `https://moonriver.blastapi.io/${projectId}`;
    case OPTIMISM:
      return `https://optimism-mainnet.blastapi.io/${projectId}`;
    case OPTIMISM_GOERLI:
      return `https://optimism-goerli.blastapi.io/${projectId}`;
    case OPTIMISM_SEPOLIA:
      return `https://optimism-sepolia.blastapi.io/${projectId}`;
    case PALM:
      return `https://palm-mainnet.blastapi.io/${projectId}`;
    case PALM_TESTNET:
      return `https://palm-testnet.blastapi.io/${projectId}`;
    case POLYGON:
      return `https://polygon-mainnet.blastapi.io/${projectId}`;
    case POLYGON_ZKEVM:
      return `https://polygon-zkevm-mainnet.blastapi.io/${projectId}`;
    case POLYGON_ZKEVM_TESTNET:
      return `https://polygon-zkevm-testnet.blastapi.io/${projectId}`;
    case SCROLL:
      return `https://scroll-mainnet.blastapi.io/${projectId}`;
    case SCROLL_SEPOLIA:
      return `https://scroll-sepolia.blastapi.io/${projectId}`;
    case ZKSYNC_ERA:
      return `https://zksync-mainnet.blastapi.io/${projectId}`;
    case ZKSYNC_ERA_SEPOLIA:
      return `https://zksync-testnet.blastapi.io/${projectId}`;
  }
}

export default endpoint;
export type { Chain };
