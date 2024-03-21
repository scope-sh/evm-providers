const ETHEREUM = 1;
const GOERLI = 5;
const SEPOLIA = 11155111;
const HOLESKY = 17000;
const ARBITRUM = 42161;
const ARBITRUM_NOVA = 42170;
const ARBITRUM_GOERLI = 421613;
const ARBITRUM_SEPOLIA = 421614;
const OPTIMISM = 10;
const OPTIMISM_GOERLI = 420;
const OPTIMISM_SEPOLIA = 11155420;
const BASE = 8453;
const BASE_GOERLI = 84531;
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
const LINEA = 59144;
const LINEA_GOERLI = 59140;
const BLAST = 81457;
const BLAST_SEPOLIA = 168587773;
const MANTLE = 5000;
const MANTLE_GOERLI = 5001;
const MANTLE_SEPOLIA = 5003;
const MODE = 34443;
const MODE_SEPOLIA = 919;
const BSC = 56;
const BSC_TESTNET = 97;
const FANTOM = 250;
const FANTOM_TESTNET = 4002;
const MOONBASE_ALPHA = 1287;
const MOONBEAM = 1284;
const MOONRIVER = 1285;
const FLARE = 14;
const KAVA = 2222;
const TAIKO_KATLA = 167008;
const PALM = 11297108109;
const PALM_TESTNET = 11297108099;
const IMMUTABLE_ZKEVM = 13371;
const IMMUTABLE_ZKEVM_TESTNET = 13473;
const BOBA_ETHEREUM = 288;
const BOBA_GOERLI = 2888;
const BOBA_BNB = 56288;
const BOBA_BNB_TESTNET = 9728;
const ASTAR = 592;
const KLAYTN = 8217;
const ALT_LAYER = 4000003;
const AURORA = 1313161554;
const HARMONY = 1666600000;
const CRONOS = 25;
const OP_BNB = 204;
const OP_BNB_TESTNET = 5611;
const MANTA = 169;
const CORE = 1116;
const TELOS = 40;
const HORIZEN_EON = 7332;
const KROMA = 255;

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

type QuickNodeChain =
  | typeof ARBITRUM
  | typeof ARBITRUM_GOERLI
  | typeof ARBITRUM_SEPOLIA
  | typeof ARBITRUM_NOVA
  | typeof AVALANCHE_C
  | typeof AVALANCHE_FUJI
  | typeof BASE
  | typeof BASE_GOERLI
  | typeof BASE_SEPOLIA
  | typeof BLAST
  | typeof BLAST_SEPOLIA
  | typeof BSC
  | typeof BSC_TESTNET
  | typeof CELO
  | typeof ETHEREUM
  | typeof SEPOLIA
  | typeof GOERLI
  | typeof HOLESKY
  | typeof FANTOM
  | typeof GNOSIS
  | typeof IMMUTABLE_ZKEVM
  | typeof IMMUTABLE_ZKEVM_TESTNET
  | typeof OPTIMISM
  | typeof OPTIMISM_GOERLI
  | typeof OPTIMISM_SEPOLIA
  | typeof POLYGON
  | typeof POLYGON_AMOY
  | typeof POLYGON_MUMBAI
  | typeof POLYGON_ZKEVM
  | typeof POLYGON_ZKEVM_TESTNET
  | typeof SCROLL
  | typeof SCROLL_SEPOLIA
  | typeof ZKSYNC_ERA
  | typeof ZKSYNC_ERA_SEPOLIA;

type CloudflareChain = typeof ETHEREUM;

type LlamaNodesChain =
  | typeof ARBITRUM
  | typeof BASE
  | typeof BSC
  | typeof ETHEREUM
  | typeof OPTIMISM
  | typeof POLYGON;

