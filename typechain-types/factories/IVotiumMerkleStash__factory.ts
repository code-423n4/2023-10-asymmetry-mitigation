/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IVotiumMerkleStash,
  IVotiumMerkleStashInterface,
} from "../IVotiumMerkleStash";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bytes32[]",
            name: "merkleProof",
            type: "bytes32[]",
          },
        ],
        internalType: "struct IVotiumMerkleStash.ClaimParam[]",
        name: "claims",
        type: "tuple[]",
      },
    ],
    name: "claimMulti",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IVotiumMerkleStash__factory {
  static readonly abi = _abi;
  static createInterface(): IVotiumMerkleStashInterface {
    return new utils.Interface(_abi) as IVotiumMerkleStashInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IVotiumMerkleStash {
    return new Contract(address, _abi, signerOrProvider) as IVotiumMerkleStash;
  }
}