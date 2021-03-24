require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth shift promote give produce bottom gauge'; 
let testAccounts = [
"0x7f332f634e605dc5a163c7f5b9dcdd89ca03206a89fd50aa3f602032b12ef97d",
"0x3eff148b5453341b569a6e8cedcbbd77401d583ffc9021ce9ebfbff702f43884",
"0x058972af64417a1d32840bff57e616049555355fa31b86bc900e14973d4354c3",
"0xc15f42c3a0ab9e7d4aacd79fd50e2bc6f0ecd2c8b8507d4d0917eca764c25069",
"0xd1438c01f2dbac4379587e53b4ee2bc24876dced1b4f2b4731aa44e91e66cdc1",
"0x419953619eece24770872e00158b8c2cab980262df5159dbec81adb397f8a5bb",
"0xb42d8083833749b4756d317e292eee08eefe727021d6d39ffbe2b4f4bd04a753",
"0xc60bd84dc5e1b45f828b72b59b92161dfb6fe28cd943a9cb42e6a9b6886cc524",
"0x6f1e6c8b29038016ba5ca9324fa6821515f4096f42302b099b7aa1383bcb02c7",
"0x3a1f7303b0c51a9ed25317ca25fd7b78e323ddd00d3e745a467b2676b452f6d1"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
