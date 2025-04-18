import type {
  ARBITRUM,
  ARBITRUM_SEPOLIA,
  ARBITRUM_NOVA,
  BSC,
  BSC_TESTNET,
  ETHEREUM,
  SEPOLIA,
  POLYGON,
  POLYGON_ZKEVM,
  POLYGON_ZKEVM_TESTNET,
  OPTIMISM,
  OPTIMISM_SEPOLIA,
  AVALANCHE_C,
  AVALANCHE_FUJI,
  BASE,
  BASE_SEPOLIA,
  LINEA,
  ASTAR,
  OP_BNB,
  OP_BNB_TESTNET,
  CORE,
  CORE_TESTNET,
  MANTA_PACIFIC,
  MANTA_PACIFIC_TESTNET,
  MANTLE,
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
  | typeof ARBITRUM_NOVA
  | typeof BSC
  | typeof BSC_TESTNET
  | typeof ETHEREUM
  | typeof SEPOLIA
  | typeof POLYGON
  | typeof POLYGON_ZKEVM
  | typeof POLYGON_ZKEVM_TESTNET
  | typeof OPTIMISM
  | typeof OPTIMISM_SEPOLIA
  | typeof AVALANCHE_C
  | typeof AVALANCHE_FUJI
  | typeof BASE
  | typeof BASE_SEPOLIA
  | typeof LINEA
  | typeof ASTAR
  | typeof OP_BNB
  | typeof OP_BNB_TESTNET
  | typeof CORE
  | typeof CORE_TESTNET
  | typeof MANTA_PACIFIC
  | typeof MANTA_PACIFIC_TESTNET
  | typeof MANTLE
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
