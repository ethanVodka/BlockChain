import { Input } from "./input";
import { Output } from "./output";

//トランアクション
export type Transaction = {
    id: string;
    inputs: Input[];
    outputs: Output[];
};