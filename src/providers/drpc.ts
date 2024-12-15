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
  MANTLE_GOERLI,
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
  CELO_ALFAJORES,
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
  TAIKO_KATLA,
  ZORA,
  ZORA_SEPOLIA,
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
  | typeof MANTLE_GOERLI
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
  | typeof CELO_ALFAJORES
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
  | typeof TAIKO_KATLA
  | typeof ZORA
  | typeof ZORA_SEPOLIA;

function endpoint(chain: Chain): string {
  switch (chain) {
    case ETHEREUM:
      return 'https://eth.drpc.org';
    case SEPOLIA:
      return 'https://sepolia.drpc.org';
    case HOLESKY:
      return 'https://holesky.drpc.org';
    case BSC:
      return 'https://bsc.drpc.org';
    case BSC_TESTNET:
      return 'https://bsc-testnet.drpc.org';
    case POLYGON:
      return 'https://polygon.drpc.org';
    case POLYGON_AMOY:
      return 'https://polygon-amoy.drpc.org';
    case ARBITRUM:
      return 'https://arbitrum.drpc.org';
    case ARBITRUM_SEPOLIA:
      return 'https://arbitrum-sepolia.drpc.org';
    case OPTIMISM:
      return 'https://optimism.drpc.org';
    case OPTIMISM_SEPOLIA:
      return 'https://optimism-sepolia.drpc.org';
    case ZKSYNC_ERA:
      return 'https://zksync.drpc.org';
    case ZKSYNC_ERA_SEPOLIA:
      return 'https://zksync-testnet.drpc.org';
    case LINEA:
      return 'https://linea.drpc.org';
    case BASE:
      return 'https://base.drpc.org';
    case BASE_SEPOLIA:
      return 'https://base-sepolia.drpc.org';
    case FANTOM:
      return 'https://fantom.drpc.org';
    case FANTOM_TESTNET:
      return 'https://fantom-testnet.drpc.org';
    case AVALANCHE_C:
      return 'https://avalanche.drpc.org';
    case AVALANCHE_FUJI:
      return 'https://avalanche-fuji.drpc.org';
    case GNOSIS:
      return 'https://gnosis.drpc.org';
    case GNOSIS_CHIADO:
      return 'https://gnosis-chiado.drpc.org';
    case SCROLL:
      return 'https://scroll.drpc.org';
    case SCROLL_SEPOLIA:
      return 'https://scroll-sepolia.drpc.org';
    case MANTLE:
      return 'https://mantle.drpc.org';
    case MANTLE_SEPOLIA:
      return 'https://mantle-sepolia.drpc.org';
    case MANTLE_GOERLI:
      return 'https://mantle-testnet.drpc.org';
    case ARBITRUM_NOVA:
      return 'https://arbitrum-nova.drpc.org';
    case AURORA:
      return 'https://aurora.drpc.org';
    case AURORA_TESTNET:
      return 'https://aurora-testnet.drpc.org';
    case POLYGON_ZKEVM:
      return 'https://polygon-zkevm.drpc.org';
    case POLYGON_ZKEVM_CARDONA:
      return 'https://polygon-zkevm-cardona.drpc.org';
    case KLAYTN:
      return 'https://klaytn.drpc.org';
    case KLAYTN_BAOBAB:
      return 'https://klaytn-baobab.drpc.org';
    case BLAST:
      return 'https://blast.drpc.org';
    case BLAST_SEPOLIA:
      return 'https://blast-sepolia.drpc.org';
    case BOBA_BNB:
      return 'https://boba-bnb.drpc.org';
    case BOBA_ETHEREUM:
      return 'https://boba-eth.drpc.org';
    case CELO:
      return 'https://celo.drpc.org';
    case CELO_ALFAJORES:
      return 'https://celo-alfajores.drpc.org';
    case CORE:
      return 'https://core.drpc.org';
    case CORE_TESTNET:
      return 'https://core-testnet.drpc.org';
    case HARMONY:
      return 'https://harmony-0.drpc.org';
    case IMMUTABLE_ZKEVM:
      return 'https://immutable-zkevm.drpc.org';
    case IMMUTABLE_ZKEVM_TESTNET:
      return 'https://immutable-zkevm-testnet.drpc.org';
    case KAVA:
      return 'https://kava.drpc.org';
    case KAVA_TESTNET:
      return 'https://kava-testnet.drpc.org';
    case MANTA_PACIFIC:
      return 'https://manta-pacific.drpc.org';
    case MANTA_PACIFIC_TESTNET:
      return 'https://manta-pacific-testnet.drpc.org';
    case MODE:
      return 'https://mode.drpc.org';
    case MODE_SEPOLIA:
      return 'https://mode-testnet.drpc.org';
    case MOONBEAM:
      return 'https://moonbeam.drpc.org';
    case MOONBASE_ALPHA:
      return 'https://moonbase-alpha.drpc.org';
    case MOONRIVER:
      return 'https://moonriver.drpc.org';
    case OP_BNB:
      return 'https://opbnb.drpc.org';
    case OP_BNB_TESTNET:
      return 'https://opbnb-testnet.drpc.org';
    case TAIKO_KATLA:
      return 'https://taiko-katla.drpc.org';
    case ZORA:
      return 'https://zora.drpc.org';
    case ZORA_SEPOLIA:
      return 'https://zora-sepolia.drpc.org';
  }
}

export default endpoint;
export type { Chain };
