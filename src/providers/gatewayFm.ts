import {
  ETHEREUM,
  GOERLI,
  FANTOM,
  LUKSO,
  LUKSO_TESTNET,
  OPTIMISM,
  OPTIMISM_GOERLI,
  POLYGON,
  POLYGON_MUMBAI,
  POLYGON_ZKEVM,
  POLYGON_ZKEVM_TESTNET,
  ARBITRUM,
  ARBITRUM_GOERLI,
  GNOSIS,
  GNOSIS_CHIADO,
} from '@/utils/chains.js';

type Chain =
  | typeof ETHEREUM
  | typeof GOERLI
  | typeof FANTOM
  | typeof LUKSO
  | typeof LUKSO_TESTNET
  | typeof OPTIMISM
  | typeof OPTIMISM_GOERLI
  | typeof POLYGON
  | typeof POLYGON_MUMBAI
  | typeof POLYGON_ZKEVM
  | typeof POLYGON_ZKEVM_TESTNET
  | typeof ARBITRUM
  | typeof ARBITRUM_GOERLI
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
      case GOERLI:
        return { name: 'ethereum', subName: 'goerli' };
      case FANTOM:
        return { name: 'fantom', subName: 'mainnet' };
      case LUKSO:
        return { name: 'lukso', subName: 'mainnet' };
      case LUKSO_TESTNET:
        return { name: 'lukso', subName: 'testnet' };
      case OPTIMISM:
        return { name: 'optimism', subName: 'mainnet' };
      case OPTIMISM_GOERLI:
        return { name: 'optimism', subName: 'goerli' };
      case POLYGON:
        return { name: 'polygon', subName: 'mainnet' };
      case POLYGON_MUMBAI:
        return { name: 'polygon', subName: 'mumbai' };
      case POLYGON_ZKEVM:
        return { name: 'polygon-zkevm', subName: 'mainnet' };
      case POLYGON_ZKEVM_TESTNET:
        return { name: 'polygon-zkevm', subName: 'testnet' };
      case ARBITRUM:
        return { name: 'arbitrum', subName: 'arb1' };
      case ARBITRUM_GOERLI:
        return { name: 'arbitrum', subName: 'goerli' };
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
