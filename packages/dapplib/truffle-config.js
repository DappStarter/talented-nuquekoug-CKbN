require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remember solid imitate private food test'; 
let testAccounts = [
"0x1fb06c2427ed585d9d4ce509e5835f99b20a2cbd7651082c91174dc2dba6289c",
"0xe066c7ae4cf2a86ddbcac696b237d1c1e696cb20d71a3d28b2dcdf766c062c5d",
"0x538a1db26e61f5289286295c14e05d762087b9284c661dc42f95d0e6910b80c9",
"0xcb2839e86fc5e5b71b363c05491b1d5d4be41fbddaae50847ea274c1ae0e4df2",
"0x247278710fc0c588efbd1da63b3d66dfec80d3a516d029b894aa11bb0856c1ed",
"0xbff9c28845522166af89531ac631a36ebbfcdc259b0921a1630a55aa67193193",
"0xb7d7591703cf367add833f7516af816b2d3cfcf6b23ba1a4347275572440520e",
"0xbee3a09ab21a04568e637ec329a00e4e37cc994b8d7b1115c5f58bf596be5eb6",
"0xc54ee2a25993367a13154783bec2b4b30652f17e0a272257716c5e21aaf65096",
"0x9326e10e47e8e818df902f03a0341a725c4c18e6aa2bfcf4b7c2884b80e657f1"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

