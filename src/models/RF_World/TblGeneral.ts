import { Column, Entity, Index } from "typeorm";

@Index("PK_tbl_general", ["serial"], { unique: true })
@Entity("tbl_general", { schema: "dbo" })
export class TblGeneral {
  @Column("int", { primary: true, name: "Serial", default: () => "(-1)" })
  serial: number;

  @Column("bit", { name: "DCK", default: () => "(0)" })
  dck: boolean;

  @Column("int", { name: "TotalPlayMin", default: () => "(0)" })
  totalPlayMin: number;

  @Column("float", { name: "Exp", precision: 53, default: () => "(0)" })
  exp: number;

  @Column("float", { name: "LossExp", precision: 53, default: () => "(0)" })
  lossExp: number;

  @Column("int", { name: "HP", default: () => "(1000)" })
  hp: number;

  @Column("int", { name: "FP", default: () => "(1000)" })
  fp: number;

  @Column("int", { name: "SP", default: () => "(1000)" })
  sp: number;

  @Column("int", { name: "DP", default: () => "(0)" })
  dp: number;

  @Column("int", { name: "Map", default: () => "(0)" })
  map: number;

  @Column("float", { name: "X", precision: 53, default: () => "(0)" })
  x: number;

  @Column("float", { name: "Y", precision: 53, default: () => "(65535)" })
  y: number;

  @Column("float", { name: "Z", precision: 53, default: () => "(0)" })
  z: number;

  @Column("int", { name: "BagNum", default: () => "(1)" })
  bagNum: number;

  @Column("int", { name: "EK0", default: () => "0xFFFFFFFF" })
  ek0: number;

  @Column("smallint", { name: "ED0", default: () => "(0)" })
  ed0: number;

  @Column("int", { name: "EK1", default: () => "0xFFFFFFFF" })
  ek1: number;

  @Column("smallint", { name: "ED1", default: () => "(0)" })
  ed1: number;

  @Column("int", { name: "EK2", default: () => "0xFFFFFFFF" })
  ek2: number;

  @Column("smallint", { name: "ED2", default: () => "(0)" })
  ed2: number;

  @Column("int", { name: "EK3", default: () => "0xFFFFFFFF" })
  ek3: number;

  @Column("smallint", { name: "ED3", default: () => "(0)" })
  ed3: number;

  @Column("int", { name: "EK4", default: () => "0xFFFFFFFF" })
  ek4: number;

  @Column("smallint", { name: "ED4", default: () => "(0)" })
  ed4: number;

  @Column("int", { name: "EK5", default: () => "0xFFFFFFFF" })
  ek5: number;

  @Column("smallint", { name: "ED5", default: () => "(0)" })
  ed5: number;

  @Column("int", { name: "F0", default: () => "0xFFFFFFFF" })
  f0: number;

  @Column("int", { name: "F1", default: () => "0xFFFFFFFF" })
  f1: number;

  @Column("int", { name: "F2", default: () => "0xFFFFFFFF" })
  f2: number;

  @Column("int", { name: "F3", default: () => "0xFFFFFFFF" })
  f3: number;

  @Column("int", { name: "F4", default: () => "0xFFFFFFFF" })
  f4: number;

  @Column("int", { name: "F5", default: () => "0xFFFFFFFF" })
  f5: number;

  @Column("int", { name: "F6", default: () => "0xFFFFFFFF" })
  f6: number;

  @Column("int", { name: "F7", default: () => "0xFFFFFFFF" })
  f7: number;

  @Column("int", { name: "F8", default: () => "0xFFFFFFFF" })
  f8: number;

  @Column("int", { name: "F9", default: () => "0xFFFFFFFF" })
  f9: number;

  @Column("int", { name: "F10", default: () => "0xFFFFFFFF" })
  f10: number;

  @Column("int", { name: "F11", default: () => "0xFFFFFFFF" })
  f11: number;

  @Column("int", { name: "F12", default: () => "0xFFFFFFFF" })
  f12: number;

  @Column("int", { name: "F13", default: () => "0xFFFFFFFF" })
  f13: number;

  @Column("int", { name: "F14", default: () => "0xFFFFFFFF" })
  f14: number;

