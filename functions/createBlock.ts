import { Block } from "../types/block.js";
import { Transaction } from "../types/transaction.js";
import { Validator } from "../types/validator.js";
import { calcBlockHash } from "./calcBlockHash.js";

// 新しいブロックを作る
export async function createBlock(
  prevBlock: Block,
  transaction: Transaction,
  validator: Validator,
): Promise<Block> {
  // 現在時刻
  const time = new Date().toISOString();
  // インデックス 何番目のブロックか
  const index = prevBlock.index + 1;
  // ハッシュ
  const hash = await calcBlockHash(
    index,
    time,
    prevBlock.hash,
    transaction,
    validator,
  );
  // 新しいブロック
  const newBlock: Block = {
    index: index,
    time_stamp: time,
    prev_hash: prevBlock.hash,
    hash: hash,
    transaction: transaction,
    validator: validator,
  };

  return newBlock;
}