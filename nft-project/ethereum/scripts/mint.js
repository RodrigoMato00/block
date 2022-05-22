require("dotenv").config();
const { ethers } = require("hardhat");

const contract = require("../artifacts/contracts/EmotionalShapes.sol/EmotionalShapes.json");
const contractInterface = contract.abi;

// https://docs.ethers.io/v5/api/providers
const provider = ethers.getDefaultProvider("rinkeby", {
  alchemy: 'https://eth-rinkeby.alchemyapi.io/v2/ZBT9L2tQq57iQolY9blkLhizR3PL0E8Y',
});

//new ethers.providers.AlchemyProvider("rinkeby", {
//    alchemy: "https://eth-rinkeby.alchemyapi.io/v2/ZBT9L2tQq57iQolY9blkLhizR3PL0E8Y",
//});


// https://docs.ethers.io/v5/api/signer/#Wallet
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

//https://docs.ethers.io/v5/api/contract/contract
const emotionalShapes = new ethers.Contract(
  '0x46561CF77afF152BD656f8857d014BABAE72569A',
  contractInterface,
  wallet
);

const main = () => {
  emotionalShapes
    .mint(process.env.PUBLIC_KEY)
    .then((transaction) => console.log(transaction))
    .catch((e) => console.log("something went wrong", e));
};

main();