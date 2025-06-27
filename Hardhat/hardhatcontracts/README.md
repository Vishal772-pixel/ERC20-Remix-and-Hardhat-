# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```




npx hardhat node
npx hardhat run scripts/deploy.js --network localhost



in another terminal 
npm install @openzeppelin/contracts@4.9.0

To compile 
npx hardhat compile



To deploy 
npx hardhat run scripts/deploy.js --network localhost











to kill the existing running contract 
run below command in terminal
netstat -ano | findstr :8545

u will get 
 TCP    127.0.0.1:8545         0.0.0.0:0              LISTENING       15340
  TCP    127.0.0.1:8545         127.0.0.1:64322        FIN_WAIT_2      15340
  TCP    127.0.0.1:8545         127.0.0.1:64323        FIN_WAIT_2      15340
  TCP    127.0.0.1:64322        127.0.0.1:8545         CLOSE_WAIT      13192
  TCP    127.0.0.1:64323        127.0.0.1:8545         CLOSE_WAIT      13192

  then  run below command to kill the process
  taskkill /PID 15340 /F