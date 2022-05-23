require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: "0.8.1",
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {},
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/ZBT9L2tQq57iQolY9blkLhizR3PL0E8Y',
      accounts: [`0x415f69a4c8cbcb91036b11fcfd3810ed0c9106bc17d4279ee8c770888b02234d`],
    },
  },
};