import Proveedor from "../models/proveedor.model.js";
import Producto from "../models/producto.model.js";  // Importa el modelo de producto

export const bajaProveedor = async (req, res) => {
    const { idProveedor } = req.params;

    try {
        const proveedor = await Proveedor.findOne({ idProveedor });

        if (!proveedor) {
            return res.status(404).json({ error: "Proveedor no encontrado." });
        }

        if (!proveedor.status) {
            return res.status(400).json({ error: "El proveedor ya está dado de baja." });
        }


const productosActivos = await Producto.findOne({ proveedor: idProveedor, estatus: true });


        if (productosActivos) {
            return res.status(400).json({ error: "No puedes dar de baja al proveedor mientras haya productos activos." });
        }
        proveedor.status = false;
        proveedor.bajaFecha = new Date();

        const saveProveedor = await proveedor.save();

        res.json(saveProveedor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
};