  @Column("int", { name: "F15", default: () => "0xFFFFFFFF" })
  f15: number;

  @Column("int", { name: "F16", default: () => "0xFFFFFFFF" })
  f16: number;

  @Column("int", { name: "F17", default: () => "0xFFFFFFFF" })
  f17: number;

  @Column("int", { name: "F18", default: () => "0xFFFFFFFF" })
  f18: number;

  @Column("int", { name: "F19", default: () => "0xFFFFFFFF" })
  f19: number;

  @Column("int", { name: "F20", default: () => "0xFFFFFFFF" })
  f20: number;

  @Column("int", { name: "F21", default: () => "0xFFFFFFFF" })
  f21: number;

  @Column("int", { name: "F22", default: () => "0xFFFFFFFF" })
  f22: number;

  @Column("int", { name: "F23", default: () => "0xFFFFFFFF" })
  f23: number;

  @Column("int", { name: "F24", default: () => "0xFFFFFFFF" })
  f24: number;

  @Column("int", { name: "F25", default: () => "0xFFFFFFFF" })
  f25: number;

  @Column("int", { name: "F26", default: () => "0xFFFFFFFF" })
  f26: number;

  @Column("int", { name: "F27", default: () => "0xFFFFFFFF" })
  f27: number;

  @Column("int", { name: "F28", default: () => "0xFFFFFFFF" })
  f28: number;

  @Column("int", { name: "F29", default: () => "0xFFFFFFFF" })
  f29: number;

  @Column("int", { name: "F30", default: () => "0xFFFFFFFF" })
  f30: number;

  @Column("int", { name: "F31", default: () => "0xFFFFFFFF" })
  f31: number;

  @Column("int", { name: "F32", default: () => "0xFFFFFFFF" })
  f32: number;

  @Column("int", { name: "F33", default: () => "0xFFFFFFFF" })
  f33: number;

  @Column("int", { name: "F34", default: () => "0xFFFFFFFF" })
  f34: number;

  @Column("int", { name: "F35", default: () => "0xFFFFFFFF" })
  f35: number;

  @Column("int", { name: "F36", default: () => "0xFFFFFFFF" })
  f36: number;

  @Column("int", { name: "F37", default: () => "0xFFFFFFFF" })
  f37: number;

  @Column("int", { name: "F38", default: () => "0xFFFFFFFF" })
  f38: number;

  @Column("int", { name: "F39", default: () => "0xFFFFFFFF" })
  f39: number;

  @Column("int", { name: "F40", default: () => "0xFFFFFFFF" })
  f40: number;

  @Column("int", { name: "F41", default: () => "0xFFFFFFFF" })
  f41: number;

  @Column("int", { name: "F42", default: () => "0xFFFFFFFF" })
  f42: number;

  @Column("int", { name: "F43", default: () => "0xFFFFFFFF" })
  f43: number;

  @Column("int", { name: "F44", default: () => "0xFFFFFFFF" })
  f44: number;

  @Column("int", { name: "F45", default: () => "0xFFFFFFFF" })
  f45: number;

  @Column("int", { name: "F46", default: () => "0xFFFFFFFF" })
  f46: number;

  @Column("int", { name: "F47", default: () => "0xFFFFFFFF" })
  f47: number;

  @Column("int", { name: "F48", default: () => "0xFFFFFFFF" })
  f48: number;

  @Column("int", { name: "F49", default: () => "0xFFFFFFFF" })
  f49: number;

  @Column("int", { name: "F50", default: () => "0xFFFFFFFF" })
  f50: number;

  @Column("int", { name: "F51", default: () => "0xFFFFFFFF" })
  f51: number;

  @Column("int", { name: "F52", default: () => "0xFFFFFFFF" })
  f52: number;

  @Column("int", { name: "F53", default: () => "0xFFFFFFFF" })
  f53: number;

  @Column("int", { name: "F54", default: () => "0xFFFFFFFF" })
  f54: number;

  @Column("int", { name: "F55", default: () => "0xFFFFFFFF" })
  f55: number;

  @Column("int", { name: "F56", default: () => "0xFFFFFFFF" })
  f56: number;

