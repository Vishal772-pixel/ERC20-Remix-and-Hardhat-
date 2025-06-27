const hre = require("hardhat");

async function main() {
  const MyToken = await hre.ethers.getContractFactory("MyToken");
  console.log("Deployed Contract...") // to check the error occuring while deploying the contract
  const token = await MyToken.deploy();
  await token.waitForDeployment();

   const deployedAddress = await token.getAddress();
  console.log(`Token deployed to: ${deployedAddress}`);// Address btayega ..kaha pe token deploy hua 
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
