const ETHEREUM = 1;
const GOERLI = 5;
const SEPOLIA = 11155111;
const ARBITRUM = 42161;
// const ARBITRUM_NOVA = 42170;
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
const CELO = 42220;
const CELO_ALFAJORES = 44787;
// const ZORA = 7777777;
// const ZORA_SEPOLIA = 999999999;
const LINEA = 59144;
const LINEA_GOERLI = 59140;
const BLAST = 81457;
const BLAST_SEPOLIA = 168587773;
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

export { alchemy, infura };