  @Column("int", { name: "F57", default: () => "0xFFFFFFFF" })
  f57: number;

  @Column("int", { name: "F58", default: () => "0xFFFFFFFF" })
  f58: number;

  @Column("int", { name: "F59", default: () => "0xFFFFFFFF" })
  f59: number;

  @Column("int", { name: "F60", default: () => "0xFFFFFFFF" })
  f60: number;

  @Column("int", { name: "F61", default: () => "0xFFFFFFFF" })
  f61: number;

  @Column("int", { name: "F62", default: () => "0xFFFFFFFF" })
  f62: number;

  @Column("int", { name: "F63", default: () => "0xFFFFFFFF" })
  f63: number;

  @Column("int", { name: "F64", default: () => "0xFFFFFFFF" })
  f64: number;

  @Column("int", { name: "F65", default: () => "0xFFFFFFFF" })
  f65: number;

  @Column("int", { name: "F66", default: () => "0xFFFFFFFF" })
  f66: number;

  @Column("int", { name: "F67", default: () => "0xFFFFFFFF" })
  f67: number;

  @Column("int", { name: "F68", default: () => "0xFFFFFFFF" })
  f68: number;

  @Column("int", { name: "F69", default: () => "0xFFFFFFFF" })
  f69: number;

  @Column("int", { name: "F70", default: () => "0xFFFFFFFF" })
  f70: number;

  @Column("int", { name: "F71", default: () => "0xFFFFFFFF" })
  f71: number;

  @Column("int", { name: "F72", default: () => "0xFFFFFFFF" })
  f72: number;

  @Column("int", { name: "F73", default: () => "0xFFFFFFFF" })
  f73: number;

  @Column("int", { name: "F74", default: () => "0xFFFFFFFF" })
  f74: number;

  @Column("int", { name: "F75", default: () => "0xFFFFFFFF" })
  f75: number;

  @Column("int", { name: "F76", default: () => "0xFFFFFFFF" })
  f76: number;

  @Column("int", { name: "F77", default: () => "0xFFFFFFFF" })
  f77: number;

  @Column("int", { name: "F78", default: () => "0xFFFFFFFF" })
  f78: number;

  @Column("int", { name: "F79", default: () => "0xFFFFFFFF" })
  f79: number;

  @Column("int", { name: "F80", default: () => "0xFFFFFFFF" })
  f80: number;

  @Column("int", { name: "F81", default: () => "0xFFFFFFFF" })
  f81: number;

  @Column("int", { name: "F82", default: () => "0xFFFFFFFF" })
  f82: number;

  @Column("int", { name: "F83", default: () => "0xFFFFFFFF" })
  f83: number;

  @Column("int", { name: "F84", default: () => "0xFFFFFFFF" })
  f84: number;

  @Column("int", { name: "F85", default: () => "0xFFFFFFFF" })
  f85: number;

  @Column("int", { name: "F86", default: () => "0xFFFFFFFF" })
  f86: number;

  @Column("int", { name: "F87", default: () => "0xFFFFFFFF" })
  f87: number;

  @Column("int", { name: "F88", default: () => "0xFFFFFFFF" })
  f88: number;

  @Column("int", { name: "F89", default: () => "0xFFFFFFFF" })
  f89: number;

  @Column("int", { name: "F90", default: () => "0xFFFFFFFF" })
  f90: number;

  @Column("int", { name: "F91", default: () => "0xFFFFFFFF" })
  f91: number;

  @Column("int", { name: "F92", default: () => "0xFFFFFFFF" })
  f92: number;

  @Column("int", { name: "F93", default: () => "0xFFFFFFFF" })
  f93: number;

  @Column("int", { name: "F94", default: () => "0xFFFFFFFF" })
  f94: number;

  @Column("int", { name: "F95", default: () => "0xFFFFFFFF" })
  f95: number;

  @Column("int", { name: "F96", default: () => "0xFFFFFFFF" })
  f96: number;

  @Column("int", { name: "F97", default: () => "0xFFFFFFFF" })
  f97: number;

  @Column("int", { name: "F98", default: () => "0xFFFFFFFF" })
  f98: number;

