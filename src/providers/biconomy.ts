import type {
  ARBITRUM,
  ARBITRUM_SEPOLIA,
  ARBITRUM_GOERLI,
  ARBITRUM_NOVA,
  BSC,
  BSC_TESTNET,
  ETHEREUM,
  SEPOLIA,
  POLYGON,
  POLYGON_ZKEVM,
  POLYGON_ZKEVM_TESTNET,
  OPTIMISM,
  OPTIMISM_GOERLI,
  OPTIMISM_SEPOLIA,
  AVALANCHE_C,
  AVALANCHE_FUJI,
  BASE,
  BASE_GOERLI,
  BASE_SEPOLIA,
  LINEA,
  LINEA_GOERLI,
  ASTAR,
  OP_BNB,
  OP_BNB_TESTNET,
  CORE,
  CORE_TESTNET,
  MANTA_PACIFIC,
  MANTA_PACIFIC_TESTNET,
  MANTLE,
  MANTLE_GOERLI,
  COMBO,
  COMBO_TESTNET,
  BLAST,
  BLAST_SEPOLIA,
  SCROLL,
  SCROLL_SEPOLIA,
  ZETACHAIN,
} from '../utils/chains.js';

type Chain =
  | typeof ARBITRUM
  | typeof ARBITRUM_SEPOLIA
  | typeof ARBITRUM_GOERLI
  | typeof ARBITRUM_NOVA
  | typeof BSC
  | typeof BSC_TESTNET
  | typeof ETHEREUM
  | typeof SEPOLIA
  | typeof POLYGON
  | typeof POLYGON_ZKEVM
  | typeof POLYGON_ZKEVM_TESTNET
  | typeof OPTIMISM
  | typeof OPTIMISM_GOERLI
  | typeof OPTIMISM_SEPOLIA
  | typeof AVALANCHE_C
  | typeof AVALANCHE_FUJI
  | typeof BASE
  | typeof BASE_GOERLI
  | typeof BASE_SEPOLIA
  | typeof LINEA
  | typeof LINEA_GOERLI
  | typeof ASTAR
  | typeof OP_BNB
  | typeof OP_BNB_TESTNET
  | typeof CORE
  | typeof CORE_TESTNET
  | typeof MANTA_PACIFIC
  | typeof MANTA_PACIFIC_TESTNET
  | typeof MANTLE
  | typeof MANTLE_GOERLI
  | typeof COMBO
  | typeof COMBO_TESTNET
  | typeof BLAST
  | typeof BLAST_SEPOLIA
  | typeof SCROLL
  | typeof SCROLL_SEPOLIA
  | typeof ZETACHAIN;

function paymaster(chain: Chain, apiKey: string): string {
  return `https://paymaster.biconomy.io/api/v1/${chain}/${apiKey}`;
}

function bundler(chain: Chain, apiKey: string): string {
  return `https://bundler.biconomy.io/api/v2/${chain}/${apiKey}`;
}

export { bundler, paymaster };
export type { Chain };
