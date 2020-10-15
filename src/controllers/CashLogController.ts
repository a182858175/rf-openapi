import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { TblCashLog } from '../models/BILLING/TblCashLog';

class CashLogController {

  async list(req: Request, res: Response) {
    const billingRepo = getRepository(TblCashLog, "BILLING");

    const logs = await billingRepo.find();
    if (!logs) {
      return res.send({ error: "Empty logs" });
    }

    return res.send({ logs });
  }

}

export default new CashLogController();