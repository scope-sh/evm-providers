import {
  ETHEREUM,
  FANTOM,
  LUKSO,
  LUKSO_TESTNET,
  OPTIMISM,
  POLYGON,
  POLYGON_ZKEVM,
  POLYGON_ZKEVM_TESTNET,
  ARBITRUM,
  GNOSIS,
  GNOSIS_CHIADO,
} from '../utils/chains.js';

type Chain =
  | typeof ETHEREUM
  | typeof FANTOM
  | typeof LUKSO
  | typeof LUKSO_TESTNET
  | typeof OPTIMISM
  | typeof POLYGON
  | typeof POLYGON_ZKEVM
  | typeof POLYGON_ZKEVM_TESTNET
  | typeof ARBITRUM
  | typeof GNOSIS
  | typeof GNOSIS_CHIADO;

type Region = 'eu-central-1' | 'eu-central-2' | 'ap-southeast-1';

function endpoint(chain: Chain, region: Region, isArchival: boolean): string {
  function getChainName(chain: Chain): {
    name: string;
    subName: string;
  } {
    switch (chain) {
      case ETHEREUM:
        return { name: 'ethereum', subName: 'mainnet' };
      case FANTOM:
        return { name: 'fantom', subName: 'mainnet' };
      case LUKSO:
        return { name: 'lukso', subName: 'mainnet' };
      case LUKSO_TESTNET:
        return { name: 'lukso', subName: 'testnet' };
      case OPTIMISM:
        return { name: 'optimism', subName: 'mainnet' };
      case POLYGON:
        return { name: 'polygon', subName: 'mainnet' };
      case POLYGON_ZKEVM:
        return { name: 'polygon-zkevm', subName: 'mainnet' };
      case POLYGON_ZKEVM_TESTNET:
        return { name: 'polygon-zkevm', subName: 'testnet' };
      case ARBITRUM:
        return { name: 'arbitrum', subName: 'arb1' };
      case GNOSIS:
        return { name: 'gnosis', subName: 'mainnet' };
      case GNOSIS_CHIADO:
        return { name: 'gnosis', subName: 'chiado' };
    }
  }

  const { name: chainName, subName: chainSubName } = getChainName(chain);
  const isArchivalString = isArchival ? 'archival' : 'non-archival';
  return `https://rpc.${region}.gateway.fm/v4/${chainName}/${isArchivalString}/${chainSubName}`;
}

export default endpoint;
export type { Chain };