  @Column("int", { name: "F99", default: () => "0xFFFFFFFF" })
  f99: number;

  @Column("tinyint", { name: "AK0", default: () => "0xFF" })
  ak0: number;

  @Column("bigint", { name: "AD0", default: () => "(0)" })
  ad0: string;

  @Column("int", { name: "AP0", default: () => "(0)" })
  ap0: number;

  @Column("tinyint", { name: "AK1", default: () => "0xFF" })
  ak1: number;

  @Column("bigint", { name: "AD1", default: () => "(0)" })
  ad1: string;

  @Column("int", { name: "AP1", default: () => "(0)" })
  ap1: number;

  @Column("tinyint", { name: "AK2", default: () => "0xFF" })
  ak2: number;

  @Column("bigint", { name: "AD2", default: () => "(0)" })
  ad2: string;

  @Column("int", { name: "AP2", default: () => "(0)" })
  ap2: number;

  @Column("tinyint", { name: "AK3", default: () => "0xFF" })
  ak3: number;

  @Column("bigint", { name: "AD3", default: () => "(0)" })
  ad3: string;

  @Column("int", { name: "AP3", default: () => "(0)" })
  ap3: number;

  @Column("int", { name: "WM0", default: () => "(0)" })
  wm0: number;

  @Column("int", { name: "WM1", default: () => "(0)" })
  wm1: number;

  @Column("int", { name: "DM", default: () => "(0)" })
  dm: number;

  @Column("int", { name: "PM", default: () => "(0)" })
  pm: number;

  @Column("int", { name: "MI0", default: () => "(0)" })
  mi0: number;

  @Column("int", { name: "MI1", default: () => "(0)" })
  mi1: number;

  @Column("int", { name: "MI2", default: () => "(0)" })
  mi2: number;

  @Column("int", { name: "SR", default: () => "(0)" })
  sr: number;

  @Column("int", { name: "FM0", default: () => "(0)" })
  fm0: number;

  @Column("int", { name: "FM1", default: () => "(0)" })
  fm1: number;

  @Column("int", { name: "FM2", default: () => "(0)" })
  fm2: number;

  @Column("int", { name: "FM3", default: () => "(0)" })
  fm3: number;

  @Column("int", { name: "FM4", default: () => "(0)" })
  fm4: number;

  @Column("int", { name: "FM5", default: () => "(0)" })
  fm5: number;

  @Column("int", { name: "FM6", default: () => "(0)" })
  fm6: number;

  @Column("int", { name: "FM7", default: () => "(0)" })
  fm7: number;

  @Column("int", { name: "FM8", default: () => "(0)" })
  fm8: number;

  @Column("int", { name: "FM9", default: () => "(0)" })
  fm9: number;

  @Column("int", { name: "FM10", default: () => "(0)" })
  fm10: number;

  @Column("int", { name: "FM11", default: () => "(0)" })
  fm11: number;

  @Column("int", { name: "FM12", default: () => "(0)" })
  fm12: number;

  @Column("int", { name: "FM13", default: () => "(0)" })
  fm13: number;

  @Column("int", { name: "FM14", default: () => "(0)" })
  fm14: number;

  @Column("int", { name: "FM15", default: () => "(0)" })
  fm15: number;

  @Column("int", { name: "FM16", default: () => "(0)" })
  fm16: number;

  @Column("int", { name: "FM17", default: () => "(0)" })
  fm17: number;

  @Column("int", { name: "FM18", default: () => "(0)" })
  fm18: number;

  @Column("int", { name: "FM19", default: () => "(0)" })
  fm19: number;

  @Column("int", { name: "FM20", default: () => "(0)" })
  fm20: number;

  @Column("int", { name: "FM21", default: () => "(0)" })
  fm21: number;

  @Column("int", { name: "FM22", default: () => "(0)" })
  fm22: number;

  @Column("int", { name: "FM23", default: () => "(0)" })
  fm23: number;

  @Column("int", { name: "SM0", default: () => "(0)" })
  sm0: number;

  @Column("int", { name: "SM1", default: () => "(0)" })
  sm1: number;

  @Column("int", { name: "SM2", default: () => "(0)" })
  sm2: number;

