const ETHEREUM = 1;
const GOERLI = 5;
const SEPOLIA = 11155111;
const HOLESKY = 17000;
const ARBITRUM = 42161;
const ARBITRUM_NOVA = 42170;
const ARBITRUM_SEPOLIA = 421614;
const OPTIMISM = 10;
const OPTIMISM_SEPOLIA = 11155420;
const BASE = 8453;
const BASE_SEPOLIA = 84532;
const POLYGON = 137;
const POLYGON_MUMBAI = 80001;
const POLYGON_AMOY = 80002;
const POLYGON_ZKEVM = 1101;
const POLYGON_ZKEVM_TESTNET = 1442;
const AVALANCHE_C = 43114;
const AVALANCHE_FUJI = 43113;
const GNOSIS = 100;
const GNOSIS_CHIADO = 10200;
const SCROLL = 534352;
const SCROLL_SEPOLIA = 534351;
const ZKSYNC_ERA = 324;
const ZKSYNC_ERA_SEPOLIA = 300;
const ZKSYNC_ERA_GOERLI = 280;
const CELO = 42220;
const CELO_ALFAJORES = 44787;
// const ZORA = 7777777;
// const ZORA_SEPOLIA = 999999999;
const LINEA = 59144;
const LINEA_GOERLI = 59140;
const BLAST = 81457;
const BLAST_SEPOLIA = 168587773;
const MANTLE = 5000;
const MANTLE_SEPOLIA = 5003;
const BSC = 56;
const BSC_TESTNET = 97;
const FANTOM = 250;
const FANTOM_TESTNET = 4002;
const MOONBEAM = 1284;
const FLARE = 14;
const TAIKO_KATLA = 167008;
const PALM = 11297108109;
const PALM_TESTNET = 11297108099;
const ASTAR = 592;

type AlchemyChain =
  | typeof ETHEREUM
  | typeof SEPOLIA
  | typeof POLYGON
  | typeof POLYGON_MUMBAI
  | typeof POLYGON_AMOY
  | typeof ARBITRUM
  | typeof ARBITRUM_SEPOLIA
  | typeof OPTIMISM
  | typeof OPTIMISM_SEPOLIA
  | typeof POLYGON_ZKEVM
  | typeof POLYGON_ZKEVM_TESTNET
  | typeof BASE
  | typeof BASE_SEPOLIA
  | typeof ASTAR;

type InfuraChain =
  | typeof ETHEREUM
  | typeof GOERLI
  | typeof SEPOLIA
  | typeof LINEA
  | typeof LINEA_GOERLI
  | typeof POLYGON
  | typeof POLYGON_MUMBAI
  | typeof POLYGON_AMOY
  | typeof BLAST
  | typeof BLAST_SEPOLIA
  | typeof OPTIMISM
  | typeof OPTIMISM_SEPOLIA
  | typeof ARBITRUM
  | typeof ARBITRUM_SEPOLIA
  | typeof PALM
  | typeof PALM_TESTNET
  | typeof AVALANCHE_C
  | typeof AVALANCHE_FUJI
  | typeof CELO
  | typeof CELO_ALFAJORES;

type AnkrChain =
  | typeof ETHEREUM
  | typeof SEPOLIA
  | typeof HOLESKY
  | typeof POLYGON
  | typeof POLYGON_AMOY
  | typeof POLYGON_MUMBAI
  | typeof POLYGON_ZKEVM
  | typeof POLYGON_ZKEVM_TESTNET
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

function alchemy(chain: AlchemyChain, key: string): string {
  switch (chain) {
    case ETHEREUM:
      return `https://eth-mainnet.g.alchemy.com/v2/${key}`;
    case SEPOLIA:
      return `https://eth-sepolia.g.alchemy.com/v2/${key}`;
    case POLYGON:
      return `https://polygon-mainnet.g.alchemy.com/v2/${key}`;
    case POLYGON_MUMBAI:
      return `https://polygon-mumbai.g.alchemy.com/v2/${key}`;
    case POLYGON_AMOY:
      return `https://polygon-amoy.g.alchemy.com/v2/${key}`;
    case ARBITRUM:
      return `https://arb-mainnet.g.alchemy.com/v2/${key}`;
    case ARBITRUM_SEPOLIA:
      return `https://arb-sepolia.g.alchemy.com/v2/${key}`;
    case OPTIMISM:
      return `https://opt-mainnet.g.alchemy.com/v2/${key}`;
    case OPTIMISM_SEPOLIA:
      return `https://opt-sepolia.g.alchemy.com/v2/${key}`;
    case POLYGON_ZKEVM:
      return `https://polygonzkevm-mainnet.g.alchemy.com/v2/${key}`;
    case POLYGON_ZKEVM_TESTNET:
      return `https://polygonzkevm-testnet.g.alchemy.com/v2/${key}`;
    case BASE:
      return `https://base-mainnet.g.alchemy.com/v2/${key}`;
    case BASE_SEPOLIA:
      return `https://base-sepolia.g.alchemy.com/v2/${key}`;
    case ASTAR:
      return `https://astar-mainnet.g.alchemy.com/v2/${key}`;
  }
}

function infura(chain: InfuraChain, key: string): string {
  switch (chain) {
    case ETHEREUM:
      return `https://mainnet.infura.io/v3/${key}`;
    case GOERLI:
      return `https://goerli.infura.io/v3/${key}`;
    case SEPOLIA:
      return `https://sepolia.infura.io/v3/${key}`;
    case LINEA:
      return `https://linea-mainnet.infura.io/v3/${key}`;
    case LINEA_GOERLI:
      return `https://linea-goerli.infura.io/v3/${key}`;
    case POLYGON:
      return `https://polygon-mainnet.infura.io/v3/${key}`;
    case POLYGON_MUMBAI:
      return `https://polygon-mumbai.infura.io/v3/${key}`;
    case POLYGON_AMOY:
      return `https://polygon-amoy.infura.io/v3/${key}`;
    case BLAST:
      return `https://blast-mainnet.infura.io/v3/${key}`;
    case BLAST_SEPOLIA:
      return `https://blast-sepolia.infura.io/v3/${key}`;
    case OPTIMISM:
      return `https://optimism-mainnet.infura.io/v3/${key}`;
    case OPTIMISM_SEPOLIA:
      return `https://optimism-sepolia.infura.io/v3/${key}`;
    case ARBITRUM:
      return `https://arbitrum-mainnet.infura.io/v3/${key}`;
    case ARBITRUM_SEPOLIA:
      return `https://arbitrum-sepolia.infura.io/v3/${key}`;
    case PALM:
      return `https://palm-mainnet.infura.io/v3/${key}`;
    case PALM_TESTNET:
      return `https://palm-testnet.infura.io/v3/${key}`;
    case AVALANCHE_C:
      return `https://avalanche-mainnet.infura.io/v3/${key}`;
    case AVALANCHE_FUJI:
      return `https://avalanche-fuji.infura.io/v3/${key}`;
    case CELO:
      return `https://celo-mainnet.infura.io/v3/${key}`;
    case CELO_ALFAJORES:
      return `https://celo-alfajores.infura.io/v3/${key}`;
  }
}

function ankr(chain: AnkrChain): string {
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

export { ankr, alchemy, infura };
