# evm-providers

EVM JSON-RPC Provider Registry

- Tree-shakeable
- Zero dependencies
- Fully typed
- 15+ providers
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

## Contributing

Contributions that add new providers and chains are very welcome! Please try to split up large changes into modular PRs, this will speed up the review process.

## Providers

- Alchemy
- Infura
- Ankr
- QuickNode
- Cloudflare
- LlamaNodes
- Blast
- Tenderly
- 1RPC
- Chainstack
- PublicNode
- Stackup
- dRPC
- gateway.fm

We also support non-standard providers:

- Stackup Paymaster
- Pimlico Bundler/Paymaster
- Biconomy Bundler
- Biconomy Paymaster

## Chains

See [src/index.ts](src/index.ts) for the list of supported chains.
