import { Router } from "express";
import { login, register } from "../controllers/auth.controller.js";
import { product } from "../controllers/producto.controller.js";
import { proveedor } from "../controllers/proveedor.controller.js";
import { getAllProducts } from "../controllers/getAllProducts.controller.js";
import { getAllProveedors } from "../controllers/getAllProveedors.controller.js";
import { updateProduct } from "../controllers/updateProducto.controller.js";
import { updateProveedors } from "../controllers/updateProveedor.controller.js";
import { bajaProducto } from "../controllers/bajaProducto.controller.js";
import { bajaProveedor } from "../controllers/bajaProveedor.controller.js";

const router = Router();

//router.post("/register", register);
router.post("/login", login);
router.post("/register", register);
router.post("/producto", product);
router.post("/proveedor", proveedor);
router.get("/productos", getAllProducts);
router.get("/proveedores", getAllProveedors)
router.put("/productos/:codigo", updateProduct);
router.put("/provedores/:id_proveedor", updateProveedors);
router.delete("/bajaproducto/:codigo", bajaProducto );
router.delete("/bajaproveedor/:idProveedor", bajaProveedor);

export default router;
