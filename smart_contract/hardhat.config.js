//https://eth-ropsten.alchemyapi.io/v2/1fwzMDkjOZWYi1uKtIFM1R77PYUumcBY

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/1fwzMDkjOZWYi1uKtIFM1R77PYUumcBY',
      accounts: [ 'privatekeyredacted' ]
    }
  }
}
