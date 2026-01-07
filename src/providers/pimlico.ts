import type {
  ARBITRUM,
  ARBITRUM_NOVA,
  ARBITRUM_SEPOLIA,
  AVALANCHE_C,
  AVALANCHE_FUJI,
  BASE,
  BASE_SEPOLIA,
  BSC,
  BSC_TESTNET,
  BLAST_SEPOLIA,
  CELO,
  GNOSIS_CHIADO,
  CYBER_TESTNET,
  DFK_CHAIN,
  DFK_CHAIN_TESTNET,
  ETHEREUM,
  FORM_TESTNET,
  FRAXTAL,
  FUSE,
  GNOSIS,
  KINTO,
  KLAYTN_BAOBAB,
  KLAYTN,
  LINEA,
  LYRA,
  MANTLE,
  MODE,
  MODE_SEPOLIA,
  NAUTILUS,
  OP_BNB,
  OPTIMISM,
  OPTIMISM_SEPOLIA,
  PARALLEL_L2_TESTNET,
  POLYGON,
  POLYGON_AMOY,
  RENAISSANCE_TESTNET,
  SCROLL,
  SCROLL_ALPHA,
  SCROLL_SEPOLIA,
  SEPOLIA,
  TAIKO_KATLA,
  XAI,
  XAI_SEPOLIA,
  ZORA,
  ZORA_SEPOLIA,
} from '../utils/chains.js';

type Chain =
  | typeof ARBITRUM
  | typeof ARBITRUM_NOVA
  | typeof ARBITRUM_SEPOLIA
  | typeof AVALANCHE_C
  | typeof AVALANCHE_FUJI
  | typeof BASE
  | typeof BASE_SEPOLIA
  | typeof BSC
  | typeof BSC_TESTNET
  | typeof BLAST_SEPOLIA
  | typeof CELO
  | typeof GNOSIS_CHIADO
  | typeof CYBER_TESTNET
  | typeof DFK_CHAIN
  | typeof DFK_CHAIN_TESTNET
  | typeof ETHEREUM
  | typeof FORM_TESTNET
  | typeof FRAXTAL
  | typeof FUSE
  | typeof GNOSIS
  | typeof KINTO
  | typeof KLAYTN_BAOBAB
  | typeof KLAYTN
  | typeof LINEA
  | typeof LYRA
  | typeof MANTLE
  | typeof MODE
  | typeof MODE_SEPOLIA
  | typeof NAUTILUS
  | typeof OP_BNB
  | typeof OPTIMISM
  | typeof OPTIMISM_SEPOLIA
  | typeof PARALLEL_L2_TESTNET
  | typeof POLYGON
  | typeof POLYGON_AMOY
  | typeof RENAISSANCE_TESTNET
  | typeof SCROLL
  | typeof SCROLL_ALPHA
  | typeof SCROLL_SEPOLIA
  | typeof SEPOLIA
  | typeof TAIKO_KATLA
  | typeof XAI
  | typeof XAI_SEPOLIA
  | typeof ZORA
  | typeof ZORA_SEPOLIA;

function endpoint(chain: Chain, apiKey: string): string {
  return `https://api.pimlico.io/v2/${chain}/rpc?apikey=${apiKey}`;
}

export default endpoint;
export type { Chain };
