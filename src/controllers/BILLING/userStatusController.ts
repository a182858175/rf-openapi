import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { tbl_UserStatus } from '../../models/BILLING/TblUserStatus';
import * as yup from 'yup';

class userStatusController {
  async list(req: Request, res: Response) {
    const billingRepo = getRepository(tbl_UserStatus, 'BILLING');

    const userStatus = await billingRepo.find();
    res.send(userStatus);
  }

  async store(req: Request, res: Response) {
    /**
     * Validates data sent by the client
     */
    const schema = yup.object().shape({
      id: yup.string().required(),
      status: yup.string().required(),
      dtStartPrem: yup.date().required(),
      dtEndPrem: yup.date().required(),
      cash: yup.number().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).send({ error: "Invalid params" });
    }

    const billingRepo = getRepository(tbl_UserStatus, 'BILLING');

    const { id, status, dtStartPrem, dtEndPrem, cash } = req.body;

    /**
     * Check if user already exists
     */
    const userExists = await billingRepo.findOne({ where: { id } });

    if (userExists) {
      return res.status(400).send({ error: 'User already exists try update route' });
    }

    /**
     * Create user instance and save
     */
    const user = billingRepo.create({
      id,
      cash,
      status,
      dtStartPrem,
      dtEndPrem
    });

    await billingRepo.save(user)
      .then(() => res.send(user))
      .catch(err => res.status(400).send({ error: "Failed to insert, check all your fields" }));
  }

  async update(req: Request, res: Response) {
    /**
     * Validates data sent by the client
     */

    const { id } = req.params;
    const args = ['cash', 'status', 'dtStartPrem', 'dtEndPrem']

    const billingRepo = getRepository(tbl_UserStatus, 'BILLING');

    /**
     * Check if user exists
     */
    const user = await billingRepo.findOne({ where: { id } });
    if (!user) {
      return res.status(400).send({ error: "User doesn't exists" })
    }

    /**
     * Loop through object, validates if params are allowed and increments if cash
     */
    Object.keys(req.body).forEach(param => {
      if (args.includes(param)) {
        user[param] = (param === 'cash') ? (user[param] + req.body[param]) : (req.body[param]);
      }
    });

    billingRepo.save(user);

    await billingRepo.save(user)
      .then(() => res.send(user))
      .catch(err => res.status(400).send({ error: "Failed to update, check all your fields" }));

  }
}

export default new userStatusController();
