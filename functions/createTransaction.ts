import { Input } from "../types/input.ts";
import { Output } from "../types/output.ts";
import { Transaction } from "../types/transaction.ts";

// Tx を作る
export function createTransaction(): Transaction {
  // 取引 ID
  const txId = crypto.randomUUID();
  // 現在時刻
  const now = new Date().toISOString();
  // インプット
  const inputs: Input[] = [
    {
      time: now,
      from: "EthanWallet",
      signature: "Im ethan, agree",
    },
  ];
  // アウトプット
  const outputs: Output[] = [
    {
      to: "OsumanWallet",
      amount: 20,
      fee: 3,
    },
  ];
  // Tx を組み立てる
  const tx: Transaction = {
    id: txId,
    inputs: inputs,
    outputs: outputs,
  };

  return tx;
}
