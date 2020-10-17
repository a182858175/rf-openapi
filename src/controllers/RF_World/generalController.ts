import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { TblBase } from '../../models/RF_World/TblBase';
import { TblGeneral } from '../../models/RF_World/TblGeneral';

class generalController {

  async list(req: Request, res: Response) {
    const worldRepo = getRepository(TblGeneral, "RF_World");

    const players = await worldRepo.find();
    if (!players) {
      return res.status(400).send({ error: "Failed" });
    }

    res.send(players);

  }

  async listByParam(req: Request, res: Response) {
    const generalRepo = getRepository(TblGeneral, "RF_World");
    const baseRepo = getRepository(TblBase, "RF_World");

    const { name } = req.params;

    const char = await baseRepo.findOne({ where: { name } });
    if (!char) {
      return res.status(400).send({ error: "User doesn't exists" });
    }

    const players = await generalRepo.findOne({ where: { serial: char.serial } });
    if (!players) {
      return res.status(400).send({ error: "Failed" });
    }

    res.send(players);

  }

}

export default new generalController();