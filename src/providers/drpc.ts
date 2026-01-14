import {
  ETHEREUM,
  SEPOLIA,
  HOLESKY,
  BSC,
  BSC_TESTNET,
  POLYGON,
  POLYGON_AMOY,
  ARBITRUM,
  ARBITRUM_SEPOLIA,
  OPTIMISM,
  OPTIMISM_SEPOLIA,
  ZKSYNC_ERA,
  ZKSYNC_ERA_SEPOLIA,
  LINEA,
  LINEA_SEPOLIA,
  BASE,
  BASE_SEPOLIA,
  FANTOM,
  FANTOM_TESTNET,
  AVALANCHE_C,
  AVALANCHE_FUJI,
  GNOSIS,
  GNOSIS_CHIADO,
  SCROLL,
  SCROLL_SEPOLIA,
  MANTLE,
  MANTLE_SEPOLIA,
  ARBITRUM_NOVA,
  AURORA,
  AURORA_TESTNET,
  POLYGON_ZKEVM,
  POLYGON_ZKEVM_CARDONA,
  KLAYTN,
  KLAYTN_BAOBAB,
  BLAST,
  BLAST_SEPOLIA,
  BOBA_BNB,
  BOBA_ETHEREUM,
  CELO,
  CELO_SEPOLIA,
  CORE,
  CORE_TESTNET,
  HARMONY,
  IMMUTABLE_ZKEVM,
  IMMUTABLE_ZKEVM_TESTNET,
  KAVA,
  KAVA_TESTNET,
  MANTA_PACIFIC,
  MANTA_PACIFIC_TESTNET,
  MODE,
  MODE_SEPOLIA,
  MOONBEAM,
  MOONBASE_ALPHA,
  MOONRIVER,
  OP_BNB,
  OP_BNB_TESTNET,
  TAIKO_ALETHIA,
  TAIKO_HOODI,
  ZORA,
  ZORA_SEPOLIA,
  DOMA,
  DOMA_TESTNET,
  WORLDCHAIN,
  WORLDCHAIN_SEPOLIA,
} from '../utils/chains.js';

type Chain =
  | typeof ETHEREUM
  | typeof SEPOLIA
  | typeof HOLESKY
  | typeof BSC
  | typeof BSC_TESTNET
  | typeof POLYGON
  | typeof POLYGON_AMOY
  | typeof ARBITRUM
  | typeof ARBITRUM_SEPOLIA
  | typeof OPTIMISM
  | typeof OPTIMISM_SEPOLIA
  | typeof ZKSYNC_ERA
  | typeof ZKSYNC_ERA_SEPOLIA
  | typeof LINEA
  | typeof LINEA_SEPOLIA
  | typeof BASE
  | typeof BASE_SEPOLIA
  | typeof FANTOM
  | typeof FANTOM_TESTNET
  | typeof AVALANCHE_C
  | typeof AVALANCHE_FUJI
  | typeof GNOSIS
  | typeof GNOSIS_CHIADO
  | typeof SCROLL
  | typeof SCROLL_SEPOLIA
  | typeof MANTLE
  | typeof MANTLE_SEPOLIA
  | typeof ARBITRUM_NOVA
  | typeof AURORA
  | typeof AURORA_TESTNET
  | typeof POLYGON_ZKEVM
  | typeof POLYGON_ZKEVM_CARDONA
  | typeof KLAYTN
  | typeof KLAYTN_BAOBAB
  | typeof BLAST
  | typeof BLAST_SEPOLIA
  | typeof BOBA_BNB
  | typeof BOBA_ETHEREUM
  | typeof CELO
  | typeof CELO_SEPOLIA
  | typeof CORE
  | typeof CORE_TESTNET
  | typeof HARMONY
  | typeof IMMUTABLE_ZKEVM
  | typeof IMMUTABLE_ZKEVM_TESTNET
  | typeof KAVA
  | typeof KAVA_TESTNET
  | typeof MANTA_PACIFIC
  | typeof MANTA_PACIFIC_TESTNET
  | typeof MODE
  | typeof MODE_SEPOLIA
  | typeof MOONBEAM
  | typeof MOONBASE_ALPHA
  | typeof MOONRIVER
  | typeof OP_BNB
  | typeof OP_BNB_TESTNET
  | typeof TAIKO_ALETHIA
  | typeof TAIKO_HOODI
  | typeof ZORA
  | typeof ZORA_SEPOLIA
  | typeof DOMA
  | typeof DOMA_TESTNET
  | typeof WORLDCHAIN
  | typeof WORLDCHAIN_SEPOLIA;

function makeEndpoint(chainStr: string, key?: string): string {
  return key
    ? `https://lb.drpc.live/${chainStr}/${key}`
    : `https://${chainStr}.drpc.org`;
}

