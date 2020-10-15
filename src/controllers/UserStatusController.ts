import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { tbl_UserStatus } from '../models/BILLING/TblUserStatus';
import { format } from 'date-fns';

class UserStatusController {
  async list(req: Request, res: Response) {
    const billingRepo = getRepository(tbl_UserStatus, 'BILLING');

    const userStatus = await billingRepo.find();
    res.send(userStatus);
  }

  async store(req: Request, res: Response) {
    const billingRepo = getRepository(tbl_UserStatus, 'BILLING');

    const { id, cash, amount_days } = req.body;

    const userExists = await billingRepo.findOne({
      where: {
        id,
      },
    });
    if (userExists) {
      return res.status(400)
        .send({
          error: 'User already exists try update route',
        });
    }

    let end = new Date(Date.now());
    const begin = new Date(Date.now());
    if (amount_days !== 0) {
      end.setDate(end.getDate() + amount_days);
    }

    const user = billingRepo.create({
      id,
      cash,
      status: 1,
      dtStartPrem: begin,
      dtEndPrem: end
    });

    billingRepo.save(user);

    res.send(user);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { cash, status, amount_days } = req.body;

    const billingRepo = getRepository(tbl_UserStatus, 'BILLING');

    const user = await billingRepo.findOne({ where: { id } });
    if (!user) {
      return res.status(400).send({ error: "User doesn't exists" })
    }

    let end = new Date(Date.now());
    if (amount_days !== 0 && amount_days) {
      end.setDate(end.getDate() + amount_days);
    }

    if (cash !== 0 && cash) {
      user.cash += cash;
    }

    if (status) {
      user.status = status;
    }

    user.dtEndPrem = amount_days ? end : user.dtEndPrem;
    billingRepo.save(user);

    res.send({ success: "User updated" })

  }
}

export default new UserStatusController();
