import { Router } from "express";
import { customerRoute } from "../modules/customer/customer.route";
import { categoryRoute } from "../modules/categories/category.route";
import { brandRoute } from "../modules/brands/brands.route";
import { unitRoute } from "../modules/units/unit.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/customer",
    route: customerRoute
  },
  {
    path: "/category",
    route: categoryRoute
  },
  {
    path: "/brand",
    route: brandRoute
  },
  {
    path: "/unit",
    route: unitRoute
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
