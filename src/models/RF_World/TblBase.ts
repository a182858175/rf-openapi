import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("IX_tbl_base", ["name"], { unique: true })
@Index("PK_tbl_base", ["serial"], { unique: true })
@Entity("tbl_base", { schema: "dbo" })
export class TblBase {
  @PrimaryGeneratedColumn({ type: "int", name: "Serial" })
  serial: number;

  @Column("bit", { name: "DCK", default: () => "(0)" })
  dck: boolean;

  @Column("int", { name: "Lock", default: () => "(0)" })
  lock: number;

  @Column("varchar", {
    name: "Name",
    unique: true,
    length: 17,
    default: () => "'*'",
  })
  name: string;

  @Column("int", { name: "AccountSerial", default: () => "(0)" })
  accountSerial: number;

  @Column("varchar", { name: "Account", length: 17, default: () => "'*'" })
  account: string;

  @Column("int", { name: "Slot", default: () => "(0)" })
  slot: number;

  @Column("int", { name: "Race", default: () => "(0)" })
  race: number;

  @Column("char", { name: "Class", length: 4, default: () => "'000'" })
  class: string;

  @Column("int", { name: "Lv", default: () => "(0)" })
  lv: number;

  @Column("int", { name: "Dalant", default: () => "(0)" })
  dalant: number;

  @Column("int", { name: "Gold", default: () => "(0)" })
  gold: number;

  @Column("int", { name: "BaseShape", default: () => "0x00000000" })
  baseShape: number;

  @Column("int", { name: "EK0", default: () => "0xFFFFFFFF" })
  ek0: number;

  @Column("int", { name: "EU0", default: () => "0x0FFFFFFF" })
  eu0: number;

  @Column("int", { name: "EK1", default: () => "0xFFFFFFFF" })
  ek1: number;

  @Column("int", { name: "EU1", default: () => "0x0FFFFFFF" })
  eu1: number;

  @Column("int", { name: "EK2", default: () => "0xFFFFFFFF" })
  ek2: number;

  @Column("int", { name: "EU2", default: () => "0x0FFFFFFF" })
  eu2: number;

  @Column("int", { name: "EK3", default: () => "0xFFFFFFFF" })
  ek3: number;

  @Column("int", { name: "EU3", default: () => "0x0FFFFFFF" })
  eu3: number;

  @Column("int", { name: "EK4", default: () => "0xFFFFFFFF" })
  ek4: number;

  @Column("int", { name: "EU4", default: () => "0x0FFFFFFF" })
  eu4: number;

  @Column("int", { name: "EK5", default: () => "0xFFFFFFFF" })
  ek5: number;

  @Column("int", { name: "EU5", default: () => "0x0FFFFFFF" })
  eu5: number;

  @Column("int", { name: "EK6", default: () => "0xFFFFFFFF" })
  ek6: number;

  @Column("int", { name: "EU6", default: () => "0x0FFFFFFF" })
  eu6: number;

  @Column("int", { name: "EK7", default: () => "0xFFFFFFFF" })
  ek7: number;

  @Column("int", { name: "EU7", default: () => "0x0FFFFFFF" })
  eu7: number;

  @Column("int", { name: "LastConnTime", default: () => "(0)" })
  lastConnTime: number;

  @Column("datetime", { name: "CreateTime", default: () => "getdate()" })
  createTime: Date;

  @Column("datetime", { name: "DeleteTime", default: () => "(0)" })
  deleteTime: Date;

  @Column("varchar", {
    name: "DeleteName",
    nullable: true,
    length: 17,
    default: () => "'*'",
  })
  deleteName: string | null;

  @Column("int", {
    name: "FirstConnTime",
    nullable: true,
    default: () => "(0)",
  })
  firstConnTime: number | null;

  @Column("varchar", { name: "HomeServer", length: 33, default: () => "'*'" })
  homeServer: string;

  @Column("tinyint", { name: "Arrange", default: () => "(1)" })
  arrange: number;

  @Column("bigint", { name: "ES0", default: () => "(0)" })
  es0: string;

  @Column("int", { name: "ET0", default: () => "0xFFFFFFFF" })
  et0: number;

  @Column("bigint", { name: "ES1", default: () => "(0)" })
  es1: string;

  @Column("int", { name: "ET1", default: () => "0xFFFFFFFF" })
  et1: number;

  @Column("bigint", { name: "ES2", default: () => "(0)" })
  es2: string;

  @Column("int", { name: "ET2", default: () => "0xFFFFFFFF" })
  et2: number;

  @Column("bigint", { name: "ES3", default: () => "(0)" })
  es3: string;

  @Column("int", { name: "ET3", default: () => "0xFFFFFFFF" })
  et3: number;

  @Column("bigint", { name: "ES4", default: () => "(0)" })
  es4: string;

  @Column("int", { name: "ET4", default: () => "0xFFFFFFFF" })
  et4: number;

  @Column("bigint", { name: "ES5", default: () => "(0)" })
  es5: string;

  @Column("int", { name: "ET5", default: () => "0xFFFFFFFF" })
  et5: number;

  @Column("bigint", { name: "ES6", default: () => "(0)" })
  es6: string;

  @Column("int", { name: "ET6", default: () => "0xFFFFFFFF" })
  et6: number;

  @Column("bigint", { name: "ES7", default: () => "(0)" })
  es7: string;

  @Column("int", { name: "ET7", default: () => "0xFFFFFFFF" })
  et7: number;
}
