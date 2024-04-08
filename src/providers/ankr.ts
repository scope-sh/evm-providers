import {
  ETHEREUM,
  SEPOLIA,
  HOLESKY,
  POLYGON,
  POLYGON_AMOY,
  POLYGON_MUMBAI,
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
  ZKSYNC_ERA_GOERLI,
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
  | typeof POLYGON_MUMBAI
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
  | typeof ZKSYNC_ERA_GOERLI
  | typeof BLAST
  | typeof BLAST_SEPOLIA
  | typeof MANTLE
  | typeof MANTLE_SEPOLIA
  | typeof CELO
  | typeof MOONBEAM
  | typeof FLARE
  | typeof TAIKO_KATLA;

function endpoint(chain: Chain): string {
  switch (chain) {
    case ETHEREUM:
      return 'https://rpc.ankr.com/eth';
    case SEPOLIA:
      return 'https://rpc.ankr.com/eth_sepolia';
    case HOLESKY:
      return 'https://rpc.ankr.com/eth_holesky';
    case POLYGON:
      return 'https://rpc.ankr.com/polygon';
    case POLYGON_AMOY:
      return 'https://rpc.ankr.com/polygon_amoy';
    case POLYGON_MUMBAI:
      return 'https://rpc.ankr.com/polygon_mumbai';
    case POLYGON_ZKEVM:
      return 'https://rpc.ankr.com/polygon_zkevm';
    case POLYGON_ZKEVM_TESTNET:
      return 'https://rpc.ankr.com/polygon_zkevm_testnet';
    case POLYGON_ZKEVM_CARDONA:
      return 'https://rpc.ankr.com/polygon_zkevm_cardona';
    case ARBITRUM:
      return 'https://rpc.ankr.com/arbitrum';
    case ARBITRUM_SEPOLIA:
      return 'https://rpc.ankr.com/arbitrum_sepolia';
    case ARBITRUM_NOVA:
      return 'https://rpc.ankr.com/arbitrumnova';
    case OPTIMISM:
      return 'https://rpc.ankr.com/optimism';
    case OPTIMISM_SEPOLIA:
      return 'https://rpc.ankr.com/optimism_sepolia';
    case BASE:
      return 'https://rpc.ankr.com/base';
    case BASE_SEPOLIA:
      return 'https://rpc.ankr.com/base_sepolia';
    case BSC:
      return 'https://rpc.ankr.com/bsc';
    case BSC_TESTNET:
      return 'https://rpc.ankr.com/bsc_testnet_chapel';
    case FANTOM:
      return 'https://rpc.ankr.com/fantom';
    case FANTOM_TESTNET:
      return 'https://rpc.ankr.com/fantom_testnet';
    case AVALANCHE_C:
      return 'https://rpc.ankr.com/avalanche';
    case AVALANCHE_FUJI:
      return 'https://rpc.ankr.com/avalanche_fuji';
    case GNOSIS:
      return 'https://rpc.ankr.com/gnosis';
    case GNOSIS_CHIADO:
      return 'https://rpc.ankr.com/gnosis_testnet';
    case SCROLL:
      return 'https://rpc.ankr.com/scroll';
    case SCROLL_SEPOLIA:
      return 'https://rpc.ankr.com/scroll_sepolia_testnet';
    case ZKSYNC_ERA:
      return 'https://rpc.ankr.com/zksync_era';
    case ZKSYNC_ERA_SEPOLIA:
      return 'https://rpc.ankr.com/zksync_era_sepolia';
    case ZKSYNC_ERA_GOERLI:
      return 'https://rpc.ankr.com/zksync_era_testnet';
    case BLAST:
      return 'https://rpc.ankr.com/blast';
    case BLAST_SEPOLIA:
      return 'https://rpc.ankr.com/blast_testnet_sepolia';
    case MANTLE:
      return 'https://rpc.ankr.com/mantle';
    case MANTLE_SEPOLIA:
      return 'https://rpc.ankr.com/mantle_sepolia';
    case CELO:
      return 'https://rpc.ankr.com/celo';
    case MOONBEAM:
      return 'https://rpc.ankr.com/moonbeam';
    case FLARE:
      return 'https://rpc.ankr.com/flare';
    case TAIKO_KATLA:
      return 'https://rpc.ankr.com/taiko_katla';
  }
}

export default endpoint;
export type { Chain };
