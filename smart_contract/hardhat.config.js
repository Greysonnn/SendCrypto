//https://eth-ropsten.alchemyapi.io/v2/1fwzMDkjOZWYi1uKtIFM1R77PYUumcBY

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/1fwzMDkjOZWYi1uKtIFM1R77PYUumcBY',
      accounts: [ '5624d137afeff45c3f4676bf605d032cc1f925e432fe69de6e230ca181eb0ac2' ]
    }
  }
}