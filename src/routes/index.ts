import { Router } from 'express';

const router = Router();

const moduleRoutes = [
  {
    path: '/customer',
    route: s,
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;