type BlastChain =
  | typeof ARBITRUM
  | typeof ARBITRUM_GOERLI
  | typeof ARBITRUM_SEPOLIA
  | typeof ARBITRUM_NOVA
  | typeof ASTAR
  | typeof AVALANCHE_C
  | typeof AVALANCHE_FUJI
  | typeof BASE
  | typeof BASE_GOERLI
  | typeof BASE_SEPOLIA
  | typeof BLAST
  | typeof BLAST_SEPOLIA
  | typeof BSC
  | typeof BSC_TESTNET
  | typeof ETHEREUM
  | typeof SEPOLIA
  | typeof GOERLI
  | typeof HOLESKY
  | typeof FANTOM
  | typeof FANTOM_TESTNET
  | typeof GNOSIS
  | typeof GNOSIS_CHIADO
  | typeof LINEA
  | typeof LINEA_GOERLI
  | typeof MANTLE
  | typeof MANTLE_GOERLI
  | typeof MANTLE_SEPOLIA
  | typeof MODE
  | typeof MODE_SEPOLIA
  | typeof MOONBASE_ALPHA
  | typeof MOONBEAM
  | typeof MOONRIVER
  | typeof OPTIMISM
  | typeof OPTIMISM_GOERLI
  | typeof OPTIMISM_SEPOLIA
  | typeof PALM
  | typeof PALM_TESTNET
  | typeof POLYGON
  | typeof POLYGON_MUMBAI
  | typeof POLYGON_ZKEVM
  | typeof POLYGON_ZKEVM_TESTNET
  | typeof SCROLL
  | typeof SCROLL_SEPOLIA
  | typeof ZKSYNC_ERA
  | typeof ZKSYNC_ERA_SEPOLIA;

type TenderlyChain =
  | typeof ETHEREUM
  | typeof SEPOLIA
  | typeof GOERLI
  | typeof HOLESKY
  | typeof POLYGON
  | typeof POLYGON_MUMBAI
  | typeof OPTIMISM
  | typeof OPTIMISM_GOERLI
  | typeof OPTIMISM_SEPOLIA
  | typeof ARBITRUM
  | typeof ARBITRUM_NOVA
  | typeof ARBITRUM_SEPOLIA
  | typeof BASE
  | typeof BASE_SEPOLIA
  | typeof BOBA_ETHEREUM
  | typeof BOBA_GOERLI
  | typeof BOBA_BNB
  | typeof BOBA_BNB_TESTNET;

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

type ChainstackChain =
  | typeof ETHEREUM
  | typeof HOLESKY
  | typeof SEPOLIA
  | typeof POLYGON
  | typeof POLYGON_MUMBAI;

type PublicNodeChain =
  | typeof ETHEREUM
  | typeof SEPOLIA
  | typeof HOLESKY
  | typeof BSC
  | typeof BSC_TESTNET
  | typeof POLYGON
  | typeof POLYGON_MUMBAI
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
  | typeof MOONBEAM;

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

