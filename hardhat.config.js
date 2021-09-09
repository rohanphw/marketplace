require("@nomiclabs/hardhat-waffle");

//const projectId = "22d9bd878d0b4a558c1a13f9137cbe78"
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()
//const infuraId = "22d9bd878d0b4a558c1a13f9137cbe78"

module.exports = {

  networks:{
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: 'https://polygon-mumbai.infura.io/v3/22d9bd878d0b4a558c1a13f9137cbe78',
      accounts: [privateKey]
    },
    mainnet: {
      url: "https://polygon-mainnet.infura.io/v3/22d9bd878d0b4a558c1a13f9137cbe78",
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};
