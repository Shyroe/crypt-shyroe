require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/9ERoNlkM4oDVZO5XeL9pGg_99jycuG94', // smart contracts
      accounts: ['7b00c6ff4d5c00fdeac74f0f8cbccd0048e27055e48d8ea12dfc3304deee36db'], // metamask account key
    },
  },
};