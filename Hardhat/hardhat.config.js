
require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

const INFURA_API_KEY = process.env.INFURA_API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.20",
  networks: {
    localhost: {},

    goerli: {
      url: `https://goerli.infura.io/v3/${INFURA_API_KEY}`,
      accounts:PRIVATE_KEY? [PRIVATE_KEY]:[] // tHIS ENSURES THAT  if private key is invalid ..here which is not , then also ahrdhat will ot fail
      
    }
  }
};

