import { task } from "hardhat/config";
import { artifacts, ethers as hardhatEthers } from 'hardhat';



async function createBribe() {
    // Contract name
    const contractName = 'WrappedExternalBribeFactory';  // replace with your contract name

    // Load the contract artifact
    const artifact = await artifacts.readArtifact(contractName);

    // Contract address
    const contractAddress = '0xE9CE7D45c9242db4a68a65e6C26a93F839591D8f';  // replace with your contract address

    // Create a contract instance
    const contract = new ethers.Contract(contractAddress, artifact.abi);

    // The existing_bribe address
    const existingBribeAddress = 'EXISTING_BRIBE_ADDRESS';  // replace with the existing_bribe address

    // Call the createBribe function
    const tx = await contract.createBribe(existingBribeAddress);
    
    // Wait for the transaction to be mined
    const receipt = await tx.wait();

    console.log('Transaction hash: ', tx.hash);
    console.log('Transaction receipt: ', receipt);
}

createBribe().catch(console.error);

