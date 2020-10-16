import { Router } from 'express';
import UserStatusController from './controllers/UserStatusController';
import CashLogController from './controllers/CashLogController';

const routes = Router();

routes.get('/userstatus', UserStatusController.list);
routes.post('/userstatus/store', UserStatusController.store);
routes.patch('/userstatus/:id', UserStatusController.update);

routes.get('/cashlog', CashLogController.list);
routes.get('/cashlog/account/:account', CashLogController.listByParam);
routes.get('/cashlog/char/:char', CashLogController.listByParam);

export default routes;
