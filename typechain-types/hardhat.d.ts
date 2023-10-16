/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AggregatorV3Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AggregatorV3Interface__factory>;
    getContractFactory(
      name: "OwnableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableUpgradeable__factory>;
    getContractFactory(
      name: "Initializable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Initializable__factory>;
    getContractFactory(
      name: "ReentrancyGuardUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ReentrancyGuardUpgradeable__factory>;
    getContractFactory(
      name: "ERC20Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Upgradeable__factory>;
    getContractFactory(
      name: "IERC20MetadataUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20MetadataUpgradeable__factory>;
    getContractFactory(
      name: "IERC20Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Upgradeable__factory>;
    getContractFactory(
      name: "ContextUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ContextUpgradeable__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "AfEth",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AfEth__factory>;
    getContractFactory(
      name: "IAfEth",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAfEth__factory>;
    getContractFactory(
      name: "IChainlinkFeed",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IChainlinkFeed__factory>;
    getContractFactory(
      name: "IClaimZap",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IClaimZap__factory>;
    getContractFactory(
      name: "ICrvEthPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICrvEthPool__factory>;
    getContractFactory(
      name: "ILockedCvx",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILockedCvx__factory>;
    getContractFactory(
      name: "ISafEth",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISafEth__factory>;
    getContractFactory(
      name: "ISnapshotDelegationRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISnapshotDelegationRegistry__factory>;
    getContractFactory(
      name: "ISwapRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISwapRouter__factory>;
    getContractFactory(
      name: "IVotiumMerkleStash",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVotiumMerkleStash__factory>;
    getContractFactory(
      name: "IVotiumStrategy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVotiumStrategy__factory>;
    getContractFactory(
      name: "IWETH",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWETH__factory>;
    getContractFactory(
      name: "ChainLinkCvxEthFeedMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ChainLinkCvxEthFeedMock__factory>;
    getContractFactory(
      name: "ChainLinkRethFeedMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ChainLinkRethFeedMock__factory>;
    getContractFactory(
      name: "ChainLinkWstFeedMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ChainLinkWstFeedMock__factory>;
    getContractFactory(
      name: "AbstractStrategy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AbstractStrategy__factory>;
    getContractFactory(
      name: "VotiumStrategy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VotiumStrategy__factory>;
    getContractFactory(
      name: "VotiumStrategyCore",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VotiumStrategyCore__factory>;

    getContractAt(
      name: "AggregatorV3Interface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AggregatorV3Interface>;
    getContractAt(
      name: "OwnableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnableUpgradeable>;
    getContractAt(
      name: "Initializable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Initializable>;
    getContractAt(
      name: "ReentrancyGuardUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ReentrancyGuardUpgradeable>;
    getContractAt(
      name: "ERC20Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Upgradeable>;
    getContractAt(
      name: "IERC20MetadataUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20MetadataUpgradeable>;
    getContractAt(
      name: "IERC20Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Upgradeable>;
    getContractAt(
      name: "ContextUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ContextUpgradeable>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "AfEth",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AfEth>;
    getContractAt(
      name: "IAfEth",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAfEth>;
    getContractAt(
      name: "IChainlinkFeed",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IChainlinkFeed>;
    getContractAt(
      name: "IClaimZap",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IClaimZap>;
    getContractAt(
      name: "ICrvEthPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICrvEthPool>;
    getContractAt(
      name: "ILockedCvx",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ILockedCvx>;
    getContractAt(
      name: "ISafEth",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISafEth>;
    getContractAt(
      name: "ISnapshotDelegationRegistry",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISnapshotDelegationRegistry>;
    getContractAt(
      name: "ISwapRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISwapRouter>;
    getContractAt(
      name: "IVotiumMerkleStash",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVotiumMerkleStash>;
    getContractAt(
      name: "IVotiumStrategy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVotiumStrategy>;
    getContractAt(
      name: "IWETH",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWETH>;
    getContractAt(
      name: "ChainLinkCvxEthFeedMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ChainLinkCvxEthFeedMock>;
    getContractAt(
      name: "ChainLinkRethFeedMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ChainLinkRethFeedMock>;
    getContractAt(
      name: "ChainLinkWstFeedMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ChainLinkWstFeedMock>;
    getContractAt(
      name: "AbstractStrategy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AbstractStrategy>;
    getContractAt(
      name: "VotiumStrategy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VotiumStrategy>;
    getContractAt(
      name: "VotiumStrategyCore",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VotiumStrategyCore>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}