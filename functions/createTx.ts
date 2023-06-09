import { Input } from "../types/input.ts";
import { Output } from "../types/output.ts";
import { Tx } from "../types/tx.ts";

// Tx を作る
export function createTx(): Tx {
  // 取引 ID
  const txId = crypto.randomUUID();
  // 現在時刻
  const now = new Date().toISOString();
  // インプット
  const inputs: Input[] = [
    {
      time: now,
      from: "FurkatWallet",
      signature: "Im Ethan, agree",
    },
  ];
  // アウトプット
  const outputs: Output[] = [
    {
      to: "HasanWallet",
      amount: 20,
      fee: 3,
    },
  ];
  // Tx を組み立てる
  const tx: Tx = {
    id: txId,
    inputs: inputs,
    outputs: outputs,
  };

  return tx;
}
