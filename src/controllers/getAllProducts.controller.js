
import Producto from "../models/producto.model.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Producto.find();
    console.log(products);
    res.send(products);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener proveedores");
  }
};
