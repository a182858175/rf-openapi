import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tbl_CashLog", ["serial"], { unique: true })
@Entity("tbl_CashLog", { schema: "dbo" })
export class TblCashLog {
  @PrimaryGeneratedColumn({ type: "int", name: "Serial" })
  serial: number;

  @Column("varchar", { name: "Account", length: 20 })
  account: string;

  @Column("varchar", { name: "Char", length: 30 })
  char: string;

  @Column("varchar", { name: "ItemID", length: 7 })
  itemId: string;

  @Column("int", { name: "Amount" })
  amount: number;

  @Column("varchar", { name: "Server", length: 32 })
  server: string;

  @Column("bigint", { name: "UID" })
  uid: string;

  @Column("int", { name: "Cost" })
  cost: number;

  @Column("float", { name: "Discount", precision: 53 })
  discount: number;

  @Column("tinyint", { name: "Return" })
  return: number;
}
