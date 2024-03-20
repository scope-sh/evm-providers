# evm-providers

EVM JSON-RPC Provider Registry

- Fully typed
- 20+ providers
- Most EVM chains
- Non-standard providers (e.g. bundlers and paymasters)

## Installation

```
bun i evm-providers
# or
npm i evm-providers
# or
yarn add evm-providers
```

## Usage

```ts
import { alchemy } from 'evm-providers';

const url = alchemy(1, '<your-alchemy-key>');
// https://eth-mainnet.g.alchemy.com/v2/<your-alchemy-key>
```

With [viem](https://github.com/wagmi-dev/viem):

```ts
import { createPublicClient, http } from 'viem';
import { mainnet } from 'viem/chains';
import { alchemy } from 'evm-providers';

const client = createPublicClient({
  chain: mainnet,
  transport: http(alchemy(mainnet.id, '<your-alchemy-key>')),
});
```

## Chains

- Ethereum
- Sepolia
- Polygon
- Polygon Mumbai
- Polygon Amoy
- Arbitrum
- Arbitrum Sepolia
- Optimism
- Optimism Sepolia
- Polygon ZKEVM
- Polygon ZKEVM Testnet
- Base
- Base Sepolia
- Astar

## Providers

- Alchemy
- Infura
