import {
  ETHEREUM,
  SEPOLIA,
  HOLESKY,
  POLYGON,
  POLYGON_AMOY,
  POLYGON_ZKEVM,
  POLYGON_ZKEVM_TESTNET,
  POLYGON_ZKEVM_CARDONA,
  ARBITRUM,
  ARBITRUM_SEPOLIA,
  ARBITRUM_NOVA,
  OPTIMISM,
  OPTIMISM_SEPOLIA,
  BASE,
  BASE_SEPOLIA,
  BSC,
  BSC_TESTNET,
  FANTOM,
  FANTOM_TESTNET,
  AVALANCHE_C,
  AVALANCHE_FUJI,
  GNOSIS,
  GNOSIS_CHIADO,
  SCROLL,
  SCROLL_SEPOLIA,
  ZKSYNC_ERA,
  ZKSYNC_ERA_SEPOLIA,
  BLAST,
  BLAST_SEPOLIA,
  MANTLE,
  MANTLE_SEPOLIA,
  CELO,
  MOONBEAM,
  FLARE,
  TAIKO_KATLA,
} from '../utils/chains.js';

type Chain =
  | typeof ETHEREUM
  | typeof SEPOLIA
  | typeof HOLESKY
  | typeof POLYGON
  | typeof POLYGON_AMOY
  | typeof POLYGON_ZKEVM
  | typeof POLYGON_ZKEVM_TESTNET
  | typeof POLYGON_ZKEVM_CARDONA
  | typeof ARBITRUM
  | typeof ARBITRUM_SEPOLIA
  | typeof ARBITRUM_NOVA
  | typeof OPTIMISM
  | typeof OPTIMISM_SEPOLIA
  | typeof BASE
  | typeof BASE_SEPOLIA
  | typeof BSC
  | typeof BSC_TESTNET
  | typeof FANTOM
  | typeof FANTOM_TESTNET
  | typeof AVALANCHE_C
  | typeof AVALANCHE_FUJI
  | typeof GNOSIS
  | typeof GNOSIS_CHIADO
  | typeof SCROLL
  | typeof SCROLL_SEPOLIA
  | typeof ZKSYNC_ERA
  | typeof ZKSYNC_ERA_SEPOLIA
  | typeof BLAST
  | typeof BLAST_SEPOLIA
  | typeof MANTLE
  | typeof MANTLE_SEPOLIA
  | typeof CELO
  | typeof MOONBEAM
  | typeof FLARE
  | typeof TAIKO_KATLA;

function makeEndpoint(chainStr: string, key?: string): string {
  return key
    ? `https://rpc.ankr.com/${chainStr}/${key}`
    : `https://rpc.ankr.com/${chainStr}`;
}

function endpoint(chain: Chain, key?: string): string {
  switch (chain) {
    case ETHEREUM:
      return makeEndpoint('eth', key);
    case SEPOLIA:
      return makeEndpoint('eth_sepolia', key);
    case HOLESKY:
      return makeEndpoint('eth_holesky', key);
    case POLYGON:
      return makeEndpoint('polygon', key);
    case POLYGON_AMOY:
      return makeEndpoint('polygon_amoy', key);
    case POLYGON_ZKEVM:
      return makeEndpoint('polygon_zkevm', key);
    case POLYGON_ZKEVM_TESTNET:
      return makeEndpoint('polygon_zkevm_testnet', key);
    case POLYGON_ZKEVM_CARDONA:
      return makeEndpoint('polygon_zkevm_cardona', key);
    case ARBITRUM:
      return makeEndpoint('arbitrum', key);
    case ARBITRUM_SEPOLIA:
      return makeEndpoint('arbitrum_sepolia', key);
    case ARBITRUM_NOVA:
      return makeEndpoint('arbitrumnova', key);
    case OPTIMISM:
      return makeEndpoint('optimism', key);
    case OPTIMISM_SEPOLIA:
      return makeEndpoint('optimism_sepolia', key);
    case BASE:
      return makeEndpoint('base', key);
    case BASE_SEPOLIA:
      return makeEndpoint('base_sepolia', key);
    case BSC:
      return makeEndpoint('bsc', key);
    case BSC_TESTNET:
      return makeEndpoint('bsc_testnet_chapel', key);
    case FANTOM:
      return makeEndpoint('fantom', key);
    case FANTOM_TESTNET:
      return makeEndpoint('fantom_testnet', key);
    case AVALANCHE_C:
      return makeEndpoint('avalanche', key);
    case AVALANCHE_FUJI:
      return makeEndpoint('avalanche_fuji', key);
    case GNOSIS:
      return makeEndpoint('gnosis', key);
    case GNOSIS_CHIADO:
      return makeEndpoint('gnosis_testnet', key);
    case SCROLL:
      return makeEndpoint('scroll', key);
    case SCROLL_SEPOLIA:
      return makeEndpoint('scroll_sepolia_testnet', key);
    case ZKSYNC_ERA:
      return makeEndpoint('zksync_era', key);
    case ZKSYNC_ERA_SEPOLIA:
      return makeEndpoint('zksync_era_sepolia', key);
    case BLAST:
      return makeEndpoint('blast', key);
    case BLAST_SEPOLIA:
      return makeEndpoint('blast_testnet_sepolia', key);
    case MANTLE:
      return makeEndpoint('mantle', key);
    case MANTLE_SEPOLIA:
      return makeEndpoint('mantle_sepolia', key);
    case CELO:
      return makeEndpoint('celo', key);
    case MOONBEAM:
      return makeEndpoint('moonbeam', key);
    case FLARE:
      return makeEndpoint('flare', key);
    case TAIKO_KATLA:
      return makeEndpoint('taiko_katla', key);
  }
}

export default endpoint;
export type { Chain };
