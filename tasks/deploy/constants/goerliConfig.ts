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

const TEAM_MULTISIG = "0xb074ec6c37659525EEf2Fb44478077901F878012";
const TEAM_EOA = "0xf99bCc95a28DF13B5Ac74Be303D0b3DF79C2FaD4";

const goerliConfig = {
  // Chain const
  lzChainId: 10121,
  lzEndpoint: "0xbfD2135BFfbb0B5378b56643c2Df8a87552Bfa23",

  // Tokens
  WETH: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
  USDC: "0xd35CCeEAD182dcee0F148EbaC9447DA2c4D449c4",

  // Addresses
  teamEOA: TEAM_EOA,
  teamMultisig: TEAM_MULTISIG,
  emergencyCouncil: "0xcC2D01030eC2cd187346F70bFc483F24488C32E8",

  merkleRoot:
    "0xbb99a09fb3b8499385659e82a8da93596dd07082fe86981ec06c83181dee489f",
  tokenWhitelist: [
    "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6", // WETH
    "0xd35CCeEAD182dcee0F148EbaC9447DA2c4D449c4", // USDC
    "0x1643E812aE58766192Cf7D2Cf9567dF2C37e9B7F", // stETH
  ],
  partnerAddrs: [
    TEAM_EOA, // VELO
  ],
  partnerAmts: [
    TEN_MILLION,
  ],
  partnerMax: PARTNER_MAX,
};

export default goerliConfig;
