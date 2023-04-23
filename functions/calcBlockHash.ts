import { Transaction } from "../types/transaction.js";
import { Validator } from "../types/validator.js";

/// Hash (SHA256)
export async function hash(str: string): Promise<string> {
  const u8Ary = new TextEncoder().encode(str);
  const digest = await crypto.subtle.digest("SHA-256", u8Ary);
  const rawHash = Array.from(new Uint8Array(digest));
  return rawHash.map((b) => b.toString(16).padStart(2, "0")).join("");
}

// ブロックのハッシュを計算する
export async function calcBlockHash(
    index: number,
    time: string,
    prev_hash: string,
    transaction: Transaction,
    validator: Validator,
  ): Promise<string> {
    // ブロックの中身を文字にして繋げる
    const str = index.toString() +
      time +
      prev_hash +
      JSON.stringify(transaction) +
      JSON.stringify(validator);
  
    return await hash(str);
  }