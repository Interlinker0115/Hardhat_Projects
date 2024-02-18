import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
const INFURA_API_KEY = "c4c5cc0e44b745e08e2056827b31ec05" ;
const SEPOLIA_PRIVATE_KEY = "75ea5a9b8cd5f9d374208c6e292bcb5d79227bf3059cd08f19cba56b8607246b";
const ETHERSCAN_API_KEY = "ED2NED96C214Y891MR98PZZ1Q45VTFYZRV";


module.exports = {
  solidity: "0.8.20",
  networks: {
    hardhat:{
      chainId:11155111
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
      saveDeployments: true,
    }    
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  }
};