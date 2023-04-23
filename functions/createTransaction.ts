import { Input } from "../types/input";
import { Output } from "../types/output";
import { Transaction } from "../types/transaction";

// Tx を作る
export function createTransaction(): Transaction {
    // 取引 ID
    const txId = crypto.randomUUID();
    // 現在時刻
    const now = new Date().toISOString();
    // インプット
    const inputs: Input[] = [
      {
        time_stamp: now,
        from: "TaroWallet",
        signature: "私は太郎です。コインを花子さんにあげることに同意します",
      },
    ];
    // アウトプット
    const outputs: Output[] = [
      {
        to: "HanakoWallet",
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