import { ethers } from "ethers";

const TOKEN_DECIMALS = ethers.BigNumber.from("10").pow(
  ethers.BigNumber.from("18")
);
const MILLION = ethers.BigNumber.from("10").pow(ethers.BigNumber.from("6"));

const FOUR_MILLION = ethers.BigNumber.from("4")
  .mul(MILLION)
  .mul(TOKEN_DECIMALS);
const TEN_MILLION = ethers.BigNumber.from("10")
  .mul(MILLION)
  .mul(TOKEN_DECIMALS);
const TWENTY_MILLION = ethers.BigNumber.from("20")
  .mul(MILLION)
  .mul(TOKEN_DECIMALS);
const PARTNER_MAX = ethers.BigNumber.from("78")
  .mul(MILLION)
  .mul(TOKEN_DECIMALS);

const goerliConfig = {
  // Tokens
  WETH: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
  USDC: "0xd35CCeEAD182dcee0F148EbaC9447DA2c4D449c4",
  stETH: "0x1643E812aE58766192Cf7D2Cf9567dF2C37e9B7F",

  tokenWhitelist: [
    "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6", // WETH
    "0xd35CCeEAD182dcee0F148EbaC9447DA2c4D449c4", // USDC
    "0x1643E812aE58766192Cf7D2Cf9567dF2C37e9B7F", // stETH
  ],
};

export default goerliConfig;
