import {
  ETHEREUM,
  SEPOLIA,
  ARBITRUM,
  ARBITRUM_SEPOLIA,
  AVALANCHE_C,
  BASE,
  BASE_SEPOLIA,
  BLAST,
  BSC,
  FLARE,
  FUSE,
  GNOSIS,
  KLAYTN,
  KAVA,
  LINEA,
  MANTLE,
  MONAD,
  MONAD_TESTNET,
  MOONBEAM,
  OP_BNB,
  OPTIMISM,
  OPTIMISM_SEPOLIA,
  POLYGON,
  POLYGON_ZKEVM,
  SCROLL,
  UNICHAIN,
  UNICHAIN_SEPOLIA,
  ZKSYNC_ERA,
  ZORA,
} from '../utils/chains.js';

type Chain =
  | typeof ETHEREUM
  | typeof SEPOLIA
  | typeof ARBITRUM
  | typeof ARBITRUM_SEPOLIA
  | typeof AVALANCHE_C
  | typeof BASE
  | typeof BASE_SEPOLIA
  | typeof BLAST
  | typeof BSC
  | typeof FLARE
  | typeof FUSE
  | typeof GNOSIS
  | typeof KLAYTN
  | typeof KAVA
  | typeof LINEA
  | typeof MANTLE
  | typeof MONAD
  | typeof MONAD_TESTNET
  | typeof MOONBEAM
  | typeof OP_BNB
  | typeof OPTIMISM
  | typeof OPTIMISM_SEPOLIA
  | typeof POLYGON
  | typeof POLYGON_ZKEVM
  | typeof SCROLL
  | typeof UNICHAIN
  | typeof UNICHAIN_SEPOLIA
  | typeof ZKSYNC_ERA
  | typeof ZORA;

function endpoint(chain: Chain, key: string): string {
  return `https://edge.goldsky.com/standard/evm/${chain}?secret=${key}`;
}

export default endpoint;
export type { Chain };
