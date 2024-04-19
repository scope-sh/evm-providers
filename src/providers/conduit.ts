import {
  AEVO,
  AEVO_SEPOLIA,
  DEGEN,
  GOLD,
  MODE,
  MODE_SEPOLIA,
  ORDERLY,
  ORDERLY_SEPOLIA,
  PGN,
  PGN_SEPOLIA,
  ZORA,
  ZORA_SEPOLIA,
} from '../utils/chains.js';

type Chain =
  | typeof AEVO
  | typeof AEVO_SEPOLIA
  | typeof DEGEN
  | typeof GOLD
  | typeof MODE
  | typeof MODE_SEPOLIA
  | typeof ORDERLY
  | typeof ORDERLY_SEPOLIA
  | typeof PGN
  | typeof PGN_SEPOLIA
  | typeof ZORA
  | typeof ZORA_SEPOLIA;

function endpoint(chain: Chain, key: string): string {
  switch (chain) {
    case AEVO:
      return `https://rpc-aevo-mainnet-prod-0.t.conduit.xyz/${key}`;
    case AEVO_SEPOLIA:
      return `https://rpc-aevo-testnet-k1zx5a2ajj.t.conduit.xyz/${key}`;
    case DEGEN:
      return `https://rpc.degen.tips/${key}`;
    case GOLD:
      return `https://chain-rpc.gold.dev/${key}`;
    case MODE:
      return `https://mainnet.mode.network/${key}`;
    case MODE_SEPOLIA:
      return `https://sepolia.mode.network/${key}`;
    case ORDERLY:
      return `https://rpc.orderly.network/${key}`;
    case ORDERLY_SEPOLIA:
      return `https://testnet-rpc.orderly.org/${key}`;
    case PGN:
      return `https://rpc.publicgoods.network/${key}`;
    case PGN_SEPOLIA:
      return `https://sepolia.publicgoods.network/${key}`;
    case ZORA:
      return `https://rpc.zora.energy/${key}`;
    case ZORA_SEPOLIA:
      return `https://sepolia.rpc.zora.energy/${key}`;
  }
}

export default endpoint;
export type { Chain };
