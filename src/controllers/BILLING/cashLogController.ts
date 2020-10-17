import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { TblCashLog } from '../../models/BILLING/TblCashLog';

class cashLogController {

  async list(req: Request, res: Response) {
    const billingRepo = getRepository(TblCashLog, "BILLING");

    const logs = await billingRepo.find();
    if (!logs) {
      return res.send({ error: "Empty logs" });
    }

    return res.send(logs);
  }

  async listByParam(req: Request, res: Response) {
    const billingRepo = getRepository(TblCashLog, "BILLING");

    const url = req.url.split("/");

    const logs = await billingRepo.find({ where: `${url[2]} = '${url[3]}'` });
    if (!logs) {
      return res.status(400).send({ error: "Empty logs" });
    }

    return res.send(logs);
  }


}

export default new cashLogController();