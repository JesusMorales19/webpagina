import Producto from "../models/producto.model.js";
import Proveedor from "../models/proveedor.model.js";

export const product = async (req, res) => {
    console.log(req.body);
    const { codigo, nombre, descuento, descripcion, estatus, proveedor } = req.body;

    try {
        // Buscar el proveedor por su identificador único
        const existingProveedor = await Proveedor.findOne({ idProveedor: proveedor });

        console.log("1", existingProveedor);
        if (!existingProveedor) {
            console.log("El proveedor no existe.");
            return res.status(400).json({ error: "El proveedor no existe." });
        }

        // El proveedor existe, continuar con la creación del producto
        const newProduct = new Producto({
            codigo,
            nombre,
            descuento,
            descripcion,
            estatus,
            proveedor,
        });

        const saveProducto = await newProduct.save();
        res.send(saveProducto);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
};
