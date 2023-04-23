import { Transaction } from "./transaction";
import { Validator } from "./validator";

export type Block = {
    //ブロックインデクス
    index: number;
    //ブロック生成日時
    time_stamp: string;
    //ひとつ前のブロックのハッシュ
    prev_hash: string;
    //このブロックのハッシュ
    hash: string;
    //トランザクション
    transaction: Transaction;
    //バリデータ-
    validator: Validator;
};