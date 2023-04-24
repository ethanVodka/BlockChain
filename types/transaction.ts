import { Input } from "./input.ts";
import { Output } from "./output.ts";

//トランアクション
export type Transaction = {
  id: string;
  inputs: Input[];
  outputs: Output[];
};
