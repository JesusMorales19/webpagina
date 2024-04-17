import Proveedor from "../models/proveedor.model.js";

export const proveedor = async (req, res) => {
    console.log(req.body);
    const { idProveedor, nombre, apellido, empresa, telefono, correo, status } = req.body;

    try {
        const newProveedor = new Proveedor({
            idProveedor,
            nombre,
            apellido,
            empresa,
            telefono,
            correo,
            status
        });

        const saveProveedor = await newProveedor.save();
        res.send(saveProveedor);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