function endpoint(chain: Chain, key?: string): string {
  switch (chain) {
    case ETHEREUM:
      return makeEndpoint('eth', key);
    case SEPOLIA:
      return makeEndpoint('sepolia', key);
    case HOLESKY:
      return makeEndpoint('holesky', key);
    case BSC:
      return makeEndpoint('bsc', key);
    case BSC_TESTNET:
      return makeEndpoint('bsc-testnet', key);
    case POLYGON:
      return makeEndpoint('polygon', key);
    case POLYGON_AMOY:
      return makeEndpoint('polygon-amoy', key);
    case ARBITRUM:
      return makeEndpoint('arbitrum', key);
    case ARBITRUM_SEPOLIA:
      return makeEndpoint('arbitrum-sepolia', key);
    case OPTIMISM:
      return makeEndpoint('optimism', key);
    case OPTIMISM_SEPOLIA:
      return makeEndpoint('optimism-sepolia', key);
    case ZKSYNC_ERA:
      return makeEndpoint('zksync', key);
    case ZKSYNC_ERA_SEPOLIA:
      return makeEndpoint('zksync-testnet', key);
    case LINEA:
      return makeEndpoint('linea', key);
    case LINEA_SEPOLIA:
      return makeEndpoint('linea-sepolia', key);
    case BASE:
      return makeEndpoint('base', key);
    case BASE_SEPOLIA:
      return makeEndpoint('base-sepolia', key);
    case FANTOM:
      return makeEndpoint('fantom', key);
    case FANTOM_TESTNET:
      return makeEndpoint('fantom-testnet', key);
    case AVALANCHE_C:
      return makeEndpoint('avalanche', key);
    case AVALANCHE_FUJI:
      return makeEndpoint('avalanche-fuji', key);
    case GNOSIS:
      return makeEndpoint('gnosis', key);
    case GNOSIS_CHIADO:
      return makeEndpoint('gnosis-chiado', key);
    case SCROLL:
      return makeEndpoint('scroll', key);
    case SCROLL_SEPOLIA:
      return makeEndpoint('scroll-sepolia', key);
    case MANTLE:
      return makeEndpoint('mantle', key);
    case MANTLE_SEPOLIA:
      return makeEndpoint('mantle-sepolia', key);
    case ARBITRUM_NOVA:
      return makeEndpoint('arbitrum-nova', key);
    case AURORA:
      return makeEndpoint('aurora', key);
    case AURORA_TESTNET:
      return makeEndpoint('aurora-testnet', key);
    case POLYGON_ZKEVM:
      return makeEndpoint('polygon-zkevm', key);
    case POLYGON_ZKEVM_CARDONA:
      return makeEndpoint('polygon-zkevm-cardona', key);
    case KLAYTN:
      return makeEndpoint('klaytn', key);
    case KLAYTN_BAOBAB:
      return makeEndpoint('klaytn-baobab', key);
    case BLAST:
      return makeEndpoint('blast', key);
    case BLAST_SEPOLIA:
      return makeEndpoint('blast-sepolia', key);
    case BOBA_BNB:
      return makeEndpoint('boba-bnb', key);
    case BOBA_ETHEREUM:
      return makeEndpoint('boba-eth', key);
    case CELO:
      return makeEndpoint('celo', key);
    case CELO_SEPOLIA:
      return makeEndpoint('celo-sepolia', key);
    case CORE:
      return makeEndpoint('core', key);
    case CORE_TESTNET:
      return makeEndpoint('core-testnet', key);
    case HARMONY:
      return makeEndpoint('harmony-0', key);
    case IMMUTABLE_ZKEVM:
      return makeEndpoint('immutable-zkevm', key);
    case IMMUTABLE_ZKEVM_TESTNET:
      return makeEndpoint('immutable-zkevm-testnet', key);
    case KAVA:
      return makeEndpoint('kava', key);
    case KAVA_TESTNET:
      return makeEndpoint('kava-testnet', key);
    case MANTA_PACIFIC:
      return makeEndpoint('manta-pacific', key);
    case MANTA_PACIFIC_TESTNET:
      return makeEndpoint('manta-pacific-testnet', key);
    case MODE:
      return makeEndpoint('mode', key);
    case MODE_SEPOLIA:
      return makeEndpoint('mode-testnet', key);
    case MOONBEAM:
      return makeEndpoint('moonbeam', key);
    case MOONBASE_ALPHA:
      return makeEndpoint('moonbase-alpha', key);
    case MOONRIVER:
      return makeEndpoint('moonriver', key);
    case OP_BNB:
      return makeEndpoint('opbnb', key);
    case OP_BNB_TESTNET:
      return makeEndpoint('opbnb-testnet', key);
    case TAIKO_ALETHIA:
      return makeEndpoint('taiko', key);
    case TAIKO_HOODI:
      return makeEndpoint('taiko-hoodi', key);
    case ZORA:
      return makeEndpoint('zora', key);
    case ZORA_SEPOLIA:
      return makeEndpoint('zora-sepolia', key);
    case DOMA:
      return makeEndpoint('doma', key);
    case DOMA_TESTNET:
      return makeEndpoint('doma-testnet', key);
    case WORLDCHAIN:
      return makeEndpoint('worldchain', key);
    case WORLDCHAIN_SEPOLIA:
      return makeEndpoint('worldchain-sepolia', key);
  }
}

export default endpoint;
export type { Chain };