function quicknode(
  chain: QuickNodeChain,
  appName: string,
  appKey: string,
): string {
  switch (chain) {
    case ARBITRUM:
      return `https://${appName}.arbitrum-mainnet.quiknode.pro/${appKey}`;
    case ARBITRUM_GOERLI:
      return `https://${appName}.arbitrum-goerli.quiknode.pro/${appKey}`;
    case ARBITRUM_SEPOLIA:
      return `https://${appName}.arbitrum-sepolia.quiknode.pro/${appKey}`;
    case ARBITRUM_NOVA:
      return `https://${appName}.arbitrum-nova.quiknode.pro/${appKey}`;
    case AVALANCHE_C:
      return `https://${appName}.avalanche-mainnet.quiknode.pro/${appKey}`;
    case AVALANCHE_FUJI:
      return `https://${appName}.avalanche-testnet.quiknode.pro/${appKey}`;
    case BASE:
      return `https://${appName}.base-mainnet.quiknode.pro/${appKey}`;
    case BASE_GOERLI:
      return `https://${appName}.base-goerli.quiknode.pro/${appKey}`;
    case BASE_SEPOLIA:
      return `https://${appName}.base-sepolia.quiknode.pro/${appKey}`;
    case BLAST:
      return `https://${appName}.blast-mainnet.quiknode.pro/${appKey}`;
    case BLAST_SEPOLIA:
      return `https://${appName}.blast-sepolia.quiknode.pro/${appKey}`;
    case BSC:
      return `https://${appName}.bsc.quiknode.pro/${appKey}`;
    case BSC_TESTNET:
      return `https://${appName}.bsc-testnet.quiknode.pro/${appKey}`;
    case CELO:
      return `https://${appName}.celo-mainnet.quiknode.pro/${appKey}`;
    case ETHEREUM:
      return `https://${appName}.quiknode.pro/${appKey}`;
    case SEPOLIA:
      return `https://${appName}.ethereum-sepolia.quiknode.pro/${appKey}`;
    case GOERLI:
      return `https://${appName}.ethereum-goerli.quiknode.pro/${appKey}`;
    case HOLESKY:
      return `https://${appName}.ethereum-holesky.quiknode.pro/${appKey}`;
    case FANTOM:
      return `https://${appName}.fantom.quiknode.pro/${appKey}`;
    case GNOSIS:
      return `https://${appName}.gnosis.quiknode.pro/${appKey}`;
    case IMMUTABLE_ZKEVM:
      return `https://${appName}.imx-mainnet.quiknode.pro/${appKey}`;
    case IMMUTABLE_ZKEVM_TESTNET:
      return `https://${appName}.imx-testnet.quiknode.pro/${appKey}`;
    case OPTIMISM:
      return `https://${appName}.optimism.quiknode.pro/${appKey}`;
    case OPTIMISM_GOERLI:
      return `https://${appName}.optimism-goerli.quiknode.pro/${appKey}`;
    case OPTIMISM_SEPOLIA:
      return `https://${appName}.optimism-sepolia.quiknode.pro/${appKey}`;
    case POLYGON:
      return `https://${appName}.polygon.quiknode.pro/${appKey}`;
    case POLYGON_AMOY:
      return `https://${appName}.matic-amoy.quiknode.pro/${appKey}`;
    case POLYGON_MUMBAI:
      return `https://${appName}.matic-testnet.quiknode.pro/${appKey}`;
    case POLYGON_ZKEVM:
      return `https://${appName}.zkevm-mainnet.quiknode.pro/${appKey}`;
    case POLYGON_ZKEVM_TESTNET:
      return `https://${appName}.zkevm-testnet.quiknode.pro/${appKey}`;
    case SCROLL:
      return `https://${appName}.scroll-mainnet.quiknode.pro/${appKey}`;
    case SCROLL_SEPOLIA:
      return `https://${appName}.scroll-testnet.quiknode.pro/${appKey}`;
    case ZKSYNC_ERA:
      return `https://${appName}.zksync-mainnet.quiknode.pro/${appKey}`;
    case ZKSYNC_ERA_SEPOLIA:
      return `https://${appName}.zksync-era-sepolia.quiknode.pro/${appKey}`;
  }
}

function cloudflare(chain: CloudflareChain): string {
  switch (chain) {
    case ETHEREUM:
      return 'https://cloudflare-eth.com';
  }
}

function llamaNodes(chain: LlamaNodesChain, projectId: string): string {
  switch (chain) {
    case ARBITRUM:
      return `https://arbitrum.llamarpc.com/${projectId}`;
    case BASE:
      return `https://base.llamarpc.com/${projectId}`;
    case BSC:
      return `https://binance.llamarpc.com/${projectId}`;
    case ETHEREUM:
      return `https://eth.llamarpc.com/${projectId}`;
    case OPTIMISM:
      return `https://optimism.llamarpc.com/${projectId}`;
    case POLYGON:
      return `https://polygon.llamarpc.com/${projectId}`;
  }
}