  @Column("int", { name: "SM3", default: () => "(0)" })
  sm3: number;

  @Column("int", { name: "SM4", default: () => "(0)" })
  sm4: number;

  @Column("int", { name: "SM5", default: () => "(0)" })
  sm5: number;

  @Column("int", { name: "SM6", default: () => "(0)" })
  sm6: number;

  @Column("int", { name: "SM7", default: () => "(0)" })
  sm7: number;

  @Column("int", { name: "SM8", default: () => "(0)" })
  sm8: number;

  @Column("int", { name: "SM9", default: () => "(0)" })
  sm9: number;

  @Column("int", { name: "SM10", default: () => "(0)" })
  sm10: number;

  @Column("int", { name: "SM11", default: () => "(0)" })
  sm11: number;

  @Column("int", { name: "SM12", default: () => "(0)" })
  sm12: number;

  @Column("int", { name: "SM13", default: () => "(0)" })
  sm13: number;

  @Column("int", { name: "SM14", default: () => "(0)" })
  sm14: number;

  @Column("int", { name: "SM15", default: () => "(0)" })
  sm15: number;

  @Column("int", { name: "SM16", default: () => "(0)" })
  sm16: number;

  @Column("int", { name: "SM17", default: () => "(0)" })
  sm17: number;

  @Column("int", { name: "SM18", default: () => "(0)" })
  sm18: number;

  @Column("int", { name: "SM19", default: () => "(0)" })
  sm19: number;

  @Column("int", { name: "SM20", default: () => "(0)" })
  sm20: number;

  @Column("int", { name: "SM21", default: () => "(0)" })
  sm21: number;

  @Column("int", { name: "SM22", default: () => "(0)" })
  sm22: number;

  @Column("int", { name: "SM23", default: () => "(0)" })
  sm23: number;

  @Column("int", { name: "SM24", default: () => "(0)" })
  sm24: number;

  @Column("int", { name: "SM25", default: () => "(0)" })
  sm25: number;

  @Column("int", { name: "SM26", default: () => "(0)" })
  sm26: number;

  @Column("int", { name: "SM27", default: () => "(0)" })
  sm27: number;

  @Column("int", { name: "SM28", default: () => "(0)" })
  sm28: number;

  @Column("int", { name: "SM29", default: () => "(0)" })
  sm29: number;

  @Column("int", { name: "SM30", default: () => "(0)" })
  sm30: number;

  @Column("int", { name: "SM31", default: () => "(0)" })
  sm31: number;

  @Column("int", { name: "SM32", default: () => "(0)" })
  sm32: number;

  @Column("int", { name: "SM33", default: () => "(0)" })
  sm33: number;

  @Column("int", { name: "SM34", default: () => "(0)" })
  sm34: number;

  @Column("int", { name: "SM35", default: () => "(0)" })
  sm35: number;

  @Column("int", { name: "SM36", default: () => "(0)" })
  sm36: number;

  @Column("int", { name: "SM37", default: () => "(0)" })
  sm37: number;

  @Column("int", { name: "SM38", default: () => "(0)" })
  sm38: number;

  @Column("int", { name: "SM39", default: () => "(0)" })
  sm39: number;

  @Column("int", { name: "SM40", default: () => "(0)" })
  sm40: number;

  @Column("int", { name: "SM41", default: () => "(0)" })
  sm41: number;

  @Column("int", { name: "SM42", default: () => "(0)" })
  sm42: number;

  @Column("int", { name: "SM43", default: () => "(0)" })
  sm43: number;

  @Column("int", { name: "SM44", default: () => "(0)" })
  sm44: number;

  @Column("int", { name: "SM45", default: () => "(0)" })
  sm45: number;

  @Column("int", { name: "SM46", default: () => "(0)" })
  sm46: number;

  @Column("int", { name: "SM47", default: () => "(0)" })
  sm47: number;

  @Column("int", { name: "SM48", default: () => "(0)" })
  sm48: number;

  @Column("int", { name: "SM49", default: () => "(0)" })
  sm49: number;

  @Column("varchar", { name: "LeftResList", length: 160, default: () => "'*'" })
  leftResList: string;

