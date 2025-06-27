import MyToken from "./MyToken.json";
import { ethers} from "ethers";

const CONTRACT_ADDRESS ="0x5FbDB2315678afecb367f032d93F642f64180aa3"

const getContract = async()=>{
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    return new ethers.Contract(CONTRACT_ADDRESS,MyToken.abi,signer);

};
export default getContract;