function blast(chain: BlastChain, projectId: string): string {
  switch (chain) {
    case ARBITRUM:
      return `https://arbitrum-one.blastapi.io/${projectId}`;
    case ARBITRUM_GOERLI:
      return `https://arbitrum-goerli.blastapi.io/${projectId}`;
    case ARBITRUM_SEPOLIA:
      return `https://arbitrum-sepolia.blastapi.io/${projectId}`;
    case ARBITRUM_NOVA:
      return `https://arbitrum-nova.blastapi.io/${projectId}`;
    case ASTAR:
      return `https://astar.blastapi.io/${projectId}`;
    case AVALANCHE_C:
      return `https://ava-mainnet.blastapi.io/${projectId}/ext/bc/C/rpc`;
    case AVALANCHE_FUJI:
      return `https://ava-testnet.blastapi.io/${projectId}/ext/bc/C/rpc`;
    case BASE:
      return `https://base-mainnet.blastapi.io/${projectId}`;
    case BASE_GOERLI:
      return `https://base-goerli.blastapi.io/${projectId}`;
    case BASE_SEPOLIA:
      return `https://base-sepolia.blastapi.io/${projectId}`;
    case BLAST:
      return `https://blastl2-mainnet.blastapi.io/${projectId}`;
    case BLAST_SEPOLIA:
      return `https://blastl2-sepolia.blastapi.io/${projectId}`;
    case BSC:
      return `https://bsc-mainnet.blastapi.io/${projectId}`;
    case BSC_TESTNET:
      return `https://bsc-testnet.blastapi.io/${projectId}`;
    case ETHEREUM:
      return `https://eth-mainnet.blastapi.io/${projectId}`;
    case SEPOLIA:
      return `https://eth-sepolia.blastapi.io/${projectId}`;
    case GOERLI:
      return `https://eth-goerli.blastapi.io/${projectId}`;
    case HOLESKY:
      return `https://eth-holesky.blastapi.io/${projectId}`;
    case FANTOM:
      return `https://fantom-mainnet.blastapi.io/${projectId}`;
    case FANTOM_TESTNET:
      return `https://fantom-testnet.blastapi.io/${projectId}`;
    case GNOSIS:
      return `https://gnosis-mainnet.blastapi.io/${projectId}`;
    case GNOSIS_CHIADO:
      return `https://gnosis-chiado.blastapi.io/${projectId}`;
    case LINEA:
      return `https://linea-mainnet.blastapi.io/${projectId}`;
    case LINEA_GOERLI:
      return `https://linea-goerli.blastapi.io/${projectId}`;
    case MANTLE:
      return `https://mantle-mainnet.blastapi.io/${projectId}`;
    case MANTLE_GOERLI:
      return `https://mantle-goerli.blastapi.io/${projectId}`;
    case MANTLE_SEPOLIA:
      return `https://mantle-sepolia.blastapi.io/${projectId}`;
    case MODE:
      return `https://mode-mainnet.blastapi.io/${projectId}`;
    case MODE_SEPOLIA:
      return `https://mode-sepolia.blastapi.io/${projectId}`;
    case MOONBASE_ALPHA:
      return `https://moonbase-alpha.blastapi.io/${projectId}`;
    case MOONBEAM:
      return `https://moonbeam.blastapi.io/${projectId}`;
    case MOONRIVER:
      return `https://moonriver.blastapi.io/${projectId}`;
    case OPTIMISM:
      return `https://optimism-mainnet.blastapi.io/${projectId}`;
    case OPTIMISM_GOERLI:
      return `https://optimism-goerli.blastapi.io/${projectId}`;
    case OPTIMISM_SEPOLIA:
      return `https://optimism-sepolia.blastapi.io/${projectId}`;
    case PALM:
      return `https://palm-mainnet.blastapi.io/${projectId}`;
    case PALM_TESTNET:
      return `https://palm-testnet.blastapi.io/${projectId}`;
    case POLYGON:
      return `https://polygon-mainnet.blastapi.io/${projectId}`;
    case POLYGON_MUMBAI:
      return `https://polygon-testnet.blastapi.io/${projectId}`;
    case POLYGON_ZKEVM:
      return `https://polygon-zkevm-mainnet.blastapi.io/${projectId}`;
    case POLYGON_ZKEVM_TESTNET:
      return `https://polygon-zkevm-testnet.blastapi.io/${projectId}`;
    case SCROLL:
      return `https://scroll-mainnet.blastapi.io/${projectId}`;
    case SCROLL_SEPOLIA:
      return `https://scroll-sepolia.blastapi.io/${projectId}`;
    case ZKSYNC_ERA:
      return `https://zksync-mainnet.blastapi.io/${projectId}`;
    case ZKSYNC_ERA_SEPOLIA:
      return `https://zksync-testnet.blastapi.io/${projectId}`;
  }
}

