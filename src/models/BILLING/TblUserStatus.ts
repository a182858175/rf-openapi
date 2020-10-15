import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tbl_UserStatus", ["id"], { unique: true })
@Entity("tbl_UserStatus", {
  schema: "dbo",
  database: "BILLING"
})
export class tbl_UserStatus {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "serial"
  })
  serial: number;

  @Column("varchar", {
    primary: true,
    name: "id",
    length: 16
  })
  id: string;

  @Column("int", { name: "Status" })
  status: number;

  @Column("datetime", {
    name: "DTStartPrem",
    nullable: true
  })
  dtStartPrem: Date | null;

  @Column("datetime", {
    name: "DTEndPrem",
    nullable: true
  })
  dtEndPrem: Date | null;

  @Column("int", {
    name: "Cash",
    default: () => "(0)"
  })
  cash: number;
}
