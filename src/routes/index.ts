import { Router } from "express";
import { customerRoute } from "../modules/customer/customer.route";
import { categoryRoute } from "../modules/categories/category.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/customer",
    route: customerRoute
  },
  {
    path: "/category",
    route: categoryRoute
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