function tenderly(chain: TenderlyChain, accessKey: string): string {
  switch (chain) {
    case ETHEREUM:
      return `https://mainnet.gateway.tenderly.co/${accessKey}`;
    case SEPOLIA:
      return `https://sepolia.gateway.tenderly.co/${accessKey}`;
    case GOERLI:
      return `https://goerli.gateway.tenderly.co/${accessKey}`;
    case HOLESKY:
      return `https://holesky.gateway.tenderly.co/${accessKey}`;
    case POLYGON:
      return `https://polygon.gateway.tenderly.co/${accessKey}`;
    case POLYGON_MUMBAI:
      return `https://polygon-mumbai.gateway.tenderly.co/${accessKey}`;
    case OPTIMISM:
      return `https://optimism.gateway.tenderly.co/${accessKey}`;
    case OPTIMISM_GOERLI:
      return `https://optimism-goerli.gateway.tenderly.co/${accessKey}`;
    case OPTIMISM_SEPOLIA:
      return `https://optimism-sepolia.gateway.tenderly.co/${accessKey}`;
    case ARBITRUM:
      return `https://arbitrum.gateway.tenderly.co/${accessKey}`;
    case ARBITRUM_NOVA:
      return `https://arbitrum-nova.gateway.tenderly.co/${accessKey}`;
    case ARBITRUM_SEPOLIA:
      return `https://arbitrum-sepolia.gateway.tenderly.co/${accessKey}`;
    case BASE:
      return `https://base.gateway.tenderly.co/${accessKey}`;
    case BASE_SEPOLIA:
      return `https://base-sepolia.gateway.tenderly.co/${accessKey}`;
    case BOBA_ETHEREUM:
      return `https://boba-ethereum.gateway.tenderly.co/${accessKey}`;
    case BOBA_GOERLI:
      return `https://boba-goerli.gateway.tenderly.co/${accessKey}`;
    case BOBA_BNB:
      return `https://boba-bnb.gateway.tenderly.co/${accessKey}`;
    case BOBA_BNB_TESTNET:
      return `https://boba-bnb-testnet.gateway.tenderly.co/${accessKey}`;
  }
}

function oneRpc(chain: OneRpcChain): string {
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

function chainstack(chain: ChainstackChain, key: string): string {
  switch (chain) {
    case ETHEREUM:
      return `https://ethereum-mainnet.core.chainstack.com/${key}`;
    case HOLESKY:
      return `https://ethereum-holesky.core.chainstack.com/${key}`;
    case SEPOLIA:
      return `https://ethereum-sepolia.core.chainstack.com/${key}`;
    case POLYGON:
      return `https://polygon-mainnet.core.chainstack.com/${key}`;
    case POLYGON_MUMBAI:
      return `https://polygon-mumbai.core.chainstack.com/${key}`;
  }
}

function publicNode(chain: PublicNodeChain): string {
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
    case POLYGON_MUMBAI:
      return 'https://polygon-mumbai-bor-rpc.publicnode.com';
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
  }
}

export {
  alchemy,
  ankr,
  blast,
  chainstack,
  cloudflare,
  infura,
  llamaNodes,
  oneRpc,
  publicNode,
  quicknode,
  tenderly,
};
