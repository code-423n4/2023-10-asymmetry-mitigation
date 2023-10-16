/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type ExactInputSingleParamsStruct = {
  tokenIn: string;
  tokenOut: string;
  fee: BigNumberish;
  recipient: string;
  amountIn: BigNumberish;
  amountOutMinimum: BigNumberish;
  sqrtPriceLimitX96: BigNumberish;
};

export type ExactInputSingleParamsStructOutput = [
  string,
  string,
  number,
  string,
  BigNumber,
  BigNumber,
  BigNumber
] & {
  tokenIn: string;
  tokenOut: string;
  fee: number;
  recipient: string;
  amountIn: BigNumber;
  amountOutMinimum: BigNumber;
  sqrtPriceLimitX96: BigNumber;
};

export interface ISwapRouterInterface extends utils.Interface {
  functions: {
    "exactInputSingle((address,address,uint24,address,uint256,uint256,uint160))": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "exactInputSingle",
    values: [ExactInputSingleParamsStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "exactInputSingle",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ISwapRouter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ISwapRouterInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    exactInputSingle(
      params: ExactInputSingleParamsStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  exactInputSingle(
    params: ExactInputSingleParamsStruct,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    exactInputSingle(
      params: ExactInputSingleParamsStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    exactInputSingle(
      params: ExactInputSingleParamsStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    exactInputSingle(
      params: ExactInputSingleParamsStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
