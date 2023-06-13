import { task } from "hardhat/config";

import goerliConfig from "./constants/goerliConfig";
//import testOptimismConfig from "./constants/testOptimismConfig";

task("deploy:bribe", "Deploys Goerli contracts").setAction(async function (
  taskArguments,
  { ethers }
) {
  const mainnet = false;

  const GOERLI_CONFIG = goerliConfig;

  const [
    WrappedExternalBribeFactory
  ] = await Promise.all([
    ethers.getContractFactory("WrappedExternalBribeFactory")
  ]);

  const wrappedExternalBribeFactory = await WrappedExternalBribeFactory.deploy("0xfD397ea7044Eb694D42365684347cCF5159cc026");
  await wrappedExternalBribeFactory.deployed();
  console.log("WrappedExternalBribeFactory deployed to: ", wrappedExternalBribeFactory.address);

});

