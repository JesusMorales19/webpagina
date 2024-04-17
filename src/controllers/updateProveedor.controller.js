
import Proveedor from "../models/proveedor.model.js";

export const updateProveedors = async (req, res) => {
  const { idProveedor, telefono, correo } = req.body;

  try {
    const existingProveedors = await Proveedor.findOne({ idProveedor });

    if (!existingProveedors) {
      return res.status(404).send("Proveedor no encontrado");
    }

    // Actualiza solo el telefono y el correo
    existingProveedors.telefono = telefono;
    existingProveedors.correo = correo;

    const updatedProveedors = await existingProveedors.save();
    res.send(updatedProveedors);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al actualizar el proveedor");
  }
};
