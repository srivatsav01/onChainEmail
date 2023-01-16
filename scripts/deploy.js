const { hexStripZeros } = require("ethers/lib/utils")

const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying contracts with  ",deployer.address);

    const waveContractFactory = await hre.ethers.getContractFactory("OnChainEmail");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
    console.log("OnChainEmail address",waveContract.address);   
};

const runMain = async () => {
    try{
        await main();
        process.exit(0);
    }catch(error) {
        console.log(error);
    }
};

runMain();
