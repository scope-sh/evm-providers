import {
  ETHEREUM,
  HOLESKY,
  SEPOLIA,
  BSC,
  POLYGON,
  POLYGON_ZKEVM,
  AVALANCHE_C,
  ARBITRUM,
  MOONBEAM,
  ASTAR,
  OPTIMISM,
  ZKSYNC_ERA,
  FANTOM,
  CELO,
  KLAYTN,
  ALT_LAYER,
  AURORA,
  BASE,
  HARMONY,
  LINEA,
  SCROLL,
  GNOSIS,
  MANTLE,
  CRONOS,
  OP_BNB,
  MANTA,
  CORE,
  TELOS,
  BOBA_ETHEREUM,
  MODE,
  KROMA,
  HORIZEN_EON,
} from '../utils/chains.js';

type OneRpcChain =
  | typeof ETHEREUM
  | typeof HOLESKY
  | typeof SEPOLIA
  | typeof BSC
  | typeof POLYGON
  | typeof POLYGON_ZKEVM
  | typeof AVALANCHE_C
  | typeof ARBITRUM
  | typeof MOONBEAM
  | typeof ASTAR
  | typeof OPTIMISM
  | typeof ZKSYNC_ERA
  | typeof FANTOM
  | typeof CELO
  | typeof KLAYTN
  | typeof ALT_LAYER
  | typeof AURORA
  | typeof BASE
  | typeof HARMONY
  | typeof LINEA
  | typeof SCROLL
  | typeof GNOSIS
  | typeof MANTLE
  | typeof CRONOS
  | typeof OP_BNB
  | typeof MANTA
  | typeof CORE
  | typeof TELOS
  | typeof BOBA_ETHEREUM
  | typeof MODE
  | typeof KROMA
  | typeof HORIZEN_EON;

function endpoint(chain: OneRpcChain): string {
  switch (chain) {
    case ETHEREUM:
      return 'https://1rpc.io/eth';
    case HOLESKY:
      return 'https://1rpc.io/holesky';
    case SEPOLIA:
      return 'https://1rpc.io/sepolia';
    case BSC:
      return 'https://1rpc.io/bnb';
    case POLYGON:
      return 'https://1rpc.io/matic';
    case POLYGON_ZKEVM:
      return 'https://1rpc.io/polygon/zkevm';
    case AVALANCHE_C:
      return 'https://1rpc.io/avax/c';
    case ARBITRUM:
      return 'https://1rpc.io/arb';
    case MOONBEAM:
      return 'https://1rpc.io/glmr';
    case ASTAR:
      return 'https://1rpc.io/astr';
    case OPTIMISM:
      return 'https://1rpc.io/op';
    case ZKSYNC_ERA:
      return 'https://1rpc.io/zksync2-era';
    case FANTOM:
      return 'https://1rpc.io/ftm';
    case CELO:
      return 'https://1rpc.io/celo';
    case KLAYTN:
      return 'https://1rpc.io/klay';
    case ALT_LAYER:
      return 'https://1rpc.io/alt-testnet';
    case AURORA:
      return 'https://1rpc.io/aurora';
    case BASE:
      return 'https://1rpc.io/base';
    case HARMONY:
      return 'https://1rpc.io/one';
    case LINEA:
      return 'https://1rpc.io/linea';
    case SCROLL:
      return 'https://1rpc.io/scroll';
    case GNOSIS:
      return 'https://1rpc.io/gnosis';
    case MANTLE:
      return 'https://1rpc.io/mantle';
    case CRONOS:
      return 'https://1rpc.io/cro';
    case OP_BNB:
      return 'https://1rpc.io/opbnb';
    case MANTA:
      return 'https://1rpc.io/manta';
    case CORE:
      return 'https://1rpc.io/core';
    case TELOS:
      return 'https://1rpc.io/telos/evm';
    case BOBA_ETHEREUM:
      return 'https://1rpc.io/boba/eth';
    case MODE:
      return 'https://1rpc.io/mode';
    case KROMA:
      return 'https://1rpc.io/kroma';
    case HORIZEN_EON:
      return 'https://1rpc.io/horizen-eon';
  }
}

export default endpoint;
