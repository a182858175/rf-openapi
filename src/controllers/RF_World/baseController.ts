import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { TblBase } from '../../models/RF_World/TblBase';

class baseController {

  async list(req: Request, res: Response) {
    const worldRepo = getRepository(TblBase, "RF_World");

    const players = await worldRepo.find();
    if (!players) {
      return res.status(400).send({ error: "Failed" })
    }

    res.send(players);

  }

  async listByParam(req: Request, res: Response) {
    const worldRepo = getRepository(TblBase, "RF_World");

    const url = req.url.split("/");

    const players = await worldRepo.find({ where: `${url[2]} = '${url[3]}'` });
    if (!players) {
      return res.status(400).send({ error: "Failed" })
    }

    res.send(players);

  }

}

export default new baseController();