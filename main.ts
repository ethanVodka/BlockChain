import { createTransaction } from "./functions/createTransaction.js";
import { pickWinner } from "./functions/pickWinner.js";
import { Block } from "./types/block.js";
import { createBlock } from "./functions/createBlock.js";

// メイン関数を実行
main();

async function main() {
  // tx を用意する
  const tx = createTransaction();

  // くじ引きでバリデーターを選ぶ
  const validator = pickWinner();

  // 1つ前のブロックを取得する
  const file = "./db/blockchain.json";
  let text = await Deno.readTextFile(file);
  const blocks: Block[] = JSON.parse(text);
  const prevBlock = blocks[blocks.length - 1];

  // 新しいブロックを作成する
  const newBlock = await createBlock(
    prevBlock,
    tx,
    validator,
  );

  // ブロックチェーンに追加
  blocks.push(newBlock);
  text = JSON.stringify(blocks, null, 2);
  const opt = { append: false, create: false };
  await Deno.writeTextFile(file, text, opt);
}