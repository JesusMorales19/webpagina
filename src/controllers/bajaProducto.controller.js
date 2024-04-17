import Producto from "../models/producto.model.js";

export const bajaProducto = async (req, res) => {
    const { codigo } = req.params;

    try {
        const producto = await Producto.findOne({ codigo });

        if (!producto) {
            return res.status(404).json({ error: "Producto no encontrado." });
        }

        if (!producto.estatus) {
            return res.status(400).json({ error: "El producto ya está dado de baja." });
        }

        producto.estatus = false;
        producto.fechaBaja = new Date();

        const saveProducto = await producto.save();

        res.json(saveProducto);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
};
