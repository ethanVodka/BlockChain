import { Validator } from "../types/validator.ts";

export function pickWinner(): Validator {
  const v1: Validator = {
    addr: "V1Wallet",
    signature: "validator agree",
    token: 1,
  };
  const v2: Validator = {
    addr: "V2Wallet",
    signature: "validator agree",
    token: 2,
  };
  const v3: Validator = {
    addr: "V3Wallet",
    signature: "validator agree",
    token: 3,
  };
  const v4: Validator = {
    addr: "V3Wallet",
    signature: "validator agree",
    token: 4,
  };

  // バリデータの信頼性
  const candidates = [v1, v2, v2, v3, v3, v3, v4, v4, v4, v4];

  // バリデータを一人ランダムで選ぶ
  const randomIndex = Math.floor(Math.random() * candidates.length);
  const winner = candidates[randomIndex];

  console.log(`${winner.addr} is a validator`);
  return winner;
}
