used React +ether.js

imported MyToken.json from hardhatcontract to connect the contract with frontend 

u can get Mytoken.json from hardhat contract when u compile and run the contract by running 
 cd hardhatcontract
 npm i
 npx hardhat compile
 npx hardhat run scripts/deploy.js --network localhost

 if got some issue with openzepplin run 
 npm install @openzeppelin/contracts@4.9.0

 u will find a new folder formed after deployment 
 hardhatcontracts/artifacts/contract/MyToken.json  => copy the file and paste in frontend required directory