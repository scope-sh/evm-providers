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

We would also like to enable providing API keys to all providers that support it. Don't hesitate to open a PR that adds support for your favorite provider.

Finally, we would like to extend the registry by supporting more features (e.g. WSS endpoints, RPC flavors, etc). Feel free to provide feedback on the ideal DX around that.

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
