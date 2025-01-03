import { Router } from 'express';
import { customerRoute } from '../modules/customer/customer.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/customer',
    route: customerRoute,
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;