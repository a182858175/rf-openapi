import { Column, Entity, Index } from "typeorm";

@Index("PK_tbl_cashList", ["id"], { unique: true })
@Entity("tbl_cashList", { schema: "dbo" })
export class TblCashList {
  @Column("varchar", { primary: true, name: "id", length: 7 })
  id: string;

  @Column("varchar", { name: "name", length: 50 })
  name: string;

  @Column("nchar", { name: "cost", length: 10 })
  cost: string;
}
