import { AddressMapping } from '../types'

const blacklistedAssets: AddressMapping[] = [
  {
    tokenSymbol: 'FTS',
    tokenName: 'FootballStars',
    tokenLogoUrl: '',
    tokenAddresses: [{ chainId: '56', address: '0x6507458bb53aec6be863161641ec28739c41cc97' }],
  },
  {
    tokenSymbol: 'UNISTAKE',
    tokenName: 'Unistake',
    tokenLogoUrl: '',
    tokenAddresses: [{ chainId: '1', address: '0x9ed8e7c9604790f7ec589f99b94361d8aab64e5e' }],
  },
  {
    tokenSymbol: 'KUMA',
    tokenName: 'Kuma Inu',
    tokenLogoUrl: '',
    tokenAddresses: [{ chainId: '1', address: '0x48c276e8d03813224bb1e55f953adb6d02fd3e02' }],
  },
  {
    tokenSymbol: 'BGVT',
    tokenName: 'Bit Game Verse Token',
    tokenLogoUrl: '',
    tokenAddresses: [{ chainId: '56', address: '0xa03110800894b3ccf8723d991d80875561f96777' }],
  },
  {
    tokenSymbol: 'SAFEMARS',
    tokenName: 'Safemars',
    tokenLogoUrl: '',
    tokenAddresses: [{ chainId: '56', address: '0x3ad9594151886ce8538c1ff615efa2385a8c3a88' }],
  },
  {
    tokenSymbol: 'OIL',
    tokenName: 'Oiler',
    tokenLogoUrl: '',
    tokenAddresses: [{ chainId: '1', address: '0x0275e1001e293c46cfe158b3702aade0b99f88a5' }],
  },
  {
    tokenSymbol: 'EDOGE',
    tokenName: 'ElonDoge',
    tokenLogoUrl: '',
    tokenAddresses: [{ chainId: '56', address: '0x163f182c32d24a09d91eb75820cde9fd5832b329' }],
  },
  {
    tokenSymbol: 'NFD',
    tokenName: 'Feisty Doge NFT',
    tokenLogoUrl: '',
    tokenAddresses: [{ chainId: '1', address: '0xdfdb7f72c1f195c5951a234e8db9806eb0635346' }],
  },
  {
    tokenSymbol: 'EXRD',
    tokenName: 'e-Radix',
    tokenLogoUrl: '',
    tokenAddresses: [{ chainId: '1', address: '0x6468e79a80c0eab0f9a2b574c8d5bc374af59414' }],
  },
  {
    tokenSymbol: 'XRP',
    tokenName: 'Ripple Token',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/XRP.svg',
    tokenAddresses: [
      { address: '0x39fbbabf11738317a448031930706cd3e612e1b9', chainId: '1' },
      { address: '0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe', chainId: '56' },
    ],
  },
  {
    tokenSymbol: 'ADA',
    tokenName: 'Cardano Token',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/ADA.svg',
    tokenAddresses: [
      { address: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47', chainId: '56' },
      { address: '0x3611fbfb06ffbcef9afb210f6ace86742e6c14a4', chainId: '106' },
      { address: '0x0e517979c2c1c1522ddb0c73905e0d39b3f990c0', chainId: '25' },
    ],
  },
  {
    tokenSymbol: 'DOT',
    tokenName: 'Polkadot Token',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/DOT.svg',
    tokenAddresses: [
      { address: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402', chainId: '56' },
      { address: '0x994047fe66406cbd646cd85b990e11d7f5db8fc7', chainId: '25' },
      { address: '0xffffffffffffffffffffffffffffffffffffffff', chainId: '592' },
    ],
  },
  {
    tokenSymbol: 'ATOM',
    tokenName: 'Cosmos Hub',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png?1555657960',
    tokenAddresses: [
      { address: '0x0eb3a705fc54725037cc9e008bdede697f62f335', chainId: '56' },
      { address: '0xb888d8dd1733d72681b30c00ee76bde93ae7aa93', chainId: '25' },
      { address: '0xc5e00d3b04563950941f7137b5afa3a534f0d6d6', chainId: '9001' },
      { address: '0xeceeefcee421d8062ef8d6b4d814efe4dc898265', chainId: '7700' },
    ],
  },
  {
    tokenSymbol: 'XTZ',
    tokenName: 'Tezos Token',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/XTZ.png',
    tokenAddresses: [
      { address: '0x2a69655c22eda32ff48d315bb26ed45f150700b4', chainId: '1' },
      { address: '0x16939ef78684453bfdfb47825f8a5f714f12623a', chainId: '56' },
    ],
  },
  {
    tokenSymbol: 'ALGO',
    tokenName: 'Algorand',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/4380/large/download.png?1547039725',
    tokenAddresses: [
      { address: '0x2fefe47989214c2e74a6319076c138d395681407', chainId: '25' },
      { address: '0x99690611d2b5698ebc27cbf51ba89e4c22eb341c', chainId: '56' },
    ],
  },
  {
    tokenSymbol: 'NEAR',
    tokenName: 'Near Protocol',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/NEAR.svg',
    tokenAddresses: [
      { address: '0x85f17cf997934a597031b2e18a9ab6ebd4b9f6a4', chainId: '1' },
      { address: '0x1fa4a73a3f0133f0025378af00236f3abdee5d63', chainId: '56' },
      { address: '0x72bd80445b0db58ebe3e8db056529d4c5faf6f2f', chainId: '137' },
      { address: '0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d', chainId: '1313161554' },
    ],
  },
  {
    tokenSymbol: 'WAVES',
    tokenName: 'Waves',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/425/large/waves.png?1548386117',
    tokenAddresses: [
      { address: '0x1cf4592ebffd730c7dc92c1bdffdfc3b9efcf29a', chainId: '1' },
      { address: '0xfc3e14af0f0c2129a84cc013d48c70d682902874', chainId: '56' },
    ],
  },
  {
    tokenSymbol: 'XLM',
    tokenName: 'Stellar',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png?1552356157',
    tokenAddresses: [
      { address: '0x747d6c858168b8cd6e537160320b5de58fd3367c', chainId: '25' },
      { address: '0x43c934a845205f0b514417d757d7235b8f53f1b9', chainId: '56' },
    ],
  },
  {
    tokenSymbol: 'IOTA',
    tokenName: 'MIOTAC',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/IOTA.png',
    tokenAddresses: [{ address: '0xd944f1d1e9d5f9bb90b62f9d45e447d989580782', chainId: '56' }],
  },
  {
    tokenSymbol: 'TRX',
    tokenName: 'Tron',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/1094/large/tron-logo.png?1547035066',
    tokenAddresses: [
      { address: '0xce7de646e7208a4ef112cb6ed5038fa6cc6b12e3', chainId: '56' },
      { address: '0xedf53026aea60f8f75fca25f8830b7e2d6200662', chainId: '199' },
    ],
  },
  {
    tokenSymbol: 'QTUM',
    tokenName: 'Qtum',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/684/large/Qtum_Logo_blue_CG.png?1637155875',
    tokenAddresses: [
      { address: '0x32529346958711b3bef92b96507c14821e50c9c8', chainId: '25' },
      { address: '0xafb4942f45a01c67c83d969ea83129926e05f6fe', chainId: '39797' },
    ],
  },
  {
    tokenSymbol: 'XVG',
    tokenName: 'Verge',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/203/large/verge-symbol-color_logo.png?1561543281',
    tokenAddresses: [{ address: '0xc559e9bf45d772d8049577555af4098ca62db03c', chainId: '56' }],
  },
  {
    tokenSymbol: 'XMR',
    tokenName: 'Monero',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/69/large/monero_logo.png?1547033729',
    tokenAddresses: [
      { address: '0xf5ff4201b1dfe13bba301e71ccc4880e5c3f96bf', chainId: '369' },
      { address: '0x3451a78205a02fe9df6b5c3bbcff40c4c296f939', chainId: '1116' },
      { address: '0xbc4081a8b192a50bd58ac6c595d766e59a56c37e', chainId: '56' },
      { address: '0x465e07d6028830124be2e4aa551fbe12805db0f5', chainId: '1' },
    ],
  },
  {
    tokenSymbol: 'FIL',
    tokenName: 'Filecoin',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/FIL.png',
    tokenAddresses: [
      { address: '0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153', chainId: '56' },
      { address: '0x7d7130b0b4733d603cea12628b52067ce8458058', chainId: '25' },
    ],
  },
  {
    tokenSymbol: 'THETA',
    tokenName: 'Theta Network',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/2538/large/theta-token-logo.png?1548387191',
    tokenAddresses: [
      { address: '0x73b6fcf8ed6daefe3775bc38949f115305047c0d', chainId: '25' },
      { address: '0x6d4a34328263771bfdf80ff19b1b343c2ee6e85f', chainId: '56' },
    ],
  },
  {
    tokenSymbol: 'FLOW',
    tokenName: 'Flow',
    tokenLogoUrl:
      'https://assets.coingecko.com/coins/images/13446/large/5f6294c0c7a8cda55cb1c936_Flow_Wordmark.png?1631696776',
    tokenAddresses: [
      { address: '0x5c147e74d63b1d31aa3fd78eb229b65161983b2b', chainId: '1' },
      { address: '0xc943c5320b9c18c153d1e2d12cc3074bebfb31a2', chainId: '56' },
    ],
  },
  {
    tokenSymbol: 'RENBTC',
    tokenName: 'renBTC',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/11370/large/Bitcoin.jpg?1628072791',
    tokenAddresses: [{ chainId: '1', address: '0xeb4c2781e4eba804ce9a9803c67d0893436bb27d' }],
  },
  {
    tokenSymbol: 'HBTC',
    tokenName: 'Huobi BTC',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/12407/large/Unknown-5.png?1599624896',
    tokenAddresses: [{ chainId: '1', address: '0x0316eb71485b0ab14103307bf65a021042c6d380' }],
  },
  {
    tokenSymbol: 'BTC.B',
    tokenName: 'Bitcoin Avalanche Bridged (BTC.b)',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/26115/large/btcb.png?1655921693',
    tokenAddresses: [{ chainId: '43114', address: '0x152b9d0fdc40c096757f570a51e494bd4b943e50' }],
  },
  {
    tokenSymbol: 'OBTC',
    tokenName: 'BoringDAO BTC',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/13525/large/gWzm2dr.png?1609390713',
    tokenAddresses: [{ chainId: '1', address: '0x8064d9ae6cdf087b1bcd5bdf3531bd5d8c537a68' }],
  },
  {
    tokenSymbol: 'BTC2X-FLI',
    tokenName: 'BTC 2x Flexible Leverage Index',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/15406/large/Copy_of_BTC2x-FLI_token_logo.png?1646749417',
    tokenAddresses: [{ chainId: '1', address: '0x0b498ff89709d3838a063f1dfa463091f9801c2b' }],
  },
  {
    tokenSymbol: 'BTCST',
    tokenName: 'BTC Standard Hashrate Token',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/14449/large/4a3IskOf_400x400.png?1616137396',
    tokenAddresses: [{ chainId: '56', address: '0x78650b139471520656b9e7aa7a5e9276814a38e9' }],
  },
  {
    tokenSymbol: 'CWBTC',
    tokenName: 'cWBTC',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/10823/large/cwbtc.png?1584331700',
    tokenAddresses: [{ chainId: '1', address: '0xccf4429db6322d5c611ee964527d42e5d685dd6a' }],
  },
  {
    tokenSymbol: 'IBBTC',
    tokenName: 'Badger Interest Bearing Bitcoin',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/15500/large/ibbtc.png?1621077589',
    tokenAddresses: [{ chainId: '1', address: '0xc4e15973e6ff2a35cc804c2cf9d2a1b817a8b40f' }],
  },
  {
    tokenSymbol: 'SBTC',
    tokenName: 'sBTC',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/8838/large/sBTC.png?1616149734',
    tokenAddresses: [{ chainId: '1', address: '0xfe18be6b3bd88a2d2a7f928d00292e7a9963cfc6' }],
  },
  {
    tokenSymbol: 'TBTC',
    tokenName: 'tBTC',
    tokenLogoUrl:
      'https://assets.coingecko.com/coins/images/11224/large/0x18084fba666a33d37592fa2633fd49a74dd93a88.png?1674474504',
    tokenAddresses: [{ chainId: '1', address: '0x18084fba666a33d37592fa2633fd49a74dd93a88' }],
  },
  {
    tokenSymbol: 'BTCB',
    tokenName: 'BTCB Token',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/BTCB.svg',
    tokenAddresses: [{ address: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c', chainId: '56' }],
  },
  {
    tokenSymbol: 'RETH',
    tokenName: 'Rocket Pool ETH',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/20764/large/reth.png?1637652366',
    tokenAddresses: [{ chainId: '1', address: '0xae78736cd615f374d3085123a210448e74fc6393' }],
  },
  {
    tokenSymbol: 'ANKRETH',
    tokenName: 'Ankr Staked ETH',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/13403/large/aETHc.png?1625756490',
    tokenAddresses: [{ chainId: '1', address: '0xe95a203b1a91a908f9b9ce46459d101078c2c3cb' }],
  },
  {
    tokenSymbol: 'ETHPAD',
    tokenName: 'ETHPad',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/17520/large/tHAbIBQK_400x400.jpg?1628075612',
    tokenAddresses: [{ chainId: '1', address: '0x8db1d28ee0d822367af8d220c0dc7cb6fe9dc442' }],
  },
  {
    tokenSymbol: 'FRXETH',
    tokenName: 'Frax Ether',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/28284/large/JjqQ9ROz_400x400.jpeg?1669170320',
    tokenAddresses: [{ chainId: '1', address: '0x5e8422345238f34275888049021821e8e08caa1f' }],
  },
  {
    tokenSymbol: 'SETH',
    tokenName: 'sETH',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/8843/large/sETH.png?1616150207',
    tokenAddresses: [{ chainId: '1', address: '0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb' }],
  },
  {
    tokenSymbol: 'CETH',
    tokenName: 'cETH',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/10643/large/ceth2.JPG?1581389598',
    tokenAddresses: [{ chainId: '1', address: '0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5' }],
  },
  {
    tokenSymbol: 'DSETH',
    tokenName: 'Diversified Staked ETH',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/28751/large/dsETH-logo.png?1673929867',
    tokenAddresses: [{ chainId: '1', address: '0x341c05c0e9b33c0e38d64de76516b2ce970bb3be' }],
  },
  {
    tokenSymbol: 'ETH2X-FLI',
    tokenName: 'Index Coop - ETH 2x Flexible Leverage Index',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/14392/large/ETH2x-FLI_%281%29.png?1615875910',
    tokenAddresses: [{ chainId: '1', address: '0xaa6e8127831c9de45ae56bb1b0d4d4da6e5665bd' }],
  },
  {
    tokenSymbol: 'GST-ETH',
    tokenName: 'STEPN Green Satoshi Token on ETH',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/26528/large/gst_eth.png?1658487279',
    tokenAddresses: [{ chainId: '1', address: '0x473037de59cf9484632f4a27b509cfe8d4a31404' }],
  },
  {
    tokenSymbol: 'IETH',
    tokenName: 'Instadapp ETH',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/25822/large/iETH_100x100.png?1654055637',
    tokenAddresses: [{ chainId: '1', address: '0xc383a3833a87009fd9597f8184979af5edfad019' }],
  },
  {
    tokenSymbol: 'ICETH',
    tokenName: 'Interest Compounding ETH Index',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/24483/large/icETH-token-logo.png?1647826356',
    tokenAddresses: [{ chainId: '1', address: '0x7c07f7abe10ce8e33dc6c5ad68fe033085256a84' }],
  },
  {
    tokenSymbol: 'RETH2',
    tokenName: 'rETH2',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/16570/large/red256.png?1624495231',
    tokenAddresses: [{ chainId: '1', address: '0x20bc832ca081b91433ff6c17f85701b6e92486c5' }],
  },
  {
    tokenSymbol: 'SETH2',
    tokenName: 'sETH2',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/16569/large/emerald256.png?1624494960',
    tokenAddresses: [{ chainId: '1', address: '0xfe2e637202056d30016725477c5da089ab0a043a' }],
  },
  {
    tokenSymbol: 'SFRXETH',
    tokenName: 'Staked Frax Ether',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/28285/large/JjqQ9ROz_400x400.jpeg?1669170466',
    tokenAddresses: [{ chainId: '1', address: '0xac3e018457b222d93114458476f3e3416abbe38f' }],
  },
  {
    tokenSymbol: 'TETHYS',
    tokenName: 'Tethys Finance',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/22141/large/wjoZJvzA_400x400.jpg?1640927753',
    tokenAddresses: [{ chainId: '1088', address: '0x69fdb77064ec5c84fa2f21072973eb28441f43f3' }],
  },
  {
    tokenSymbol: 'CNHT',
    tokenName: 'CNH Tether',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/5251/large/cny-tether-logo.png?1547040741',
    tokenAddresses: [{ chainId: '1', address: '0x6e109e9dd7fa1a58bc3eff667e8e41fc3cc07aef' }],
  },
  {
    tokenSymbol: 'XAUT',
    tokenName: 'Tether Gold',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/10481/large/Tether_Gold.png?1668148656',
    tokenAddresses: [{ chainId: '1', address: '0x68749665ff8d2d112fa859aa293f07a622782f38' }],
  },
  {
    tokenSymbol: 'ETC',
    tokenName: 'Binance-Peg Ethereum Classic',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/ETC.svg',
    tokenAddresses: [{ address: '0x3d6545b08693dae087e957cb1180ee38b9e3c25e', chainId: '56' }],
  },
  {
    tokenSymbol: 'CUSDT',
    tokenName: 'cUSDT',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/11621/large/cUSDT.png?1592113270',
    tokenAddresses: [{ chainId: '1', address: '0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9' }],
  },
  {
    tokenSymbol: 'aBNBc',
    tokenName: 'Ankr BNB Reward Bearing Certificate',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/ABNBC.svg',
    tokenAddresses: [{ address: '0xe85afccdafbe7f2b096f268e31cce3da8da2990a', chainId: '56' }],
  },
  {
    tokenSymbol: 'BNB',
    tokenName: 'anyBNB',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/WBNB.svg',
    tokenAddresses: [{ address: '0xa649325aa7c5093d12d6f98eb4378deae68ce23f', chainId: '137' }],
  },
  {
    tokenSymbol: 'KOGE',
    tokenName: 'BNB48 Club',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/13827/large/bnb48.png?1612154326',
    tokenAddresses: [{ chainId: '56', address: '0xe6df05ce8c8301223373cf5b969afcb1498c5528' }],
  },
  {
    tokenSymbol: 'CUSDC',
    tokenName: 'cUSDC',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/9442/large/Compound_USDC.png?1567581577',
    tokenAddresses: [{ chainId: '1', address: '0x39aa39c021dfbae8fac545936693ac917d5e7563' }],
  },
  {
    tokenSymbol: 'IUSDC',
    tokenName: 'Instadapp USDC',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/25820/large/iUSDC_100x100.png?1654055475',
    tokenAddresses: [{ chainId: '1', address: '0xc8871267e07408b89aa5aecc58adca5e574557f8' }],
  },
  {
    tokenSymbol: 'IDAI',
    tokenName: 'Instadapp DAI',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/25821/large/iDAI_100x100.png?1654055549',
    tokenAddresses: [{ chainId: '1', address: '0x40a9d39aa50871df092538c5999b107f34409061' }],
  },
  {
    tokenSymbol: 'IUSDC',
    tokenName: 'Instadapp USDC',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/25820/large/iUSDC_100x100.png?1654055475',
    tokenAddresses: [{ chainId: '1', address: '0xc8871267e07408b89aa5aecc58adca5e574557f8' }],
  },
  {
    tokenSymbol: 'MATICX',
    tokenName: 'Stader MaticX',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/25383/large/maticx.png?1674714297',
    tokenAddresses: [{ chainId: '1', address: '0xf03a7eb46d01d9ecaa104558c732cf82f6b6b645' }],
  },
  {
    tokenSymbol: 'stMATIC',
    tokenName: 'Staked Matic',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/STMATIC.png',
    tokenAddresses: [{ address: '0x3a58a54c066fdc0f2d55fc9c89f0415c92ebf3c4', chainId: '137' }],
  },
  {
    tokenSymbol: 'SAVAX',
    tokenName: 'BENQI Liquid Staked AVAX',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/23657/large/savax_blue.png?1644989825',
    tokenAddresses: [{ chainId: '43114', address: '0x2b2c81e08f1af8835a78bb2a90ae924ace0ea4be' }],
  },
  {
    tokenSymbol: 'CUNI',
    tokenName: 'cUNI',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/12696/large/compound-uni.png?1601789718',
    tokenAddresses: [{ chainId: '1', address: '0x35a18000230da775cac24873d00ff85bccded550' }],
  },
  {
    tokenSymbol: 'CDAI',
    tokenName: 'cDAI',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/9281/large/cDAI.png?1576467585',
    tokenAddresses: [{ chainId: '1', address: '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643' }],
  },
  {
    tokenSymbol: 'IDAI',
    tokenName: 'Instadapp DAI',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/25821/large/iDAI_100x100.png?1654055549',
    tokenAddresses: [{ chainId: '1', address: '0x40a9d39aa50871df092538c5999b107f34409061' }],
  },
  {
    tokenSymbol: 'CLINK',
    tokenName: 'cLINK',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/23943/large/iShot2022-02-25_14.35.54.png?1645770966',
    tokenAddresses: [{ chainId: '1', address: '0xface851a4921ce59e912d19329929ce6da6eb0c7' }],
  },
  {
    tokenSymbol: 'DUSD',
    tokenName: 'DefiDollar',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/12333/large/defidollar_logo.png?1599116360',
    tokenAddresses: [{ chainId: '1', address: '0x5bc25f649fc4e26069ddf4cf4010f9f706c23831' }],
  },
  {
    tokenSymbol: 'SFIL',
    tokenName: 'Filecoin Standard Full Hashrate',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/21669/large/_70BfuBY_400x400.jpg?1639706531',
    tokenAddresses: [{ chainId: '56', address: '0x965b85d4674f64422c4898c8f8083187f02b32c0' }],
  },
  {
    tokenSymbol: 'NEARX',
    tokenName: 'Stader NearX',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/27787/large/Nearx.png?1674714238',
    tokenAddresses: [{ chainId: '1313161554', address: '0xb39eeb9e168ef6c639f5e282fef1f6bc4dcae375' }],
  },
  {
    tokenSymbol: 'SFTMX',
    tokenName: 'Stader sFTMX',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/26586/large/Fantom_Light.png.png?1658900076',
    tokenAddresses: [{ chainId: '250', address: '0xd7028092c830b5c8fce061af2e593413ebbc1fc1' }],
  },
  {
    tokenSymbol: 'LEND',
    tokenName: 'Aave [OLD]',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/1365/large/ethlend.png?1547394586',
    tokenAddresses: [{ chainId: '1', address: '0x80fb784b7ed66730e8b1dbd9820afd29931aab03' }],
  },
  {
    tokenSymbol: 'NCR',
    tokenName: 'Neos Credits',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/17935/large/s4C4tVi.png?1629860208',
    tokenAddresses: [{ chainId: '1', address: '0xdb5c3c46e28b53a39c255aa39a411dd64e5fed9c' }],
  },
  {
    tokenSymbol: 'FRXETH',
    tokenName: 'Frax Ether',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/28284/large/JjqQ9ROz_400x400.jpeg?1669170320',
    tokenAddresses: [{ chainId: '1', address: '0x5e8422345238f34275888049021821e8e08caa1f' }],
  },
  {
    tokenSymbol: 'SFRXETH',
    tokenName: 'Staked Frax Ether',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/28285/large/JjqQ9ROz_400x400.jpeg?1669170466',
    tokenAddresses: [{ chainId: '1', address: '0xac3e018457b222d93114458476f3e3416abbe38f' }],
  },
  {
    tokenSymbol: 'YVE-CRVDAO',
    tokenName: 'veCRV-DAO yVault',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/13065/large/yearn_veCRV.png?1612862859',
    tokenAddresses: [{ chainId: '1', address: '0xc5bddf9843308380375a611c18b50fb9341f502a' }],
  },
  {
    tokenSymbol: 'USDP',
    tokenName: 'USDP Stablecoin',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/13234/large/USDP.png?1606579598',
    tokenAddresses: [{ chainId: '1', address: '0x1456688345527be1f37e9e627da0837d6f08c925' }],
  },
  {
    tokenSymbol: 'CWBTC',
    tokenName: 'cWBTC',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/10823/large/cwbtc.png?1584331700',
    tokenAddresses: [{ chainId: '1', address: '0xccf4429db6322d5c611ee964527d42e5d685dd6a' }],
  },
  {
    tokenSymbol: 'IWBTC',
    tokenName: 'Instadapp WBTC',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/25784/large/iWBTC-100x100.png?1654055142',
    tokenAddresses: [{ chainId: '1', address: '0xec363faa5c4dd0e51f3d9b5d0101263760e7cdeb' }],
  },
]

export default blacklistedAssets
