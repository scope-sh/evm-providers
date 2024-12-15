import {
  ETHEREUM,
  SEPOLIA,
  HOLESKY,
  BSC,
  BSC_TESTNET,
  POLYGON,
  POLYGON_AMOY,
  BASE,
  BASE_SEPOLIA,
  AVALANCHE_C,
  AVALANCHE_FUJI,
  ARBITRUM,
  ARBITRUM_NOVA,
  ARBITRUM_SEPOLIA,
  OPTIMISM,
  OPTIMISM_SEPOLIA,
  CRONOS,
  KAVA,
  FANTOM,
  FANTOM_TESTNET,
  OP_BNB,
  OP_BNB_TESTNET,
  GNOSIS,
  GNOSIS_CHIADO,
  MANTLE,
  MOONBEAM,
  MOONRIVER,
} from '../utils/chains.js';

type Chain =
  | typeof ETHEREUM
  | typeof SEPOLIA
  | typeof HOLESKY
  | typeof BSC
  | typeof BSC_TESTNET
  | typeof POLYGON
  | typeof POLYGON_AMOY
  | typeof BASE
  | typeof BASE_SEPOLIA
  | typeof AVALANCHE_C
  | typeof AVALANCHE_FUJI
  | typeof ARBITRUM
  | typeof ARBITRUM_NOVA
  | typeof ARBITRUM_SEPOLIA
  | typeof OPTIMISM
  | typeof OPTIMISM_SEPOLIA
  | typeof CRONOS
  | typeof KAVA
  | typeof FANTOM
  | typeof FANTOM_TESTNET
  | typeof OP_BNB
  | typeof OP_BNB_TESTNET
  | typeof GNOSIS
  | typeof GNOSIS_CHIADO
  | typeof MANTLE
  | typeof MOONBEAM
  | typeof MOONRIVER;

function endpoint(chain: Chain): string {
  switch (chain) {
    case ETHEREUM:
      return 'https://ethereum-rpc.publicnode.com';
    case SEPOLIA:
      return 'https://ethereum-sepolia-rpc.publicnode.com';
    case HOLESKY:
      return 'https://ethereum-holesky-rpc.publicnode.com';
    case BSC:
      return 'https://bsc-rpc.publicnode.com';
    case BSC_TESTNET:
      return 'https://bsc-testnet-rpc.publicnode.com';
    case POLYGON:
      return 'https://polygon-bor-rpc.publicnode.com';
    case POLYGON_AMOY:
      return 'https://polygon-amoy-bor-rpc.publicnode.com';
    case BASE:
      return 'https://base-rpc.publicnode.com';
    case BASE_SEPOLIA:
      return 'https://base-sepolia-rpc.publicnode.com';
    case AVALANCHE_C:
      return 'https://avalanche-c-chain-rpc.publicnode.com';
    case AVALANCHE_FUJI:
      return 'https://avalanche-fuji-c-chain-rpc.publicnode.com';
    case ARBITRUM:
      return 'https://arbitrum-one-rpc.publicnode.com';
    case ARBITRUM_NOVA:
      return 'https://arbitrum-nova-rpc.publicnode.com';
    case ARBITRUM_SEPOLIA:
      return 'https://arbitrum-sepolia-rpc.publicnode.com';
    case OPTIMISM:
      return 'https://optimism-rpc.publicnode.com';
    case OPTIMISM_SEPOLIA:
      return 'https://optimism-sepolia-rpc.publicnode.com';
    case CRONOS:
      return 'https://cronos-evm-rpc.publicnode.com';
    case KAVA:
      return 'https://kava-evm-rpc.publicnode.com';
    case FANTOM:
      return 'https://fantom-rpc.publicnode.com';
    case FANTOM_TESTNET:
      return 'https://fantom-testnet-rpc.publicnode.com';
    case OP_BNB:
      return 'https://opbnb-rpc.publicnode.com';
    case OP_BNB_TESTNET:
      return 'https://opbnb-testnet-rpc.publicnode.com';
    case GNOSIS:
      return 'https://gnosis-rpc.publicnode.com';
    case GNOSIS_CHIADO:
      return 'https://gnosis-chiado-rpc.publicnode.com';
    case MANTLE:
      return 'https://mantle-rpc.publicnode.com';
    case MOONBEAM:
      return 'https://moonbeam-rpc.publicnode.com';
    case MOONRIVER:
      return 'https://moonriver-rpc.publicnode.com';
  }
}

export default endpoint;
export type { Chain };
