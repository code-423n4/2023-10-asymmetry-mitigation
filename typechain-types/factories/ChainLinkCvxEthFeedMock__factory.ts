/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ChainLinkCvxEthFeedMock,
  ChainLinkCvxEthFeedMockInterface,
} from "../ChainLinkCvxEthFeedMock";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "latestRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50609f8061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063feaf968c14602d575b600080fd5b60408051680100000000000000328152660606eccce6562860208201526000818301819052426060830152608082015290519081900360a00190f3fea2646970667358221220b2c0b749ccce30335074611741b2ddd0c960c995148a914e3b064ac335f2a61064736f6c63430008130033";

type ChainLinkCvxEthFeedMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ChainLinkCvxEthFeedMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ChainLinkCvxEthFeedMock__factory extends ContractFactory {
  constructor(...args: ChainLinkCvxEthFeedMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ChainLinkCvxEthFeedMock> {
    return super.deploy(overrides || {}) as Promise<ChainLinkCvxEthFeedMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ChainLinkCvxEthFeedMock {
    return super.attach(address) as ChainLinkCvxEthFeedMock;
  }
  connect(signer: Signer): ChainLinkCvxEthFeedMock__factory {
    return super.connect(signer) as ChainLinkCvxEthFeedMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ChainLinkCvxEthFeedMockInterface {
    return new utils.Interface(_abi) as ChainLinkCvxEthFeedMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChainLinkCvxEthFeedMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ChainLinkCvxEthFeedMock;
  }
}
