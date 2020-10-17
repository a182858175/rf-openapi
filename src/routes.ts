import { Router } from 'express';
import UserStatusController from './controllers/BILLING/userStatusController';
import CashLogController from './controllers/BILLING/cashLogController';
import baseController from './controllers/RF_World/baseController';
import generalController from './controllers/RF_World/generalController';

const routes = Router();

/**
  USERSTATUS ROUTES
*/
routes.get('/userstatus', UserStatusController.list);
routes.post('/userstatus/store', UserStatusController.store);
routes.patch('/userstatus/:id', UserStatusController.update);

/**
  CASHLOG ROUTES
*/
routes.get('/cashlog', CashLogController.list);
routes.get('/cashlog/char/:char', CashLogController.listByParam);
routes.get('/cashlog/account/:account', CashLogController.listByParam);

/**
 * BASE ROUTES
 */
routes.get('/base', baseController.list);
routes.get('/base/name/:name', baseController.listByParam);
routes.get('/base/account/:account', baseController.listByParam);

/**
 * GENERAL ROUTES
 */
routes.get('/general', generalController.list);
routes.get('/general/name/:name', generalController.listByParam);

export default routes;
