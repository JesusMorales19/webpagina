import Proveedor from "../models/proveedor.model.js";

export const getAllProveedors = async (req, res) => {
  try {
    const proveedores = await Proveedor.find();
    console.log(proveedores);
    res.send(proveedores);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener productos");
  }
};
