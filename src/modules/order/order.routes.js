import { Router } from "express";
import { authentication } from "../../middleware/authentication.js";
import { authorization } from "../../middleware/authorization.js";
import * as oc from "./controller/order.js";
import { valid } from "../../middleware/validation.js";
import * as orderSchema from "./controller/order.valid.js";
const router = Router();
router.use("/success_url/:token", oc.success_url);
router.use("/cancel_url/:token", oc.cancel_url);
//Order routes
router.use(authentication, authorization(["user", "admin", "superadmin"]));
router.use("/add_order", valid(orderSchema.add_order), oc.add_order);
router.use("/cardToOrder", valid(orderSchema.cardToOrder), oc.cardToOrder);
// ============================================================================

export default router;