  @Column("smallint", { name: "Class0", default: () => "(-1)" })
  class0: number;

  @Column("smallint", { name: "Class1", default: () => "(-1)" })
  class1: number;

  @Column("smallint", { name: "Class2", default: () => "(-1)" })
  class2: number;

  @Column("int", { name: "ClassInitCnt", default: () => "(0)" })
  classInitCnt: number;

  @Column("tinyint", { name: "LastClassGrade", default: () => "(0)" })
  lastClassGrade: number;

  @Column("float", { name: "PvpPoint", precision: 53, default: () => "(0)" })
  pvpPoint: number;

  @Column("float", { name: "PvpCashBag", precision: 53, default: () => "(0)" })
  pvpCashBag: number;

  @Column("varchar", { name: "BindMapCode", length: 12, default: () => "'0'" })
  bindMapCode: string;

  @Column("varchar", { name: "BindDummy", length: 12, default: () => "'0'" })
  bindDummy: string;

  @Column("int", {
    name: "GuildSerial",
    nullable: true,
    default: () => "0xFFFFFFFF",
  })
  guildSerial: number | null;

  @Column("tinyint", {
    name: "GuildGrade",
    nullable: true,
    default: () => "0xFF",
  })
  guildGrade: number | null;

  @Column("smallint", {
    name: "GuildRank",
    nullable: true,
    default: () => "0xFFFF",
  })
  guildRank: number | null;

  @Column("float", { name: "PvP_0", precision: 53, default: () => "(0)" })
  pvP_0: number;

  @Column("int", { name: "PK_0", default: () => "(0)" })
  pk_0: number;

  @Column("float", { name: "PvP_1", precision: 53, default: () => "(0)" })
  pvP_1: number;

  @Column("int", { name: "PK_1", default: () => "(0)" })
  pk_1: number;

  @Column("float", { name: "PvP_2", precision: 53, default: () => "(0)" })
  pvP_2: number;

  @Column("int", { name: "PK_2", default: () => "(0)" })
  pk_2: number;

  @Column("int", { name: "CharacterGrade", default: () => "(0)" })
  characterGrade: number;

  @Column("int", { name: "Die_0", default: () => "(0)" })
  die_0: number;

  @Column("int", { name: "Die_1", default: () => "(0)" })
  die_1: number;

  @Column("int", { name: "Die_2", default: () => "(0)" })
  die_2: number;

  @Column("datetime", { name: "tmRaceBossVote", default: () => "'1990-01-01'" })
  tmRaceBossVote: Date;

  @Column("int", { name: "TakeLastMentalTicket", default: () => "(0)" })
  takeLastMentalTicket: number;

  @Column("int", { name: "TakeLastCriTicket", default: () => "(0)" })
  takeLastCriTicket: number;

  @Column("int", { name: "RDDelay", default: () => "(0)" })
  rdDelay: number;

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

  @Column("bigint", { name: "AS0", default: () => "(0)" })
  as0: string;

  @Column("bigint", { name: "AS1", default: () => "(0)" })
  as1: string;

  @Column("bigint", { name: "AS2", default: () => "(0)" })
  as2: string;

  @Column("bigint", { name: "AS3", default: () => "(0)" })
  as3: string;

  @Column("bigint", { name: "FS0", default: () => "(0)" })
  fs0: string;

  @Column("bigint", { name: "FS1", default: () => "(0)" })
  fs1: string;

  @Column("bigint", { name: "FS2", default: () => "(0)" })
  fs2: string;

  @Column("bigint", { name: "FS3", default: () => "(0)" })
  fs3: string;

  @Column("bigint", { name: "FS4", default: () => "(0)" })
  fs4: string;

  @Column("bigint", { name: "FS5", default: () => "(0)" })
  fs5: string;

  @Column("bigint", { name: "FS6", default: () => "(0)" })
  fs6: string;

  @Column("bigint", { name: "FS7", default: () => "(0)" })
  fs7: string;

  @Column("bigint", { name: "FS8", default: () => "(0)" })
  fs8: string;

  @Column("bigint", { name: "FS9", default: () => "(0)" })
  fs9: string;

  @Column("bigint", { name: "FS10", default: () => "(0)" })
  fs10: string;

