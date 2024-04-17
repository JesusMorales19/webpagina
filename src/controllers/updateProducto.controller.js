
import Producto from "../models/producto.model.js";

export const updateProduct = async (req, res) => {
  const { codigo, nombre, descripcion } = req.body;

  try {
    const existingProduct = await Producto.findOne({ codigo });

    if (!existingProduct) {
      return res.status(404).send("Producto no encontrado");
    }

    // Actualiza solo el nombre y la descripción
    existingProduct.nombre = nombre;
    existingProduct.descripcion = descripcion;

    const updatedProduct = await existingProduct.save();
    res.send(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al actualizar el producto");
  }
};
