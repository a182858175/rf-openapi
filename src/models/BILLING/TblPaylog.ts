import { Column, Entity, Index } from "typeorm";

@Index("PK_tbl_paylog", ["payId"], { unique: true })
@Entity("tbl_paylog", { schema: "dbo" })
export class TblPaylog {
  @Column("bigint", { primary: true, name: "PayID" })
  payId: string;

  @Column("varchar", { name: "UserID", nullable: true, length: 24 })
  userId: string | null;

  @Column("float", { name: "sum", precision: 53 })
  sum: number;

  @Column("bit", { name: "accept", default: () => "(0)" })
  accept: boolean;
}