  @Column("bigint", { name: "FS11", default: () => "(0)" })
  fs11: string;

  @Column("bigint", { name: "FS12", default: () => "(0)" })
  fs12: string;

  @Column("bigint", { name: "FS13", default: () => "(0)" })
  fs13: string;

  @Column("bigint", { name: "FS14", default: () => "(0)" })
  fs14: string;

  @Column("bigint", { name: "FS15", default: () => "(0)" })
  fs15: string;

  @Column("bigint", { name: "FS16", default: () => "(0)" })
  fs16: string;

  @Column("bigint", { name: "FS17", default: () => "(0)" })
  fs17: string;

  @Column("bigint", { name: "FS18", default: () => "(0)" })
  fs18: string;

  @Column("bigint", { name: "FS19", default: () => "(0)" })
  fs19: string;

  @Column("bigint", { name: "FS20", default: () => "(0)" })
  fs20: string;

  @Column("bigint", { name: "FS21", default: () => "(0)" })
  fs21: string;

  @Column("bigint", { name: "FS22", default: () => "(0)" })
  fs22: string;

  @Column("bigint", { name: "FS23", default: () => "(0)" })
  fs23: string;

  @Column("bigint", { name: "FS24", default: () => "(0)" })
  fs24: string;

  @Column("bigint", { name: "FS25", default: () => "(0)" })
  fs25: string;

  @Column("bigint", { name: "FS26", default: () => "(0)" })
  fs26: string;

  @Column("bigint", { name: "FS27", default: () => "(0)" })
  fs27: string;

  @Column("bigint", { name: "FS28", default: () => "(0)" })
  fs28: string;

  @Column("bigint", { name: "FS29", default: () => "(0)" })
  fs29: string;

  @Column("bigint", { name: "FS30", default: () => "(0)" })
  fs30: string;

  @Column("bigint", { name: "FS31", default: () => "(0)" })
  fs31: string;

  @Column("bigint", { name: "FS32", default: () => "(0)" })
  fs32: string;

  @Column("bigint", { name: "FS33", default: () => "(0)" })
  fs33: string;

  @Column("bigint", { name: "FS34", default: () => "(0)" })
  fs34: string;

  @Column("bigint", { name: "FS35", default: () => "(0)" })
  fs35: string;

  @Column("bigint", { name: "FS36", default: () => "(0)" })
  fs36: string;

  @Column("bigint", { name: "FS37", default: () => "(0)" })
  fs37: string;

  @Column("bigint", { name: "FS38", default: () => "(0)" })
  fs38: string;

  @Column("bigint", { name: "FS39", default: () => "(0)" })
  fs39: string;

  @Column("bigint", { name: "FS40", default: () => "(0)" })
  fs40: string;

  @Column("bigint", { name: "FS41", default: () => "(0)" })
  fs41: string;

  @Column("bigint", { name: "FS42", default: () => "(0)" })
  fs42: string;

  @Column("bigint", { name: "FS43", default: () => "(0)" })
  fs43: string;

  @Column("bigint", { name: "FS44", default: () => "(0)" })
  fs44: string;

  @Column("bigint", { name: "FS45", default: () => "(0)" })
  fs45: string;

  @Column("bigint", { name: "FS46", default: () => "(0)" })
  fs46: string;

  @Column("bigint", { name: "FS47", default: () => "(0)" })
  fs47: string;

  @Column("bigint", { name: "FS48", default: () => "(0)" })
  fs48: string;

  @Column("bigint", { name: "FS49", default: () => "(0)" })
  fs49: string;

  @Column("bigint", { name: "FS50", default: () => "(0)" })
  fs50: string;

  @Column("bigint", { name: "FS51", default: () => "(0)" })
  fs51: string;

  @Column("bigint", { name: "FS52", default: () => "(0)" })
  fs52: string;

  @Column("bigint", { name: "FS53", default: () => "(0)" })
  fs53: string;

  @Column("bigint", { name: "FS54", default: () => "(0)" })
  fs54: string;

  @Column("bigint", { name: "FS55", default: () => "(0)" })
  fs55: string;

  @Column("bigint", { name: "FS56", default: () => "(0)" })
  fs56: string;

