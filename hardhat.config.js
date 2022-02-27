require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3");
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const apiKey = process.env.ethApiKey;
module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${apiKey}`, //Mainnet Forking
        blockNumber: 14290999,
      },
      chainId: 1,
    },
  },
  mocha: {
    timeout: 10000 * 1000, // 10,000 seconds
  },
};