  @Column("bigint", { name: "FS57", default: () => "(0)" })
  fs57: string;

  @Column("bigint", { name: "FS58", default: () => "(0)" })
  fs58: string;

  @Column("bigint", { name: "FS59", default: () => "(0)" })
  fs59: string;

  @Column("bigint", { name: "FS60", default: () => "(0)" })
  fs60: string;

  @Column("bigint", { name: "FS61", default: () => "(0)" })
  fs61: string;

  @Column("bigint", { name: "FS62", default: () => "(0)" })
  fs62: string;

  @Column("bigint", { name: "FS63", default: () => "(0)" })
  fs63: string;

  @Column("bigint", { name: "FS64", default: () => "(0)" })
  fs64: string;

  @Column("bigint", { name: "FS65", default: () => "(0)" })
  fs65: string;

  @Column("bigint", { name: "FS66", default: () => "(0)" })
  fs66: string;

  @Column("bigint", { name: "FS67", default: () => "(0)" })
  fs67: string;

  @Column("bigint", { name: "FS68", default: () => "(0)" })
  fs68: string;

  @Column("bigint", { name: "FS69", default: () => "(0)" })
  fs69: string;

  @Column("bigint", { name: "FS70", default: () => "(0)" })
  fs70: string;

  @Column("bigint", { name: "FS71", default: () => "(0)" })
  fs71: string;

  @Column("bigint", { name: "FS72", default: () => "(0)" })
  fs72: string;

  @Column("bigint", { name: "FS73", default: () => "(0)" })
  fs73: string;

  @Column("bigint", { name: "FS74", default: () => "(0)" })
  fs74: string;

  @Column("bigint", { name: "FS75", default: () => "(0)" })
  fs75: string;

  @Column("bigint", { name: "FS76", default: () => "(0)" })
  fs76: string;

  @Column("bigint", { name: "FS77", default: () => "(0)" })
  fs77: string;

  @Column("bigint", { name: "FS78", default: () => "(0)" })
  fs78: string;

  @Column("bigint", { name: "FS79", default: () => "(0)" })
  fs79: string;

  @Column("bigint", { name: "FS80", default: () => "(0)" })
  fs80: string;

  @Column("bigint", { name: "FS81", default: () => "(0)" })
  fs81: string;

  @Column("bigint", { name: "FS82", default: () => "(0)" })
  fs82: string;

  @Column("bigint", { name: "FS83", default: () => "(0)" })
  fs83: string;

  @Column("bigint", { name: "FS84", default: () => "(0)" })
  fs84: string;

  @Column("bigint", { name: "FS85", default: () => "(0)" })
  fs85: string;

  @Column("bigint", { name: "FS86", default: () => "(0)" })
  fs86: string;

  @Column("bigint", { name: "FS87", default: () => "(0)" })
  fs87: string;

  @Column("bigint", { name: "FS88", default: () => "(0)" })
  fs88: string;

  @Column("bigint", { name: "FS89", default: () => "(0)" })
  fs89: string;

  @Column("bigint", { name: "FS90", default: () => "(0)" })
  fs90: string;

  @Column("bigint", { name: "FS91", default: () => "(0)" })
  fs91: string;

  @Column("bigint", { name: "FS92", default: () => "(0)" })
  fs92: string;

  @Column("bigint", { name: "FS93", default: () => "(0)" })
  fs93: string;

  @Column("bigint", { name: "FS94", default: () => "(0)" })
  fs94: string;

  @Column("bigint", { name: "FS95", default: () => "(0)" })
  fs95: string;

  @Column("bigint", { name: "FS96", default: () => "(0)" })
  fs96: string;

  @Column("bigint", { name: "FS97", default: () => "(0)" })
  fs97: string;

  @Column("bigint", { name: "FS98", default: () => "(0)" })
  fs98: string;

  @Column("bigint", { name: "FS99", default: () => "(0)" })
  fs99: string;

  @Column("int", { name: "MaxLevel", default: () => "(0)" })
  maxLevel: number;

  @Column("tinyint", { name: "GuildStatus", default: () => "(0)" })
  guildStatus: number;
}
